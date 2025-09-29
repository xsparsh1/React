import {useState} from 'react';
import ChildB from './ChildB';
import ChildA from './ChildA';

function Parent(){

    const [user,setUser]=useState('');

    return(
        <div>
            <ChildA setUser={setUser}/>
            <ChildB user={user}/>
        </div>
    )
}

export default Parent;