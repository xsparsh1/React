import FuncChild from"./FuncChild";

function display(name){                         //this function gets passed as prop , we can pass param too.
        alert("hello "+name);
    } 

function FuncParent(){
    return(
        <div>
            <div style={{margin:"30px"}}>
                <FuncChild display={display} name={"sparsh"}/>
                <FuncChild display={display} name={"harsh"}/>
                <FuncChild display={display} name={"vansh"}/>
                <FuncChild display={display} name={"ansh"}/>
                <FuncChild display={display} name={"kush"}/>
            </div>
        </div>
    )
}

export default FuncParent;