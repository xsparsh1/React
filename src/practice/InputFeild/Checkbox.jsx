import "./Checkbox.css";
import {useState} from "react";

function Checkbox(){

    const [skills,setSkills]=useState([]);      //State to manage checkbox

    const handlechange=(e)=>{
        const value=e.target.value;
        const check=e.target.checked;            //on when checkbox is checked otherwise false;
        if(check){
            setSkills([...skills,value]);
        }
        else{
            setSkills(skills.filter((item)=>
                item!=value
            ));
        }
    }

    return (
        <div className="div">
            <h3>Select Your Skils:</h3>
            <br/>
            <label htmlFor="cb1">Dsa</label>
            <input type="checkbox" id="cb1" value="dsa" onChange={handlechange}/>

            <br/>
            <label htmlFor="cb12">OS</label>
            <input type="checkbox" id="cb12" value="os" onChange={handlechange}/>

            <br/>
            <label htmlFor="cb13">DBMS</label>
            <input type="checkbox" id="cb13" value="dbms" onChange={handlechange}/>

            <h3>Your Selected Skills are : {skills.join(", ")}</h3>   {/*Display skills element using ", " after each element. */}

        </div>
    )
}
export default Checkbox;