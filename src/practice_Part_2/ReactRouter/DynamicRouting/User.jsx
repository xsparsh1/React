import { Link } from "react-router"

export function User(){

    const UserData=[
        {id:1,name:"Sparsh"},
        {id:2,name:"Vansh"},
        {id:3,name:"Harsh"},
        {id:4,name:"Ansh"},
        {id:5,name:"Kartik"},
        {id:6,name:"Ishant"}
    ]

    return(
        <>
        <h2>User are :</h2>
        {
            UserData.map((item,index)=>(
                <h3><Link to={"/user/userprofile/"+item.id}>{item.name}</Link></h3>
            ))
        }
        </>
    )
}