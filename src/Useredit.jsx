// import { useEffect, useState } from "react"
// import { useParams } from "react-router-dom";

// function UserEdit(){

//     const {id} = useParams();
//     const[name, setName] = useState('');
//     const[email, setEmail] = useState('');
//     const[age, setAge] = useState('');
//     const url = 'http://localhost:3000/users';

    

//     const getUserData = async()=>{
//         // setName(Response.name)
//         // setEmail(Response.email)
//         // setAge(Response.age)
//         const url= "http://localhost:3000/users"+id;
//         let response = await fetch(url);
//         response= await response.json();

//         console.log(response);
//         setName(Response.name)
//         setEmail(Response.email)
//         setAge(Response.age)

//     }
//     const updateUserData=async()=>{
//         console.log(name,age,email)
//         let response = await fetch(url, {
//             method:'Put',
//             body:JSON.stringify({name,age,email})
//         });
//         response = await response.json();
//         console.log(response);
//         if(response){
//             alert("User Data Updataed")
//         }
//     }

//     useEffect(() => {
//          getUserData();
//     }, []);

// return(
//     <div style={{textAlign:"center",padding:"20px"}}>
//         <h1>Edit User Details</h1>
//         <input type="text" placeholder="Enter Name" onChange={(event)=> setName(event.target.value)}/>
//         <br></br>
//         <input type="text" placeholder="Enter Email" onChange={(event)=> setEmail(event.target.value)}/>
//         <br></br>
//         <input type="text" placeholder="Enter Age" onChange={(event)=> setAge(event.target.value)}/>
//         <br></br>
//         <button onClick={updateUserData}>Update User</button>
//     </div>
// )
// }

// export default UserEdit;



import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserEdit() {
    const { id } = useParams();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [mobile, setMobile] = useState("");

    const url = `http://localhost:3000/users/${id}`;

    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error("Failed to fetch user data");
                }

                const data = await response.json();

                setName(data.name ?? "");
                setEmail(data.email ?? "");
                setAge(data.age ?? "");
                setMobile(data.mobile ?? "");
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };

        getUserData();
    }, [url]);

    const updateUserData = async () => {
        try {
            const response = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    age,
                    mobile
                })
            });

            if (!response.ok) {
                throw new Error("Failed to update user data");
            }

            const data = await response.json();

            console.log(data);
            alert("User data updated successfully!");
        } catch (error) {
            console.error("Error updating user:", error);
            alert("Failed to update user data");
        }
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Edit User Details</h1>

            <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />

            <br /><br />

            <input
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />

            <br /><br />

            <input
                type="number"
                placeholder="Enter Age"
                value={age}
                onChange={(event) => setAge(event.target.value)}
            />

            <br /><br />
            <input
                type="number"
                placeholder="Enter Mobile"
                value={mobile}
                onChange={(event) => setMobile(event.target.value)}
            />
            <br /><br />

            <button onClick={updateUserData}>
                Update User
            </button>
        </div>
    );
}

export default UserEdit;