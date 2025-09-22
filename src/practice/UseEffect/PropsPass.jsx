import {useState} from"react";
import PropsEffect from"./PropsEffect";
import "../InputFeild/Checkbox.css"

function PropsPass(){

    const [counter,setCounter] = useState(0);
    const [dec,setDec] =useState(100);

    return(
        <div className="div">
            <PropsEffect counter={counter} dec={dec}/>
            <button onClick={()=>setCounter(counter+1)}>Increment Counter</button>
            <button onClick={()=>setDec(dec-1)}>Decrease Counter</button>
        </div>
    )
}
export default PropsPass;