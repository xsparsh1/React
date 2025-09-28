import React from "react";
import {useState} from"react";

const ChildComp=React.memo(function Comp({name}){               //using react.memo to make pure comp
    console.log(name)                                           //memo rerender only when value changes. 
    return (
        <div>
            <h3>Your name is {name}</h3>                
        </div>
    )
})

function PureComp(){
    
    const [counter,setCounter]=useState(0);

    return(
        <div>
            <h2>Your Counter is {counter}</h2>
            <button onClick={()=>setCounter(counter+1)}>Change</button>
            <ChildComp name="sparsh"/>
        </div>
    )
}

export default PureComp;