import {useState} from 'react';

function DerivedState(){    

    //States to handle users
    const [users,setUsers]=useState([]);            
    const [user,setUser]=useState('');

    const handleInput=()=>{
        setUsers([...users,user]);                  
    }

    //derived states used instead of separate new state, whixh enhance performance, gets updated due to state changeing rerender.
    const totalUser=users.length;               
    const lastUser=users[users.length-1];
    const uniqueUsers=[...new Set(users)].length;

    return(
        <div>

            {/*Displaying value from Derived states*/} 
            <h2>Total user are: {totalUser}</h2>
            <h2>Last Added user: {lastUser}</h2>
            <h2>Total unique user are: {uniqueUsers}</h2>

            <br/>

            <input type="text" placeholder="Enter Your Name" onChange={(e)=>setUser(e.target.value)}/>
            <button onClick={handleInput}>Add user</button>

            {/*Displaying Users added through mapping over users array*/}
            <h2>Users are:</h2>
            {
                users.map((num,ind)=>(
                    <h3 key={ind}>{num}</h3>
                ))
            }
        </div>
    )
}

export default DerivedState;