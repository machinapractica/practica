import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
const { createApp } = await import(pathToFileURL(resolve(process.argv[2], 'server/server.mjs')));
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { request } from 'node:http';
const directory = mkdtempSync(join(tmpdir(), 'deepsea-concurrency-review-'));
const {server} = createApp({directory});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
try {
 const base = `http://127.0.0.1:${server.address().port}`;
 const created = await fetch(`${base}/api/rooms`, {method:'POST',body:JSON.stringify({name:'Host'})}).then(r=>r.json());
 const path = `/api/rooms/${created.room.code}/join`;
 let arrivals=0, release;
 const bothArrived = new Promise(resolve=>release=resolve);
 server.on('request', req=>{if(req.url===path && ++arrivals===2) release();});
 const pending = ['Alice','Bob'].map(name=>{
   const body=JSON.stringify({name});
   let resolveResponse;
   const response=new Promise(resolve=>resolveResponse=resolve);
   const req=request(`${base}${path}`,{method:'POST',headers:{'Content-Type':'application/json','Content-Length':Buffer.byteLength(body)}},res=>{let text='';res.on('data',chunk=>text+=chunk);res.on('end',()=>resolveResponse({status:res.statusCode,body:JSON.parse(text)}));});
   req.flushHeaders();
   return {req,body,response};
 });
 await bothArrived;
 for(const item of pending)item.req.end(item.body);
 const replies=await Promise.all(pending.map(item=>item.response));
 const final=await fetch(`${base}/api/rooms/${created.room.code}`,{headers:{Authorization:`Bearer ${created.token}`}}).then(r=>r.json());
 console.log(JSON.stringify({accepted:replies.map(r=>r.status),players:final.room.players.map(p=>p.name),expectedPlayers:3},null,2));
} finally {await new Promise(resolve=>server.close(resolve));rmSync(directory,{recursive:true,force:true});}
