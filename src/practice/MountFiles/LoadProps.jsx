import Prop1 from "../Props/Prop1";
function LoadProps(){
    const name="Hello";
    const age=25;
    return(
        <div>
            <Prop1 value={name} value2={age}/>
        </div>
    )
}
export default LoadProps;