import { Routes, Route, NavLink } from "react-router-dom";
import Userlist from "./UserList";
import Adduser from "./Adduser";
import UserEdit from "./Useredit";

export default function App() {

 
  return (
    <>
      <h1>Fetch Data From getUserData</h1>
      <div>
        <ul style={{listStyle:"none", display:'flex', justifyContent:"space-evenly"}}>
          <li>
            <NavLink to="/list">List</NavLink>
          </li>
          <li>
           <NavLink to="/add user">Add User</NavLink>
          </li>
        </ul>
      </div>

      {/* {error && <p>Error: {error}</p>} */}
  
   {/* <Adduser/> */}
   <Routes>
    <Route path="/list" element={<Userlist/>}/>
    <Route path="/add user" element={<Adduser/>}/>
    <Route path="/edit/:id" element={<UserEdit/>}/>
   </Routes>
    </>
  );
}
