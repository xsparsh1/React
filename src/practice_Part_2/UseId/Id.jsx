import {useId} from "react";

export function Id(){
    
    //useId assign a Unique Id, Mutiple unique id also can be used. I used prefix method.
    const nameId=useId();

    return(
        <div>
             <form>

                {/*Add id in prefix */}
                <input type="text" placeholder="Enter Your Name" id={nameId+"name"}/>
                {console.log(nameId)}
                <br/>
                <br/>
                <input type="password" placeholder="Enter Your Password" id={nameId+"pass"}/>
                {console.log(passId)}
                <br/>
                <br/>
                <button>Submit</button>

            </form>
        </div>
    )
}