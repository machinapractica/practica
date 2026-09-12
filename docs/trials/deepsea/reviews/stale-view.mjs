import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
const project=resolve(process.argv[2]);
const { createApp } = await import(pathToFileURL(resolve(project, 'server/server.mjs')));
const { chromium } = await import(pathToFileURL(resolve(project, 'node_modules/@playwright/test/index.mjs')));
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
const directory=mkdtempSync(join(tmpdir(),'deepsea-stale-review-'));
const {server}=createApp({directory,root:resolve(project,'dist')});
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const browser=await chromium.launch();
let releaseOld;
try {
 const base=`http://127.0.0.1:${server.address().port}`;
 const host=await browser.newPage(), guest=await browser.newPage();
 await host.goto(base);await host.getByLabel('Your name').fill('Host');await host.getByRole('button',{name:'Create a room',exact:true}).click();
 const code=await host.getByTestId('room-code').textContent();
 let fetched;const oldFetched=new Promise(resolve=>fetched=resolve);const release=new Promise(resolve=>releaseOld=resolve);let first=true;
 await host.route('**/api/rooms/*',async route=>{
  if(route.request().method()!=='GET'||!first)return route.continue();
  first=false;const response=await route.fetch();fetched();await release;await route.fulfill({response});
 });
 await Promise.race([oldFetched,new Promise((_,reject)=>setTimeout(()=>reject(new Error('No poll')),5000))]);
 await guest.goto(base);await guest.getByLabel('Your name').fill('Alice');await guest.getByLabel('Room code').fill(code);await guest.getByRole('button',{name:'Join a room',exact:true}).click();
 await host.locator('.roster').filter({hasText:'Alice'}).waitFor();
 releaseOld();
 let regressed=false;
 try{await host.waitForFunction(()=>!document.querySelector('.roster').textContent.includes('Alice'),{},{timeout:1500});regressed=true;}catch{}
 console.log(JSON.stringify({joinedPlayerSeen:true,olderResponseRemovedPlayer:regressed},null,2));
}finally{releaseOld?.();await browser.close();await new Promise(resolve=>server.close(resolve));rmSync(directory,{recursive:true,force:true});}
