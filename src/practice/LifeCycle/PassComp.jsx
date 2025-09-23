import {useState} from"react";
import "../InputFeild/Checkbox.css"
import LifeCycle from "./LifeCycle";

function PassComp(){

    const [counter,setCounter] = useState(0);
    const [dec,setDec] =useState(100);
    const [toggle,setToggle]=useState(true);

    return(
        <div className="div">
            {(toggle)?<LifeCycle counter={counter} dec={dec}/>:null}       {/*Using Toggle to show unmount Stage */}
            <button onClick={()=>setCounter(counter+1)} style={{margin:"20px 10px"}}>Increment Counter</button>
            <button onClick={()=>setDec(dec-1)}>Decrease Counter</button>
            <button onClick={()=>setToggle(!toggle)}>Unmount</button>

        </div>
    )
}
export default PassComp;