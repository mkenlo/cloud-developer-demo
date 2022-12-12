function fetchTranslation(lang) {
    return fetch(`http://localhost:5000/hello/${lang.toLowerCase()}`);
}