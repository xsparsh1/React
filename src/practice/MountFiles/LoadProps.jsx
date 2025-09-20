import DefaultProps from "../Props/DefaultProps";
import Prop1 from "../Props/Prop1";
import Prop2 from "../Props/Prop2";
import {useState} from "react";
import JsxProps from "../Props/JsxProps";

function LoadProps(){
    const name="Hello";
    const age=25;
    const [toggle,setToggle]=useState(false);
    const handleChange=()=>{
        setToggle(!toggle)
    }
    return(
        <div>
            <Prop1 value={name} value2={age}/>      {/*Props passing*/}
            {toggle && <Prop2 value="okay"/>}
            <button onClick={handleChange}>Click</button> 

            <DefaultProps />  {/*No props passed comp will use its own default props*/} 

            <JsxProps color="yellow">       {/*Color prop is used */}
                <h1>Passing this html and text color as prop</h1>    {/*Html Code is paased as prop,which is used a children in other props*/}
            </JsxProps>
        </div>
    )
}
export default LoadProps;