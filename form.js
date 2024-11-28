(function () {
    emailjs.init("1BT1iKz7d09IJLK88"); 
    console.log('EmailJS inicializado com sucesso!');
})();

function sendEmail(event) {
    event.preventDefault(); 

    console.log('Formulário iniciado para envio...');

    const form = event.target;

    emailjs.sendForm('register_tnpm', 'template_5gme6zn', form)
        .then(() => {
            console.log('Formulário enviado com sucesso!');
            alert('Formulário enviado com sucesso!');
            form.reset();
        }, (error) => {
            console.error('Erro ao enviar formulário:', error);
            alert('Erro ao enviar o formulário. Verifique os dados e tente novamente.');
        });
}
