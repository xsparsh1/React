import { useFormStatus } from "react-dom";

function UseFormStatus(){

    const handle=async()=>{                             //Adding delay to show useFormStatus.
        await new Promise(resolve=>
            setTimeout(resolve,2000));
            console.log("Adding delay");
    }

    function Func(){                            
        const {pending}=useFormStatus();                //Pending tells us the status of form.
        console.log(pending);
        return(                                         //Pending always used inside form.
            <button type="submit" disabled={pending}>{pending?"Submiting...":"Submit"}</button>
        )
    }
    
    return(
        <div>
            <form action={handle}>
                <input type="text" placeholder="Enter Your name"/>
                <br/>
                <input type="text" placeholder="Enter Your name"/>
                <br/>
                <Func/>
            </form>
        </div>
    )
}

export default UseFormStatus;