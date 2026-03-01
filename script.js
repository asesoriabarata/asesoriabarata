document.getElementById('contactForm').addEventListener('submit', function(event){
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
    from_name: name,
    from_email: email,
    message: message
  }, 'YOUR_USER_ID')
  .then(function(response) {
    document.getElementById('formStatus').innerText = "Mensaje enviado con éxito!";
    document.getElementById('contactForm').reset();
  }, function(error) {
    document.getElementById('formStatus').innerText = "Error al enviar el mensaje.";
  });
});