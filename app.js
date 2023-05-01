const express = require('express');
const app = express();
const accountSid = 'AC92293dcda3bc076860b99e1b1ef7e7d0';
const authToken = 'f69231ed5b8760cc783589e8958ecd9b';
const client = require('twilio')(accountSid, authToken);
app.get('/',(req,res)=>{
// whatsapp://send?phone=+14155238886&text=https://timberwolf-mastiff-9776.twil.io/demo-reply
client.messages
    .create({
        body: 'message ala asel tr call kar',
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+917387413901'
    })
    .then(message => console.log(message))
    res.json({
        status:"success"
    })
})
app.post('/reply',(req,res)=>{
    console.log(req.body);
    res.json({
        status:"success"
    })
})
app.get('/msg',(req,res)=>{
    const accountSid = 'AC92293dcda3bc076860b99e1b1ef7e7d0';
const authToken = 'f69231ed5b8760cc783589e8958ecd9b';
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
                from: 'whatsapp:+14155238886',
        to: 'whatsapp:+917249188337',
        body:"this i sme"
    })
    .then(message => console.log(message.sid))
    
})

app.listen(3000,()=>{
    console.log("app is listing in port 3000")
})