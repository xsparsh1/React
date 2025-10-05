import {useEffect, useState} from 'react';

export function GetApi(){

    const [details,setDetails]=useState([]);

    useEffect(()=>{
        makeCall();
    },[])

    async function makeCall(){
        const url="https://dummyjson.com/users";
        let response=await fetch(url);                  //fetch() returns promise therefore used await 
        response=await response.json();                 //Save with json()
        setDetails(response.users);
    }    

    return(
        <>
        <h1 style={{margin:"20px 0"}}>Geting Data from Api: </h1>
            <ul style={{marginLeft:"30px"}}>
                {
                    details && details.map((item)=>(
                
                    <li key={item.id}>
                        {item.age} , {item.firstName} , {item.lastName}
                    </li>
                    ))
                }
                </ul>
        </>
    )
}