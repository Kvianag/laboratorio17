document.getElementById('welcomeBtn').addEventListener('click', function() {
    alert('¡Bienvenido a mi página web!');
});

// Validación del formulario
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Por favor, completa todos los campos');
        return;
    }
    
    if (!email.includes('@')) {
        alert('Por favor, ingresa un email válido');
        return;
    }
    
    alert('¡Mensaje enviado con éxito!');
    this.reset();
});
