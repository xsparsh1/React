function FuncChild({display,name}){

    // function display(){              //Instead of defining func here we can define it in parentComp
    //                                    and pass as prop to child.
    //     alert("hello user");
    // }

    return(
        <div>
            <button onClick={()=>display(name)}>Show User</button>
        </div>
    )
}

export default FuncChild;