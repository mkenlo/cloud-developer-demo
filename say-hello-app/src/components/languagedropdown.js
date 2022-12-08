import Form from 'react-bootstrap/Form';


function LanguageDropDown() {
    return (
        <Form>
            <Form.Select aria-label="select a language">
                <option>English</option>
                <option>French</option>
                <option>Spanish</option>
            </Form.Select>
        </Form>
    );
}

export default LanguageDropDown;