export default function handler(req, res) {

const key = req.query.key;

if(!global.keys){
return res.json({valid:false});
}

const expire = global.keys[key];

if(expire && Date.now() < expire){
return res.json({valid:true});
}

res.json({valid:false});

}
