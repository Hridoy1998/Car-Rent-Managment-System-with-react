import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import React, {Components} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function HomeNave() {
    const navigate = useNavigate();
    const goLogin=()=>{
        navigate("/Login");
    }
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand ><Link to="/">Home</Link></Navbar.Brand>
        
           <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            
            <Button variant="outline-success" onClick={goLogin}>LOGIN</Button>
            {/* <Button variant="outline-success"><Nav.Link><Link to="/Login">Login</Link></Nav.Link></Button> */}
          </Form> 
      </Container>
    </Navbar>
  );
}

export default HomeNave;