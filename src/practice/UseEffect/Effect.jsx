import {useEffect, useState} from "react";
import "../InputFeild/Checkbox.css"
function Effect(){

    const [counter,setCounter]=useState(0);
    const [dec,setDec]=useState(100);

    function check(){
        console.log("side effect you can see");
    }

    //check();    //On each change in state of counter, react rerender my function call too this is side effect

    useEffect(()=>{         
        check();            //inside useEffect, we have an empty array so its get called only once.
    },[]);

    useEffect(()=>{
        check();
    },[dec]);               //as array in 2nd param contains dec, only every change to dec,func loads.

    return(
        <div className="div">
            <h3>You counter is at {counter} and your Decrease is at {dec}</h3>
            <button onClick={()=>setCounter(counter+1)}>increase</button>
            <button onClick={()=>setDec(dec-1)}>decrease</button>
        </div>
    )
}

export default Effect;