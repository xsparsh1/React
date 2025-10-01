import { BrowserRouter } from "react-router";
import { Routing } from "./Routing";
import { Header } from "./Header";

export function MainFile(){
    return(
        <BrowserRouter>
            <div>

                <Header/>
                <Routing/>
                
            </div>
        </BrowserRouter>
    )
}