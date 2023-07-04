import './App.css';
import React ,{useState,useEffect}  from 'react';
import Axios from "axios";
import Toast from './components/Toast';

function App() {
  const [listUsers ,setListUsers] = useState([])
  const [name ,setname] = useState('')
  const [age ,setage] = useState('')
  const [email ,setemail] = useState('')

  useEffect(()=>{
    getData();
  },[listUsers]);
 
  const getData = ()=>{
    Axios.get("https://mern-g3vl.onrender.com/getUsers").then((response)=>{
    setListUsers(response.data)
  });
  }
  const addUser = ()=>{
    Axios.post("https://mern-g3vl.onrender.com/createUser",{
     name:name,
     age:age,
     email:email
    }).then((response)=>{
       console.log(response.data.name)
       getData();
       Toast(`Added user : ${response.data.name}`)
    });
   }
   function handleDelete(id,name){
      Axios.post("https://mern-g3vl.onrender.com/delUser",{
        id:id,
        name:name
      }).then((response)=>{
        console.log("del")
        Toast(`Deleted user : ${response.data.name}`)

      });
   }
   


  return( 
  <div>
    <h1>MERN CRUD APP</h1>
    <div className='inputs'>
      <input type='text' onChange={(e)=>{setname(e.target.value)}} placeholder='Enter name' required></input>
      <input type='number'  onChange={(e)=>{setage(e.target.value)}} placeholder='Enter age' required></input>
      <input type='email' onChange={(e)=>{setemail(e.target.value)}} placeholder='Enter email' required></input>
      <button className='addUser' onClick={addUser}>Add data</button>
    </div>
    <div className='app'>
     {listUsers.map((user)=>{
      return(
        <div className='container'> 
          <p>{user.name}</p>
          <p>{user.age}</p>
          <p>{user.email}</p>
          
          <button  className='delbtn' onClick={()=>{ handleDelete(user._id,user.name) }}>Delete</button>
          <button className='updbtn'>Update</button>
        </div>
        )})}
        <div id="toastBox" ></div>
     </div>
  </div>
  );
}

export default App;
