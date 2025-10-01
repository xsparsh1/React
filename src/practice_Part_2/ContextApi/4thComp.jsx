import { useContext } from "react"
import { Subject } from "./Context";

export function Comp4(){

    //Using Context Value from 1st Comp directly to last Comp in hierarchy.
    const sub=useContext(Subject);

    return(
        <div>
            <h2>Subject Comp</h2>
            <br/>
            <h2>Your Subject is {sub}</h2>
        </div>
    )
}