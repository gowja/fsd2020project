const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/Ucity');
const schema=mongoose.Schema;

var markdata=new schema({
    sub1 : Number,
    sub2 : Number,
    sub3 : Number,
    sub4 : Number,
    sub5 : Number
})

var addmark=mongoose.model('addmark',markdata,'mark');
module.exports=addmark;