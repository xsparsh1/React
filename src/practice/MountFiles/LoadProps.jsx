import DefaultProps from "../Props/DefaultProps";
import Prop1 from "../Props/Prop1";
import Prop2 from "../Props/Prop2";
import {useState} from "react";

function LoadProps(){
    const name="Hello";
    const age=25;
    const [toggle,setToggle]=useState(false);
    const handleChange=()=>{
        setToggle(!toggle)
    }
    return(
        <div>
            {/* <Prop1 value={name} value2={age}/>
            {toggle && <Prop2 value="okay"/>}
            <button onClick={handleChange}>Click</button> */}
            <DefaultProps />  {/*No props passed comp will use its own default props*/} 
        </div>
    )
}
export default LoadProps;