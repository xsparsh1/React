function Prop1(props){  //In Prop1 param we get props

    return(
        <div>
            <h1>Your passed props are :</h1>
            <h1>{props.value}, {props.value2}</h1>
        </div>
    )
}
export default Prop1;