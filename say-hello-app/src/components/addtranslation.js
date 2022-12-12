import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function AddTranslation() {
    const [open, setOpen] = useState(false);
    const [validated, setValidated] = useState(false);

    function onSubmit(event) {

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);

        let newLanguage = event.target.newLanguage.value;
        let newTranslationWord = event.target.newTranslationWord.value;
        console.log(newLanguage);
        console.log(newTranslationWord);

        fetch("http://localhost:5000/translate", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "language": newLanguage, "word": newTranslationWord })

        }).then(response => response.json())
            .then(data => {
                alert("A new translation has been added! ");

            });

    }
    return (
        <div>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="addtranslation-collapse-form"
                aria-expanded={open}
                variant="dark"
            >
                Add a translation
            </Button>

            <Collapse in={open}>
                <div id="addtranslation-collapse-form">
                    <br></br>
                    <Form methods="POST" onSubmit={(event) => onSubmit(event)} validated={validated} noValidate>
                        <InputGroup className='hasValidation'>
                            <Form.Control id="newLanguage" type="text" name="language" placeholder="type a language" required />
                        </InputGroup>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid string.
                        </Form.Control.Feedback>
                        <br></br>
                        <InputGroup className='hasValidation'>
                            <Form.Control type="text" id="newTranslationWord" name="word" placeholder="type the translation word here" required />
                        </InputGroup>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid string.
                        </Form.Control.Feedback>
                        <br></br>
                        <Button variant="primary" type="submit">Submit </Button>
                    </Form>
                </div>
            </Collapse>
        </div>
    );
}

export default AddTranslation;