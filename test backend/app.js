const express=require('express');
const pdata=require('./src/models/personal');
const mark=require('./src/models/mark');
const cors=require('cors');
const bodyparser=require('body-parser');


var app=new express();
app.use(cors());
app.use(bodyparser.json());

app.get('/get',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
    pdata.find()
    .then(function(data){
        res.send(data);
    });
});


app.get('/',(req,res)=>{
    res.send("hi");
});

app.post('/add',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
    console.log(req.body);
    newdata={
        uname :req.body.pdetail.uname,
        pw :req.body.pdetail.pw
    }
    var newdata=new pdata(newdata);
    newdata.save();
    res.send(newdata);
})



app.get('/addmark',(req,res)=>{
    newmark={
        sub1 : 70,
        sub2 :60,
        sub3:50,
        sub4:80,
        sub5:90
    }
    var newmark=new mark(newmark);
    newmark.save();
    res.send(newmark);
})
app.get('/mark',(req,res)=>{
    mark.find()
    .then(function(mk){
        res.send(mk)
   
    });
});

app.post('/deletep',(req,res)=>{
    
})
app.listen(7777,function(){
    console.log("success");
});