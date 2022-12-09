function fetchTranslation(lang) {
    fetch(`http://localhost:5000/hello/${lang.toLowerCase()}`)
        .then(response => response.json())
        .then((data) => data)
        .catch((error) => console.log(error));
}