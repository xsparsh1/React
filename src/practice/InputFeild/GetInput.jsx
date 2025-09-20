import {useState} from "react";

function GetInput(){
    const [name,setName]=useState("");
    return(
        <div style={{margin:"20px",color:"black"}}>         {/*Div conatining input element*/}

            <input type="text" value={name} onChange={(event)=>{setName(event.target.value)}}  placeholder="Enter your name" />           {/*Storing each input typed based on event*/}

            <h1>{name}</h1>             {/*Displaying entered input*/}
            <button onClick={()=>{setName("")}}>Clear</button>      {/*Button used to clear input*/}
        </div>
    )
}
export default GetInput;