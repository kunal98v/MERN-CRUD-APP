const express = require('express')
const mongoose = require('mongoose')
const UserModel = require('./models/Users')
const cors = require('cors')
require('dotenv').config();

const app = express()
const DATABASE_URI = process.env.DATABASE_URI
app.use(express.json())
app.use(cors())
mongoose.connect(DATABASE_URI);

app.get("/getUsers",async (req,res)=>{
   try{
    const users = await UserModel.find()
    res.json(users);
   }
   catch(err){
    console.log(err)
   }
});

app.post("/createUser",async(req,res)=>{
    const user = req.body;
    const newUser = new UserModel(user)
    await newUser.save()
    res.json(user);
});

app.post("/delUser",async(req,res)=>{
    const id = req.body;
    const uid = id.id;
    const result = await UserModel.deleteOne({_id:uid});
    console.log(result)
    res.json(id)
   
});

app.listen(4000,()=>{
    console.log("LISTENING ON PORT 4000..!!!")
})