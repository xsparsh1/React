import ChildFR from "./ChildFR";
import {useRef} from "react";

function ForwardRef(){

    const inputRef=useRef(null);

    const handle=()=>{
        inputRef.current.value=200;
        inputRef.current.focus();
    }

    return(
        <div>
            <ChildFR ref={inputRef}/>
            <button onClick={handle}>Focus</button>
        </div>
    )
}

export default ForwardRef;