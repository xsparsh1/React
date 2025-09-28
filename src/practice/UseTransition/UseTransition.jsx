import {useTransition} from "react";

function UseTransition(){

    const [pending,startTransition]=useTransition();                    //pending is initially false

    const handleChange=()=>{
        startTransition(async()=>{                                      //startTransition sets true to pending
            await new Promise(res=>setTimeout(res,3000))                //setTimeout to get some delay
        })                                                              //After 3 sec pending becomes true
    }
    
    return(
        <div>
            <h3>Welcome to UseTransition in React 19</h3>
            <button onClick={handleChange}>
                {pending?
                <img src="https://assets-v2.lottiefiles.com/a/d5392796-1169-11ee-908e-b33ed8d96ca4/kW0SJwvz27.gif"
                style={{width:"30px"}}/>: "click"}</button>
        </div>
    )
}

export default UseTransition;