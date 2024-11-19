(function() {
    emailjs.init("seu_user_id_emailjs"); 
})();

document.addEventListener('DOMContentLoaded', () => {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('data').setAttribute('min', today);
});

function sendEmail(event) {
    event.preventDefault();

    const form = event.target;

    emailjs.sendForm('seu_service_id', 'seu_template_id', form)
        .then(() => {
            alert('Formulário enviado com sucesso!');
            form.reset();
        }, (error) => {
            console.error('Erro ao enviar formulário:', error);
            alert('Ocorreu um erro ao enviar o formulário. Tente novamente mais tarde.');
        });
}
