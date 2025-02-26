const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('Sever is running!');
});

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
});

app.post('/login',(req,res)=>{
    const {email,password}=req.body;

    if (!email) {
        return res.status(400).json({success:false,message:'Email cannot be empty'});

    }
    if (!password) {
        return res.status(400).json({success:false,messAGE:'Password cannot be empty'});

    }

    if (email==='test@example.com' && password === 'password123'){
        res.json({success:true,message:'Login Success!'});
    }else{
        res.status(401).json({success:false,message:'Invalid credentials!'})
    }
});