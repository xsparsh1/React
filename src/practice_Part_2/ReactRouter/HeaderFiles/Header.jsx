import { Link } from "react-router";
import style from "./header.module.css";

export function Header(){
    return(
        <>
            <div className={style.header}>
                
                <div className={style.logo}>
                    <Link to={"/"}><h1>Logo</h1></Link>
                </div>

                <nav className={style.nav}>   
                    <Link to={"/"}><h2>Home</h2></Link>
                    <Link to={"/user/about"}><h2>About</h2></Link>
                    <Link to={"/user/login"}><h2>Login</h2></Link>
                    <Link to={"/user/college"}><h2>College</h2></Link>
                </nav>
            </div>
        </>
    )
}

