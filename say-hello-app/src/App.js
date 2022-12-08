
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HelloNavBar from './components/navbar';
import AddTranslation from './components/addtranslation';
import LanguageDropDown from './components/languagedropdown';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <Container className="p-3">

      <HelloNavBar />

      <main>
        <Row>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title> <LanguageDropDown /> </Card.Title>
                <Card.Text> Hello </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <br></br>
          <Col md={6}>
            <AddTranslation />
          </Col>


          <br></br><br></br>
        </Row>
        <hr />
      </main>
    </Container>
  );
}

export default App;
