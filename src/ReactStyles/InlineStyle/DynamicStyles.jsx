import {useState} from "react";

function DynamicStyles() {

    const [color,setColor]=useState("black");
    const [bg,setBg]=useState(true);

    const style={
        color:"red",
        backgroundColor:color,
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }

    return(
        <div style={style}>
            <div>
                <h1>Click to get background change</h1>
                {(bg)?<button onClick={()=>{setColor("yellow"), setBg(!bg)}}>Click Me</button>:
                <button onClick={()=>{setColor("black"),setBg(!bg)}}>Click Me</button>}
            </div>
        </div>
    )
}

export default DynamicStyles;