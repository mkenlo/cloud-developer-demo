import Form from 'react-bootstrap/Form';


function LanguageDropDown({ languages, onLangChange }) {
    const options = languages.map(lang => <option key={lang} value={lang}>{lang}</option>)
    return (
        <Form>
            <Form.Select aria-label="select a language" onChange={onLangChange}>
                <option value="" disabled={true}>-- Pick a language --</option>
                {options}
            </Form.Select>
        </Form>
    );
}

export default LanguageDropDown;