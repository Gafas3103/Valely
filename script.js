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

function sendEmail(response, message) {
    const emailData = {
        response: response,
        message: message
    };

    // Usar EmailJS para enviar el correo
    fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            service_id: 'template_lyddbf2',  // Asegúrate de poner tu service_id
            template_id: 'template_lyddbf2',  // Asegúrate de poner tu template_id
            user_id: 'adwQHqZDoKpp2dxrT',  // Asegúrate de poner tu user_id
            template_params: emailData
        })
    })
    .then(response => response.json())
    .then(data => console.log('Correo enviado: ', data))
    .catch(error => console.error('Error al enviar correo: ', error));
}
