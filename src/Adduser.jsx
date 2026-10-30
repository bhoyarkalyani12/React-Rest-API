import { useState } from "react";

function Adduser() {
const [name, setName] = useState([]);
const [age, setAge] = useState([]);
const [email, setEmail] = useState([]);

     const createuser =async() =>{
    console.log(name,age , email);
    const url="http://localhost:3000/users";
    let response= await fetch(url,{
      method:'post',
      body:JSON.stringify({name,email,age})
    });
    response= await response.json();
    if(response){
      alert("New User Is Add")
    }
  }

    return(
         <div style={{textAlign:"center"}} className="form">
      <h1>User Registration Form</h1>

      <label>Name: </label>
      <input type="text" onChange={(event)=>setName(event.target.value)} placeholder="Enter your name" />
      <br /><br />

      <label>Email: </label>
      <input type="text" onChange={(event)=>setAge(event.target.value)} placeholder="Enter your email" />
      <br /><br />

      <label>Mobile Number: </label>
      <input type="text"onChange={(event) =>setEmail(event.target.value)} placeholder="Enter mobile number" />
      <br /><br />

      <button type="button" onClick={createuser}>Submit</button>
    </div>
    )
}

export default Adduser;