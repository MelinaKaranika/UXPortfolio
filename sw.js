/* Unlocks portfolio media on the fly.
   Media files are stored as <name>.bin (AES-GCM, 12-byte IV first).
   The page hands this worker the key after the passcode is entered. */
const TYPES={jpg:'image/jpeg',jpeg:'image/jpeg',png:'image/png',webp:'image/webp',gif:'image/gif',svg:'image/svg+xml',mp4:'video/mp4',webm:'video/webm',pdf:'application/pdf'};
const LOCKED=['ai/','esg/','games/','fintech/','web-apps/'];
let KEY=null;
const cache=new Map(); // recent decrypted files (videos are requested in ranges)
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('message',e=>{if(e.data&&e.data.mkKey){KEY=e.data.mkKey}});

function locked(url){
  if(url.origin!==self.location.origin)return null;
  const scope=new URL(self.registration.scope).pathname;
  if(!url.pathname.startsWith(scope))return null;
  const rel=url.pathname.slice(scope.length);
  if(!LOCKED.some(p=>rel.startsWith(p)))return null;
  const ext=(url.pathname.split('.').pop()||'').toLowerCase();
  return TYPES[ext]?TYPES[ext]:null;
}
async function askKey(clientId){
  const list=[];
  if(clientId){const c=await self.clients.get(clientId);if(c)list.push(c)}
  list.push(...await self.clients.matchAll({type:'window'}));
  for(const c of list){
    const k=await new Promise(res=>{const ch=new MessageChannel();const t=setTimeout(()=>res(null),3000);ch.port1.onmessage=m=>{clearTimeout(t);res(m.data)};c.postMessage({type:'mk-need-key'},[ch.port2])});
    if(k){KEY=k;return k}
  }
  return null;
}
async function plain(url,clientId){
  const k=url.pathname;
  if(cache.has(k))return cache.get(k);
  const key=KEY||await askKey(clientId);
  if(!key)return null;
  const r=await fetch(url.pathname+'.bin');
  if(!r.ok)return null;
  const b=new Uint8Array(await r.arrayBuffer());
  const out=await crypto.subtle.decrypt({name:'AES-GCM',iv:b.subarray(0,12)},key,b.subarray(12));
  cache.set(k,out);if(cache.size>6)cache.delete(cache.keys().next().value);
  return out;
}
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const url=new URL(e.request.url);
  const type=locked(url);if(!type)return;
  e.respondWith((async()=>{
    let buf;
    try{buf=await plain(url,e.clientId||e.resultingClientId)}catch(err){buf=null}
    if(!buf)return new Response('Locked',{status:403});
    const size=buf.byteLength,range=e.request.headers.get('range');
    const m=range&&/bytes=(\d*)-(\d*)/.exec(range);
    if(m){
      let s=m[1]===''?size-+m[2]:+m[1],end=m[1]!==''&&m[2]!==''?+m[2]:size-1;
      s=Math.max(0,s);end=Math.min(end,size-1);
      return new Response(buf.slice(s,end+1),{status:206,headers:{'Content-Type':type,'Content-Range':`bytes ${s}-${end}/${size}`,'Content-Length':String(end-s+1),'Accept-Ranges':'bytes'}});
    }
    return new Response(buf,{status:200,headers:{'Content-Type':type,'Content-Length':String(size),'Accept-Ranges':'bytes'}});
  })());
});
