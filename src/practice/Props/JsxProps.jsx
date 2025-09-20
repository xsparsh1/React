function DefaultProps({children,color="grey"}){
    return(
        <div style={{color:color, border:"2px solid grey",margin:"5px",display:"inline-block", padding:"10px"}}>                        {/*Color and code prop are used */}
            {children}
        </div>
    )   
}
export default DefaultProps;