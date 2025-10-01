import {useState} from "react";

//Creating our very own custom hook of toggle
export const useToggle=(param)=>{

    const [value,setValue]=useState(param);

    function toggle(val){
        if(typeof val==='boolean') setValue(val)
        else setValue(prev=>!prev);
    }
    
    return [value,toggle];
}