/* import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav' */
import { Navbar, Nav } from 'react-bootstrap'

const MyNavBar = (props) => (
    <Navbar collapseOnSelect className="fixed-top" expand="md" bg="light" variant="light">
        <Navbar.Brand href="#home">{props.brand}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
                <Nav.Link href="#pricing">Browse</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default MyNavBar