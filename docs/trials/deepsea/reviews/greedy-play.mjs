import { resolve } from 'node:path';
const project=resolve(process.argv[2]);
const { chromium, expect } = await import(pathToFileURL(join(project,'node_modules/@playwright/test/index.mjs')));
import { mkdtempSync, cpSync, rmSync, writeFileSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
const directory=mkdtempSync(join(tmpdir(),'deepsea-greedy-review-'));
cpSync(join(project,'dist'),join(directory,'dist'),{recursive:true});
const {createApp}=await import(pathToFileURL(join(directory,'dist/server/server.mjs')));
const {server}=createApp({directory:join(directory,'rooms'),root:join(directory,'dist'),seed:42});
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const browser=await chromium.launch();
try{
 const base=`http://127.0.0.1:${server.address().port}`;
 const pages=[await browser.newPage({viewport:{width:390,height:844}}),await browser.newPage({viewport:{width:1280,height:900}})];
 const [host,guest]=pages;
 await host.goto(base);await host.getByLabel('Your name').fill('Ada');await host.getByRole('button',{name:'Create a room',exact:true}).click();
 const code=await host.getByTestId('room-code').textContent();
 await guest.goto(base);await guest.getByLabel('Your name').fill('Bea');await guest.getByLabel('Room code').fill(code);await guest.getByRole('button',{name:'Join a room',exact:true}).click();
 await expect(host.locator('.roster li')).toHaveCount(2);await host.getByRole('button',{name:'Start game',exact:true}).click();
 let observedLoss=false,actions=0,state;
 for(;actions<180;actions++){
  state=await host.evaluate(async()=>{const s=JSON.parse(localStorage.getItem('deepsea-session'));return(await(await fetch(`/api/rooms/${s.code}`,{headers:{Authorization:`Bearer ${s.token}`}})).json()).room;});
  for(const page of pages)await expect(page.locator('#app')).toHaveAttribute('data-revision',String(state.revision));
  const g=state.game;
  if(g.phase==='summary')break;
  const actor=pages[state.players.findIndex(p=>p.id===(g.phase==='loss'?g.lossActor:g.turn))];
  if(g.phase==='loss'){
   observedLoss=true;
   await actor.screenshot({path:'/tmp/deepsea-greedy-loss.png',fullPage:true});
   await actor.getByRole('button',{name:'Confirm loss order',exact:true}).click();
  }else if(g.phase==='direction')await actor.getByRole('button',{name:'Continue outward & roll',exact:true}).click();
  else if(g.phase==='landing')await actor.getByRole('button',{name:g.path[g.players.find(p=>p.id===g.turn).position]?'Collect treasure':'Leave it',exact:true}).click();
  else throw new Error(`Unexpected phase ${g.phase}`);
  await expect(actor.locator('#app')).not.toHaveAttribute('data-revision',String(state.revision));
 }
 expect(observedLoss).toBe(true);expect(state.game.phase).toBe('summary');expect(state.game.players.every(p=>p.status==='stranded'&&p.carried.length===0)).toBe(true);
 for(const page of pages)await expect(page.getByRole('heading',{name:'Dive 1 complete',exact:true})).toBeVisible();
 await host.getByRole('button',{name:'Start next dive',exact:true}).click();
 for(const page of pages)await expect(page.getByTestId('dive')).toHaveText('2');
 const result={artifact:JSON.parse(readFileSync(join(directory,'dist/build.json'))),actions,ordinaryLossFlow:true,allPlayersStranded:true,nextDiveStarted:true};
 writeFileSync('/tmp/deepsea-greedy-review.json',JSON.stringify(result,null,2));console.log(JSON.stringify(result,null,2));
}finally{await browser.close();await new Promise(resolve=>server.close(resolve));rmSync(directory,{recursive:true,force:true});}
