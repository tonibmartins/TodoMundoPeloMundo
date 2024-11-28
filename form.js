(function() {
    emailjs.init("1BT1iKz7d09IJLK88"); 
})();

document.addEventListener('DOMContentLoaded', () => {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('data').setAttribute('min', today); 
});

function sendEmail(event) {
    event.preventDefault();

    const form = event.target;

    emailjs.sendForm('register_tnpm', 'template_5gme6zn', form)
        .then(() => {
            console.log('Formulário enviado com sucesso!');
            alert('Formulário enviado com sucesso!');
            form.reset();
        }, (error) => {
            console.error('Erro ao enviar formulário:', error);
            alert('Ocorreu um erro ao enviar o formulário. Tente novamente mais tarde.');
        });
}
