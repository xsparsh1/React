function UseComp({user}){               //recieving the obj passed as prop from array.
    return(
        <div style={{backgroundColor:"grey",color:"lightcyan",padding:"20px"}}>
            <h1>Im {user.name}</h1>
            <div style={{color:"lemonchiffon"}}>
                <h3>My details are:</h3>
                <p>{user.age}</p>
            </div>
        </div>
    )
}

export default UseComp;