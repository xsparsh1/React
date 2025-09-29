function ChildA({setUser}){
    return(
        <div>
            <h1>Setting up user in Comp A</h1>
            <input type='text' placeholder="Enter your name" onChange={(e)=>{setUser(e.target.value)}}/>
        </div>
    )
}

export default ChildA;