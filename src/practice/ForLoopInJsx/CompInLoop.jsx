import {useState} from "react";
import UseComp from "./UseComp";


function CompInLoop(){

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
            <div key={value.id}>             {/*React used key to uniquely identify each element in list. */}
                <UseComp user={value}/>
            </div>
            )}
        </div>
    )
}

export default CompInLoop;