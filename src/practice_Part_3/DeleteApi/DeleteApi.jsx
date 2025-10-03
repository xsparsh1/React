import { useState, useEffect } from "react";

export function DeleteApi(){

    const [details,setDetails]=useState([]);

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

    const handleDelete=async (id)=>{
        const url="http://localhost:3000/users";
        //Map url with uniue id and use method :delete
        let response=await fetch(url+'/'+id,{
            method:"delete"
        })

        //response.ok beacuse response is always true in case of delete so we used response.ok which is true when http is in successfull range.
        if(response.ok){
            alert("User deleted Successfully");
            connect();
        }
        else alert("failed to delete user")
    }

    return(
        <>
        <h2 style={{margin:"20px 5px"}}>Current Users:</h2>
        {
            details && details.map((num)=>(
                <ul key={num.id}>
                    <li style={{marginLeft:"20px"}}>
                        <h3>{num.name} , {num.age}
                            &emsp; <button onClick={()=>{handleDelete(num.id)}}>Delete</button>
                        </h3>
                    </li>
                </ul>
            ))
        }
        </>
    )
}