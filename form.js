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
            alert('Seu formulário foi enviado com sucesso!');
            if (confirm('Deseja enviar outro formulário?')) {
                form.reset();
            } else {
                window.location.href = 'index.html';
            }
        })
        .catch((error) => {
            console.error('Erro ao enviar formulário:', error);
            alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde.');
        });
}
