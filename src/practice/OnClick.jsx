// function OnClick(){
//     function func(){
//         alert("Jims") ;
//     }
//     return (
//         <div>
//             <button onClick={func()}>Im a bca Student at </button>  // Calls func without click 
//         </div>
//     )
// }
// export default OnClick;


// function OnClick(){
//     function func(){
//         alert("Jims") ;
//     }
//     return (
//         <div>
//             <button onClick={func}>Im a bca Student at </button>  //we cant param here , so how to pass params?
//         </div>
//     )
// }
// export default OnClick;

function OnClick(){
    function func(age){
        alert(`My age is ${age}`) ;
    }
    return(
        <div>
            <button onClick={()=>{func(18)}}>Click to get my age </button> /* we can pass params using arrow function */
        </div>
    )
}

export default OnClick;
