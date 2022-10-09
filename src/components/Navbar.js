import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';

const NavbarD = () => {
    return (
        <>
            <Navbar bg="kight">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt="logo"
                            src="./logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top me-3 "
                        />
                        Media Library
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <br />
        </>
    );
};

export default NavbarD;
