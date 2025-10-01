// function Demo(){
//     return(
//         <div>
//             <h2>Hello fragments</h2>
//         </div>
//     )
// }

// //Creates Multiple Div nodes in Dom tree, instead we can use fragments to not add any html element, but contains arre other tags inside them/
// export function Frag(){
//     return(
//         <div>
//             <Demo/>
//             <Demo/>
//             <Demo/>
//         </div>
//     )
// }

function Demo(){
    return(
        //Fragments
        <>
            <h2>Hello fragments</h2>
        </>
    )
}

export function Frag(){
    return(
        <>
            <Demo/>
            <Demo/>
            <Demo/>
        </>
    )
}