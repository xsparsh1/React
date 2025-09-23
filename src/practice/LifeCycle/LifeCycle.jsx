import {useEffect} from "react";

function LifeCycle({counter,dec}){

    useEffect(()=>{             
        console.log("Comp got Mounted.")            //Mounting Comp
    },[]);

    useEffect(()=>{
        console.log("Comp got Updated by counter")
    },[counter]);                                   //Updating Comp by counter prop change

    useEffect(()=>{                                 
        return ()=>{                                //Unmounting Comp    
            console.log("Comp got Un-Mounted.")
        }
    },[]);

    return(
        <div>
            <h1>Your Counter is {counter}</h1>
            <h1>Your De-Counter is {dec}</h1>
        </div>
    )
}
export default LifeCycle;