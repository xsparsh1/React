import {useId} from "react";

export function Id(){
    
    //useId assign a Unique Id
    const nameId=useId();
    const passId=useId();

    return(
        <div>
             <form>
                <input type="text" placeholder="Enter Your Name" id={nameId}/>
                {console.log(nameId)}
                <br/>
                <br/>
                <input type="password" placeholder="Enter Your Password" id={passId}/>
                {console.log(passId)}
                <br/>
                <br/>
                <button>Submit</button>
            </form>
        </div>
    )
}