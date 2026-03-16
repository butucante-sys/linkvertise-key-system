
export default function handler(req, res) {

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function randomKey(length = 20){
let key = "";
for(let i=0;i<length;i++){
key += chars[Math.floor(Math.random()*chars.length)];
}
return key;
}

const key = randomKey();

global.keys = global.keys || {};
global.keys[key] = Date.now() + (24 * 60 * 60 * 1000);

res.send(`
<h2>Your Key</h2>
<h1>${key}</h1>
<p>Expires in 24 hours</p>
`);

}
