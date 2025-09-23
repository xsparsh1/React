function InternalStyle(){

    const style={
        color:"Red",
        backgroundColor:"grey",
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }
    
    return(
        <div style={style}>
                <h1>
                    This is Internal Style
                </h1>
        </div>
    )
}

export default InternalStyle;