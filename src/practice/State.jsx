// function ClickEvents(){
//     let name ='sparsh';
//     function update(){
//         name='Tyagi';
//         console.log(name);
//     }
//     return(
//         <div>
//             <button onClick={update}>Click me</button>
//         </div>
//     )
// }
// export default ClickEvents;
// Above code will not work because react does not track normal variable changes for re-rendering the component
// We have to use useState hook for that


import {useState} from "react";
function State(){
    const[count,setCount]=useState(0);
    const handleChange=()=>{
        setCount(count+1);
    }
    return (
        <div>
            <h1> You can Update the Counter here:</h1>
            <button onClick={handleChange}>Increase</button>
        </div>
    )
}

export default State;