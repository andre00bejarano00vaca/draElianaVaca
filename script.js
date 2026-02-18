document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Gracias por su mensaje. La Dra. se pondrá en contacto con usted a la brevedad para su caso civil.');
    this.reset();
});