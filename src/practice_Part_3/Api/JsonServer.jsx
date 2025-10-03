import { useState, useEffect } from "react";

export function JsonServer(){

    const [details,setDetails]=useState([]);

    //Loader, you can decrease network speed from network tab in browser to test this.
    const [loading,setLoading]=useState(false);             

    useEffect(()=>{
        connect();
        setLoading(true);
    },[])

    const connect=async ()=>{
        //Custom json Server endpoint, https://www.npmjs.com/package/json-server  - Create your own Api
        const url="http://localhost:3000/users";                
        let response=await fetch(url)
        response=await response.json();
        setDetails(response);
        setLoading(false);
    }

    return(
        <>
        {/* Loader based Ui */}
        {
            loading ? <img src="https://magenticians.com/wp-content/uploads/2018/07/Test-Website-Load-Time.jpeg"
            width="500px"/>
            : <h2>Data will be fetched from jsonServer</h2>
        }
        
        {
            details && details.map((num)=>(
                <ul key={num.id}>
                    <li style={{marginLeft:"20px"}}>{num.name} , {num.age} </li>
                </ul>
            ))
        }
        </>
    )
}