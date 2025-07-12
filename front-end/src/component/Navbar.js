import { Link } from 'react-router-dom';
import { Container, Nav, Navbar as BsNavbar, Image, NavDropdown } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { user } = useAuth(); // ✅ Use context

  return (
    <BsNavbar bg="light" expand="lg">
      <Container>
        <BsNavbar.Brand as={Link} to="/">SkillSwap</BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/browse">Browse</Nav.Link>
            <Nav.Link as={Link} to="/swaps">Swaps</Nav.Link>
            <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
          </Nav>

          <Nav>
            {!user ? (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
              </>
            ) : (
              <NavDropdown
                title={
                  <Image
                    src={user.profilePhoto || 'https://via.placeholder.com/40'}
                    alt="Profile"
                    roundedCircle
                    width="30"
                    height="30"
                  />
                }
                id="user-nav-dropdown"
                align="end"
              >
                <NavDropdown.Item as={Link} to="/my-profile">My Profile</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/logout">Logout</NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}

export default Navbar;
