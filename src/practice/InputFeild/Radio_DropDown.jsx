import {useState} from"react";
import "./Checkbox.css";

function Radio_DropDown(){

    const [lang,setLang]=useState("");
    const [topic,setTopic]=useState("Array");

    const handleChange=(e)=>{
        setLang(e.target.value);
    }

    return(
        <div className="div">

            {/* Handling radio buttons input using react state */}
            <input type="radio" id="r1" value="React" name="lang" onChange={handleChange}/>
            <label htmlFor="r1">React.js</label>
            <br/>

            <input type="radio" id="r2" name="lang" value="Next" onChange={handleChange}/>
            <label htmlFor="r2">Next</label>
            <br/>

            <h3>You prefer : {lang}</h3>
            <br/>

            {/* Handling Drop Downs input using react state */}
            <select onChange={(e)=>setTopic(e.target.value)} defaultValue="Array">
                <option value="Array">Array</option>
                <option value="LinkedList">LinkedList</option>
                <option value="Tree">Tree</option>
            </select>
            <h3>You prefer : {topic}</h3>

        </div>
    )
}
export default Radio_DropDown;