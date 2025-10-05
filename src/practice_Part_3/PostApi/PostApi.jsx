import { useState, useEffect } from "react";

export function PostApi(){

    const [details,setDetails]=useState([]);
    const [name,setName]=useState('');
    const [age,setAge]=useState('');
    const [id,setId]=useState('');

    useEffect(()=>{
        connect();
    },[])

    const connect=async ()=>{
        //Custom json Server endpoint, https://www.npmjs.com/package/json-server  - Create your own Api
        //Make Sure Json Server is Live
        const url="http://localhost:3000/users";                
        let response=await fetch(url)
        response=await response.json();
        setDetails(response);
    }

    const handleSubmit=async()=>{
        const url="http://localhost:3000/users";

        //We use post method to get data from user and store in api.
        let response=await fetch(url,{
            method:"post",
            body:JSON.stringify({name,age,id})
        })

        //if user added then call connect to get new updated users and set back default values for input feilds.
        if(response) {
            alert("New User Added");
            connect();
            setName('');
            setAge('');
            setId('');
        }
        else alert("Failed to add new User")
    }

    return(
        <>
        <h2 style={{margin:"20px 5px"}}>Current Users:</h2>
        {
            details && details.map((num)=>(
                <ul key={num.id}>
                    <li style={{marginLeft:"20px"}}><h3>{num.name} , {num.age}</h3> </li>
                </ul>
            ))
        }

        <br/>
        <hr/>
        <br/>

        <h2>Add New User: </h2>
        <br/>
        <input type="text" placeholder="Enter Your Name" onChange={(e)=>(setName(e.target.value))} value={name}/>
        <br/>
        <br/>
        <input type="text" placeholder="Enter Your Age" onChange={(e)=>(setAge(e.target.value))} value={age}/>
        <br/>
        <br/>
        <input type="text" placeholder="Enter Your Id" onChange={(e)=>(setId(e.target.value))} value={id}/>
        <br/>
        <br/>
        <button onClick={handleSubmit} style={{marginLeft:"50px"}}>Submit</button>
        </>
    )
}