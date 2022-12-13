import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HelloNavBar from './components/navbar';
import AddTranslation from './components/addtranslation';
import LanguageDropDown from './components/languagedropdown';
import Card from 'react-bootstrap/Card';


function App() {

  const [translation, setTranslation] = useState("");
  const [languages, setLanguages] = useState(['pick a language']);

  useEffect(() => {
    fetch(`http://localhost:5000/languages`)
      .then(response => response.json())
      .then(data => setLanguages(data)); 
  }, []);

  function showTranslation(lang) {

    fetch(`http://localhost:5000/hello/${lang.toLowerCase()}`)
      .then(response => response.json())
      .then(data => {
        setTranslation(data[0]['word']);
      })
      .catch((error) => console.log(error));
  }



  return (
    <Container className="p-3">
      <HelloNavBar />
      <main>
        <Row>
          <Col md={9}>
            <Card border='secondary'>
              <Card.Body>
                <Card.Title>

                </Card.Title>
                <LanguageDropDown languages={languages} onLangChange={(e) => showTranslation(e.target.value)} />
                <br></br>
                <Card.Text class="translated-word"> {translation} </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <br></br>

          <br></br><br></br>
        </Row>
        <hr />
        <Row>
          <Col md={6}>  <AddTranslation />    </Col>
        </Row>
      </main>
    </Container>
  );
}

export default App;
