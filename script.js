
// Inicializa EmailJS con tu public API Key
emailjs.init('adwQHqZDoKpp2dxrT')

// Función para enviar un correo
function sendEmail(response, message) {
    const emailData = {
        response: response,
        message: message
    };

    // Usar EmailJS para enviar el correo
    emailjs.send('service_frh62c6', 'template_lyddbf2', emailData)
        .then(function(response) {
            console.log('Correo enviado con éxito', response);
            document.getElementById('response').textContent = '¡Correo enviado con éxito!';
        }, function(error) {
            console.log('Error al enviar correo', error);
            document.getElementById('response').textContent = 'Hubo un problema al enviar tu mensaje.';
        });
}

// Agregar los eventos a los botones
document.getElementById('yes-btn').addEventListener('click', function() {
    document.getElementById('response').textContent = 'Respuesta: Sí';
    sendEmail('Sí', document.getElementById('message').value);
});

document.getElementById('no-btn').addEventListener('click', function() {
    document.getElementById('response').textContent = 'Respuesta: No';
    sendEmail('No', document.getElementById('message').value);
});

document.getElementById('send-btn').addEventListener('click', function() {
    const message = document.getElementById('message').value;
    sendEmail('Mensaje sin respuesta', message);
});
