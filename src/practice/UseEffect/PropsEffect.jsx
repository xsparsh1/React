import {useEffect} from "react";

function PropsEffect({counter,dec}){

    const handleChange=()=>{
        console.log("Counter changed to:", counter);
    }

    const handleDec=()=>{
        console.log("Dec changed to:", dec);
    }

    // handleChange();        //Gets called on every render of prop change

    useEffect(()=>{
        handleChange();         //Gets called only on prop change once because of empty dependency array
    },[])

    useEffect(()=>{
        handleDec();        
    },[dec])

    return(
        <div>
            <h3>Im Increment counter : {counter}</h3>
            <h3>Im Decrease counter : {dec}</h3>
        </div>
    )
}
export default PropsEffect;