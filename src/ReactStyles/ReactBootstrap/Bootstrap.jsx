//install : npm install react-bootstrap bootstrap
//import 'bootstrap/dist/css/bootstrap.min.css';  // import in index.js or main.jsx/app.jsx

import {Button,Alert,Card,Navbar,Container,Nav,NavDropdown} from "react-bootstrap";

function Bootstrap(){
    return(
        <div>

            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar</Navbar.Brand>    
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Something else here
                        </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                        Link
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <h1 style={{textAlign:'center'}}>Welcome to React Bootstrap</h1>
            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
            <Button variant="success">Success</Button>{' '}
            <Button variant="warning">Warning</Button>{' '}
            <Button variant="danger">Danger</Button>{' '}
            <Button variant="info">Info</Button>{' '}
            <Button variant="light">Light</Button>{' '}
            <Button variant="dark">Dark</Button>{' '}
            <Button variant="link">Link</Button>    
            <br/><br/>

            <Alert variant="primary">This is a primary alert—check it out!</Alert>
            <Alert variant="secondary">This is a secondary alert—check it out!</Alert>
            <Alert variant="success">This is a success alert—check it out!</Alert>
            <Alert variant="danger">This is a danger alert—check it out!</Alert>
            <Alert variant="warning">This is a warning alert—check it out!</Alert>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://via.placeholder.com/150" alt="example image"/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card> 
            <br/><br/>
            
        </div>
    )
}

export default Bootstrap;