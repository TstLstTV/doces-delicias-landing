document.addEventListener('DOMContentLoaded', function () {
    // Manipulador de envio do formulário de pedido
    const pedidoForm = document.getElementById('pedido-form');

    if (pedidoForm) {
        pedidoForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Coleta os dados do formulário
            const formData = new FormData(pedidoForm);
            const pedidoData = {};

            for (let [key, value] of formData.entries()) {
                pedidoData[key] = value;
            }

            // Simula envio do pedido (em uma implementação real, isso seria enviado para um servidor)
            console.log('Pedido recebido:', pedidoData);

            // Exibe mensagem de confirmação
            alert('Obrigado pelo seu pedido! Entraremos em contato em breve para confirmar os detalhes.');

            // Limpa o formulário
            pedidoForm.reset();
        });
    }

    // Função para rolar suavemente para seções
    const menuItems = document.querySelectorAll('nav a[href^="#"]');

    menuItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Considera a altura do cabeçalho fixo
                    behavior: 'smooth'
                });
            }
        });
    });
});