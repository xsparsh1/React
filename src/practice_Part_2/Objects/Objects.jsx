import {useState} from "react";

export function Objects(){

    //Object Creation
    const [data,setData]=useState({
        name:"Sparsh",
        age:19,
        address:{
            city:"Ghaziabad",
            country:"India"
        }
    })

    //Updating normal object property 
    const handleChange=(event)=>{
        const val=event.target.value;
        data.name=val;
        setData({...data})
    }

    //updating nested object property
    const handleCity=(event)=>{
        const val=event.target.value;
        setData({...data,address:{...data.address,city:val}});
    }

    return(
        <div>
            <h2>Using objects in React </h2>
            <br/>
            <h3>Your name: {data.name}</h3>
            <h3>Your age: {data.age}</h3>
            <h3>Your Address: {data.address.city} {data.address.country}</h3>
            <input type="text" placeholder="Enter name" onChange={handleChange}/>
            <br/>
            <input type="text" placeholder="Enter city" onChange={handleCity}/>
        </div>
    )
}

