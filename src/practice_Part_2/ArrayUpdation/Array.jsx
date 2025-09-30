import {useState} from "react";

function Array(){

    //Simple Array Creation
    const [data,setData]=useState([
        "sparsh","vansh","harsh","ansh"
    ])

    //Array of objects 
    const [obj,setObj]=useState([
        {name:"sparsh",age:19},
        {name:"vansh",age:20},
        {name:"harsh",age:18},
        {name:"ansh",age:21}
    ])
    
    //Updating array values 
    const handleChange=(e)=>{
        const val=e.target.value;
        data[data.length-1]=val;
        setData([...data]);
    }

    //Updating Object value in array
    const handleAge=(e)=>{
        const val=e.target.value;
        obj[obj.length-1].age=val;
        setObj([...obj])
    }

    return(
        <div>
            <h1>Update your Array values:</h1>
            <h2>Names:
                {
                    data.map((num,index)=>(
                        <h5 key={index}>{num}</h5>
                    ))
                }
            </h2>
            <br/>
            <input type="text" placeholder="Change last name" onChange={handleChange}/>
            <br/>
            <hr/>

            <input type="text" placeholder="Change last age" onChange={handleAge}/>
            <h2>Names with age:
                {
                    obj.map((num,index)=>(
                        <h5 key={index}>{num.name} {num.age}</h5>
                    ))
                }
            </h2>
        </div>
    )
}
export default Array;