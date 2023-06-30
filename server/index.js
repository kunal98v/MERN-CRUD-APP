const express = require('express')
const mongoose = require('mongoose')
const UserModel = require('./models/Users')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
mongoose.connect('mongodb+srv://kunal98v:Kunal1234$@mr47.9zgc8xn.mongodb.net/data_47?retryWrites=true&w=majority');

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