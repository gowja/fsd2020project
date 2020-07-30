const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/Ucity');
const schema=mongoose.Schema;

var newdata=new schema({
    uname : String,
    pw : String
});

var personaldata=mongoose.model('personal',newdata,'personal');
module.exports=personaldata;