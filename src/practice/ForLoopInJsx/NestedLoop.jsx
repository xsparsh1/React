import {useState} from "react";
import UseNesComp from "./UseNesComp";


function NestedLoop(){

    const arr=[
        {
            name:"jims",
            city:"delhi",
            students:[{
                stname:"sparsh",
                age:19,
                gender:"male"
            },
            {
                stname:"vansh",
                age:18,
                gender:"male"
            },
            {
                stname:"harsh",
                age:20,
                gender:"male"
            }],
        },
        {
            name:"vips",
            city:"Ghaziabad",
            students:[{
                stname:"kartik",
                age:19,
                gender:"male"
            },
            {
                stname:"vinayak",
                age:18,
                gender:"male"
            },
            {
                stname:"ishant",
                age:20,
                gender:"male"
            }],
        }
    ];

    return(
        <div className="div">
            {arr.map((value,index)=>
            <div key={index}>             {/*React used key to uniquely identify each element in list. */}
                <UseNesComp data={value}/>
            </div>
            )}
        </div>
    )
}

export default NestedLoop;