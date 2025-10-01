import { Comp2 } from "./2ndComp";
import { Subject } from "./Context";
import {useState} from "react";

export function Comp1(){

    //State Creation
    const [subject,setSubject]=useState('Math')

    return(
        <div>

            {/* Context Wrapper */}
            <Subject.Provider value={subject}>

                <select defaultValue={subject} onChange={(e)=>setSubject(e.target.value)}>
                    <option>{subject}</option>
                    <option>php</option>
                    <option>React</option>
                    <option>Java</option>
                    <option>C++</option>
                </select>

                <button onClick={()=>setSubject('')}>Clear Subject</button>

                <h2>This is Conetxt Api</h2>
                <br/>

                <Comp2/>

            </Subject.Provider>
        </div>
    )
}