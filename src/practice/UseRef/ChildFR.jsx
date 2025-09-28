//FR-ForwardRef
// import {forwardRef} from "react";


//Before React 19
// function ChildFR({props,ref}){
//     return(
//         <div>
//             <input type="text" ref={ref}/>
//         </div>
//     )
// }

// export default forwardRef(ChildFR);



//After React 19
function ChildFR({ref}){
    return(
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
}

export default ChildFR;