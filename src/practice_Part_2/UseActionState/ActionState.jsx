import {useActionState,useState,useEffect} from "react";

export function ActionState(){

    const handleChange=async(prevData,formData)=>{
        const name=formData.get('name1');
        const pass=formData.get('pass1');
        // console.log(name,pass)
        await new Promise(res=>setTimeout(res,3000));

        if(name&&pass) return {message:"Data Submitted Successfully.",name,pass}
        else return {error:"Enter Valid Credentials.",name,pass}
    }

    const [data,action,pending]=useActionState(handleChange,null);
    
    const [show,setShow]=useState(false);

    useEffect(()=>{
        setShow(true)
    },[data])

    return (
        <div>
            <h1>Fill out this form</h1>
            <br/>
            <form action={action}>
                <input type="text" placeholder="Enter Your Name" name="name1"/>
                <br/>
                <br/>
                <input type="password" placeholder="Enter Your Password" name="pass1"/>
                <br/>
                <br/>
                <button disabled={pending}>{pending?"submitting...":'Submit'}</button>
            </form>
            
            {data?.message && <h3 style={{color:"green"}}>{data?.message}</h3>}
            {data?.error && <h3 style={{color:"red"}}>{data?.error}</h3>}

            {show && data && <h3>Name: {data?.name} <br/> password: {data?.pass}</h3>}

            
        </div>
    )
}