// Inicialização do EmailJS
(function () {
    emailjs.init("1BT1iKz7d09IJLK88");
    console.log('EmailJS inicializado com sucesso!');
})();

// Prevenir envio de datas anteriores ao dia atual
document.addEventListener('DOMContentLoaded', () => {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('data').setAttribute('min', today);
});

// Envio do formulário
function sendEmail(event) {
    event.preventDefault();

    const form = event.target;
    const duracao = form.duracao.value.trim();

    // Validação adicional para o campo de duração
    if (isNaN(duracao) || duracao <= 0 || !/^\d+$/.test(duracao)) {
        alert('A duração deve ser um número inteiro maior que zero.');
        return;
    }

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
