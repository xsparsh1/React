import {Link } from "react-router"

export function NotFound(){
    return(
        <>
        
        <div style={{textAlign:"center", marginTop:"40px"}}>
            <Link to="/"  style={{textDecoration:"none"}}>Go Back to home page</Link>
        </div>

        <div style={{textAlign:"center"}}>
            <img src="https://tse1.mm.bing.net/th/id/OIP.95m4q5dkJvUIbnuvyHEilwHaEO?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Error Page not found" width="700px"/>
        </div>
        
        </>
    )
}