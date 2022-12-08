import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HelloNavBar from './components/navbar';
import AddTranslation from './components/addtranslation';
import LanguageDropDown from './components/languagedropdown';
import Card from 'react-bootstrap/Card';


function App() {

  const [translation, setTranslation] = useState("");

  const languages = ["English", "French", "Spanish", "Russian", "Portuguese"];
  const translations = [
    { "language": "english", "word": "hello" },
    { "language": "french", "word": "salut" },
    { "language": "russian", "word": "hey" },
    { "language": "portuguese", "word": "ola" },
    { "language": "spanish", "word": "hola" }
  ];

  function showTranslation(lang) {

    let w = translations.filter((item) => item['language'] === lang.toLowerCase());
    setTranslation(w[0]['word']);
  }

  function saveTranslation() {
    console.log("saving item...");
  }


  return (
    <Container className="p-3">
      <HelloNavBar />
      <main>
        <Row>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>
                  <LanguageDropDown languages={languages} onLangChange={(e) => showTranslation(e.target.value)} />
                </Card.Title>
                <Card.Text> {translation} </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <br></br>
          <Col md={6}>  <AddTranslation onSubmit={() => saveTranslation()} />    </Col>
          <br></br><br></br>
        </Row>
        <hr />
      </main>
    </Container>
  );
}

export default App;
