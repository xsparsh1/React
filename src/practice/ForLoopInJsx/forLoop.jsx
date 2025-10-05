import {useState} from "react";


function ForLoop(){

    const arr=[
        {
            name:"Sparsh",
            age:19,
            id:1
        },
        {
            name:"Harsh",
            age:18,
            id:12
        },
        {
            name:"Vansh",
            age:17,
            id:13
        }
    ];

    return(
        <div className="div">
            {arr.map((value)=>
            <div key={value.id}>             {/* React used key to uniquely identify each element in list. */}
                <h3>{value.name}</h3>
                <p>Age is {value.age}</p>
            </div>
            )}
        </div>
    )
}

export default ForLoop;