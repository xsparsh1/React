import { lazy, Suspense, useState } from "react";

//lazy make sures react don’t load this component right now, load it only when needed.
const Demo=lazy(()=>import('./Demo'));

export function Lazy(){

    const [show,setShow]=useState(false);

    return (
        <>
            <h2>Click to See the Lazy Loading</h2>
            <button onClick={()=>{setShow(!show)}}>Click</button>
            {
                // Since Demo is lazy-loaded, React might need time to fetch the file.
                //Until it finishes downloading, Suspense shows the fallback UI:
                show? <Suspense fallback={<h3>Loading...</h3>}><Demo/></Suspense> :null
            }
        </>
    )
}