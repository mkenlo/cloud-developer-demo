
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function HelloNavBar() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">Say Hello</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default HelloNavBar;