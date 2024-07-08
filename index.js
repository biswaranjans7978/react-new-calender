const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/demo');
console.log('db connected');
  
}
const userSchema= new mongoose.Schema({
    name: String,
    mobile: String,
    holiday: String,
    details: String,
    
  });
  const User = mongoose.model('User', userSchema);


  const usersSchema =new mongoose.Schema({
    uname: String,
    email: String,
    message: String
  })
  const User1 = mongoose.model('UserData', usersSchema);

 
const server = express();

server.use(cors());
server.use(bodyParser.json());

//CRUD-create
server.post('/demo',async(req,res)=>{
     
    let user = new User()
    user.name = req.body.name;
    user.mobile = req.body.mobile;
    user.holiday = req.body.holiday;
    user.details = req.body.details;
    const doc = await user.save()

    console.log(doc);
    res.json(doc);
})

server.post('/userdata',async(req,res)=>{
  let user = new User1()
  user.uname = req.body.uname;
  user.email = req.body.email;
  user.message = req.body.message;
  const doc = await user .save()
  console.log(doc);
  res.json(doc)
})


server.listen(8080,()=>{
    console.log('server started');
})