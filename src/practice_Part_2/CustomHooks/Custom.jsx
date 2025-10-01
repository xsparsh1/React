import { useToggle } from "./useToggle"

export function Custom(){

    //using custom toggle hook, now it can be used all the comp no need to rewrite each time for toggling.
    const [value,setValue]=useToggle(true);

    return(
        <div>
            {value?<h2>You can Toggle this heading using your own Custom Hook</h2>:null}
            <br/>
            <br/>
            <button onClick={setValue}>Toggle heading</button>
            <button onClick={()=>{setValue(true)}}>Show heading</button>
            <button onClick={()=>{setValue(false)}}>Hide heading</button>
        </div>
    )
}