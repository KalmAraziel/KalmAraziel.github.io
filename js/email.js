// formulario contacto
const form = document.querySelector('form');
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const titulo = document.querySelector('#titulo');
const mensaje = document.querySelector("#mensaje");
// fin formulario contacto
// variables EmailJS
const serviceId = 'service_a5kx6rj';
const templateId = 'template_pftbxka';
const publicKey = 'KLbrdOeIOpubVEO4a';
emailjs.init(publicKey);         
// fin variables EmailJS

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = {
        title: titulo.value,
        from_name: nombre.value,
        email_from: email.value,
        message: mensaje.value,        
    };
    emailjs.send(serviceId, templateId, data).then(
        () => {
            titulo.value = '';
            nombre.value = '';
            email.value = '';
            mensaje.value = '';
            alert("Email enviado correctamente");        
        },
        (err) => {
            console.log(err);
        }
    );
});


