import {useRef} from "react";

function Ref(){

    const inputRef=useRef(null);                    //used to store reference of input element
    // console.log(inputRef);
    // console.log(inputRef.current);                //current property is used to access the element

    const handleRef=()=>{
        inputRef.current.focus();
        inputRef.current.style.backgroundColor="Yellow";
        inputRef.current.style.color="Red";
        inputRef.current.placeholder="Welcome Sparsh";
        console.log(inputRef.current.value);
    }

    const style={
        position:'relative',
        top:'100px',
        left:'500px'
    }

    return(
        <div style={style}>
            <input type="text" ref={inputRef} placeholder="Enter your name "/>
            <button onClick={handleRef}> Focus </button>
        </div>
    )
}

export default Ref;