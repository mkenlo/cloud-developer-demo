import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Form from 'react-bootstrap/Form';


function AddTranslation({ onSubmit }) {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="addtranslation-collapse-form"
                aria-expanded={open}
            >
                Add a translation
            </Button>

            <Collapse in={open}>
                <div id="addtranslation-collapse-form">
                    <br></br>
                    <Form onSubmit={onSubmit}>
                        <Form.Group>
                            <Form.Control type="text" placeholder="type a language" />
                        </Form.Group>
                        <br></br>
                        <Form.Group>
                            <Form.Control type="text" placeholder="type the translation word here" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </Collapse>
        </div>
    );
}

export default AddTranslation;