import { useReducer, useState } from "react"

//Initial values for form fields stored in an object
const initialValue={
    name:'',
    password:'',
    age:'',
    gender:'',
    city:'',
    state:'',
    country:''
}

export function Reducer(){

    const [show,setShow]=useState(false);

    //Reducer function handles updates of each field dynamically
    const handleReducer=(data,action)=>{

        // action.type = field name, action.val = field value
        // Returns a new object with updated field
        return {...data,[action.type]:action.val}
    }

    //useReducer hook manages multiple form inputs with one reducer
    //state = current form data, dispatch = function to update state
    const [state,dispatch]=useReducer(handleReducer,initialValue);
    console.log(state);

    return(
        <>
        <h2 style={{margin:"30px 0px"}}>Handling Using useReducer</h2>
        <input type="text" onChange={(e)=>dispatch({val:e.target.value,type:"name"})} placeholder="Enter your name"/>
        <br/><br/>
        <input type="text" onChange={(e)=>dispatch({val:e.target.value,type:"password"})} placeholder="Enter your password"/>
        <br/><br/>
        <input type="text" onChange={(e)=>dispatch({val:e.target.value,type:"age"})} placeholder="Enter your age"/>
        <br/><br/>
        <input type="text" onChange={(e)=>dispatch({val:e.target.value,type:"gender"})} placeholder="Enter your gender"/>
        <br/><br/>
        <input type="text" onChange={(e)=>dispatch({val:e.target.value,type:"city"})} placeholder="Enter your city"/>
        <br/><br/>
        <input type="text" onChange={(e)=>dispatch({val:e.target.value,type:"state"})} placeholder="Enter your state"/>
        <br/><br/>
        <input type="text" onChange={(e)=>dispatch({val:e.target.value,type:"country"})} placeholder="Enter your country"/>
        <br/><br/>
        <button onClick={()=>setShow(true)}>Submit</button>

        <br/>
        <br/>
        <hr/>
        <br/>

        <div>
            {
                show ? 
                (   <div>
                        <h2>Your Details are :</h2>
                        <ul style={{marginLeft:"15px"}}>
                            <li>{state.name}</li>
                            <li>{state.password}</li>
                            <li>{state.age}</li>
                            <li>{state.gender}</li>
                            <li>{state.city}</li>
                            <li>{state.state}</li>
                            <li>{state.country}</li>
                        </ul>
                    </div>
                ):null

            }
        </div>
        </>
    )
}