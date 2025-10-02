import { Link, useParams } from "react-router"

export function UserDetail(){

    const {id}=useParams();

    return(
        <>
        <h2>User Details are Available</h2>
        <h2> User Id is : {id}</h2>
        <h3><Link to={"/user/college"}>Back</Link></h3>
        </>
    )
}