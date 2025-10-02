import {Link, Outlet} from "react-router";

export function College(){
    return(
        <>  
            <h2 style={{textAlign:"center", marginTop:"40px"}}>Choose Your Course</h2>

            <div style={{display:"flex", justifyContent:"center", marginTop:"30px", gap:"10px"}}>
                <Link to={"/Bca"}><h2>Bca</h2></Link>
                <Link to={"/Bba"}><h2>Bba</h2></Link>
                <Link to={"/Mca"}><h2>Mca</h2></Link>
                <Outlet/>
            </div>
            
        </>
    )
}