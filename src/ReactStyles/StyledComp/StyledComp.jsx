//install : npm install styled-components

import styled from "styled-components";             //1. npm install styled-components

function StyledComp(){

    //2. Create a component avoid html case with styled.tagname``
    const Heading=styled.h1`                      
    color:red;
    text-align:center;`;

    const Button=styled.button`
    border-radius:5px;
    padding:5px 05px;
    position:relative;
    left:730px;
    margin-top:20px`;

    return(
        <div>
            <h1 style={{textAlign:'center'}}>Welcome to my Styled Comp</h1>
            <Heading>heading 1</Heading>                                    {/*3. Use it like a component*/}
            <Heading>heading 2</Heading>
            <Heading>heading 3</Heading>
            <Button>Click me</Button>
        </div>
    )
}

export default StyledComp;