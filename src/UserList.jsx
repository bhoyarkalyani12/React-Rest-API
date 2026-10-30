import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";

 function Userlist() {
  const [data, setData] = useState([]);
  // const [error, setError] = useState("");
  const url ="http://localhost:3000/users";
  const navigate = useNavigate();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const url = "http://localhost:3000/users";

        let response = await fetch(url);

        if (!response.ok) {
          throw new Error("API request failed");
        }

        response = await response.json();

        console.log("User Data:", response);
        setData(response);
      } catch (error) {
        console.log("Error:", error);
        // setError(error.message);
      }
    };

    getUserData();
  }, []);

  const deleteUser= async(id) =>{
    console.log(id)
    let response =await fetch(url+"/"+id,{
      method:"delete"
    });
    response = await response.json();
    if(response){
      alert("record Deleted")
      
    }
  }

  const editUser=(id) =>{
    navigate("/edit/"+id)
  }

  return (
    <>
      <h1>Fetch Data From getUserData</h1>

      {/* {error && <p>Error: {error}</p>} */}


<ul className="user-header user-data">
  <li>Name</li>
  {/* <li>Id</li>
  <li>Age</li> */}
  <li>Mobile</li>
  <li>Email</li>
  <li>Action</li>
</ul>
      {data.map((user) => (
        <ul className="user-data">
          <li>{user.name}</li>
          {/* <li>{user.id}</li>
          <li>{user.age}</li> */}
          <li>{user.mobile}</li>
          <li>{user.email}</li>
          <li><button onClick={() =>deleteUser(user.id)}>Delete</button></li>
          <li><button onClick={() =>editUser(user.id)}>Edit</button></li>
        </ul>
      ))}
    </>
  );
}
export default Userlist;