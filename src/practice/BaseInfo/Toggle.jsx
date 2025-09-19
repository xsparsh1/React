import {useState} from "react";
function Toggle(){
    const[tog,settog]=useState(false);
    const handletog=()=>{
        settog(!tog);
    }
    return(
        <div>
            <h1>Im here to toggle</h1>
            <button onClick={handletog}>Toggle</button>
            {
                (tog)?<h1>Welcome sir</h1>:<h1>Goodbye sir</h1>
            }
        </div>
    )
}

export default Toggle;