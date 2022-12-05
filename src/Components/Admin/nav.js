import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Adminnav() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand ><Link to="/profile">Profile</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link><Link to="/BlockUser">Block Users List</Link></Nav.Link>
            <Nav.Link> <Link to="/RenterList">Renter List</Link></Nav.Link>
            <Nav.Link> <Link to="/CustomerList">Customers List</Link></Nav.Link>
            <Nav.Link> <Link to="/CarList">Car List</Link></Nav.Link>
            <Nav.Link> <Link to="/Approvals">Approval</Link></Nav.Link>
            <Nav.Link> <Link to="/NoticeList">Notice List</Link></Nav.Link>
            <Nav.Link> <Link to="/Messages">Messages</Link></Nav.Link>
            <NavDropdown title="Other" id="navbarScrollingDropdown">
              <NavDropdown.Item>
              <Link to="/UserAddByAdmin">Users Add By Admin</Link>
            </NavDropdown.Item>
              <NavDropdown.Item>
              <Link to="/CarAddByAdmin">Add Car By Admin</Link>
            </NavDropdown.Item>
              <NavDropdown.Item>
              <Link to="/RentHistory">Rent History</Link>
            </NavDropdown.Item>
              <NavDropdown.Item>
              <Link to="/Notices">Notice</Link>
            </NavDropdown.Item>
              <NavDropdown.Item>
              <Link to="/PostManage">Post Manage</Link>
            </NavDropdown.Item>
              <NavDropdown.Item>
              <Link to="/Reviews">Reviews Manage</Link>
            </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
           <Form className="d-flex">
            {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            /> */}
            
            <Button variant="outline-success"><Nav.Link><Link to="/Logout">Logout</Link></Nav.Link></Button>
            <Button variant="outline-success"><Nav.Link><Link to="/Login">Login</Link></Nav.Link></Button>
          </Form> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Adminnav;