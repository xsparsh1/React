import {useState} from"react";
import "./CC.css";
function CC(){

    //Each state is associated with single input field making it controlled comp.
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [gmail,setGmail]=useState("");
    const [submit,setSubmit]=useState(false);

    const [ename,setEname]=useState("");
    const [epass,setEpass]=useState("");
    const [email,setEmail]=useState("");

    const handleChange=(event)=>{
        const {name,value}=event.target;
        if(name==="name") {
            setName(value); 
            setEname("");
        }
        else if(name==="password") {
            setPassword(value);
            setEpass("");
        }
        else if(name==="mail") {
            setGmail(value);
            setEmail("");
        }
    }

    // Adding validation to input data.
    const validate=()=>{
        let valid=true;

        if(!name){
            setEname("Enter your name");
            valid=false;
        }
       

        if(!password){
            setEpass("Password cannot be empty!");
            valid=false;
        }
        else if(password.length<6||password.length>20){
            setEpass("password is too short");
            valid=false;
        }

        if(!gmail){
            setEmail("mail cannot be empty!");
            valid=false;
        }
        else if(!/\S+@\S+\.\S+/.test(gmail)){
            setEmail("Mail is invalid");
            valid=false;
        }
        return valid;
    }

    
    const handleSubmit=(event)=>{
        event.preventDefault();       //used to prevent default behaviour of browser to reload on submission.
        if(validate())
        setSubmit(true);
    }

    return(
        <div>
            <form className="form" style={{margin:"20px",color:"black"}} onSubmit={handleSubmit}>
                { (!submit)?(
                    <div>
                        <input type="text" className="input" value={name} onChange={handleChange} name="name" placeholder="Enter your name"/>
                        {/* in React, we don’t need an arrow function just to pass the event. React automatically passes the event object to the handler */}
                        {ename && <p style={{color:"red"}}>{ename}</p>}
                        <br/>
                        <input type="password" className="input" value={password} onChange={handleChange} name="password" placeholder="Enter password"/>
                        {epass && <p style={{color:"red"}}>{epass}</p>}
                        <br/>
                        <input type="email" className="input" value={gmail} onChange={handleChange} name="mail" placeholder="Enter you gmail"/>
                        {email && <p style={{color:"red"}}>{email}</p>}
                        <br/>
                        <button type="submit">Submit</button>
                    </div>
                ):(<div>
                    {/*2nd case is used to prevent user to edit form after one submission.*/}
                    <input type="text" className="input" value={name} name="name" placeholder="Enter your name"/>
                        <br/>
                        <input type="password" className="input" value={password} name="password" placeholder="Enter password"/>
                        <br/>
                        <input type="email" className="input" value={gmail} name="mail" placeholder="Enter you gmail"/>
                        <br/>
                        <button type="button">Submit</button>
                </div>)}   
            </form>
            {(submit)?<h1>Your name is {name}<br/>Your Mail is {gmail}</h1>:null}
        </div>
    )
}
export default CC;