// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA DO DIAGNÓSTICO IA ---
    const btnEnviarIA = document.getElementById('btn-enviar');
    
    if(btnEnviarIA) {
        btnEnviarIA.addEventListener('click', function() {
            const userInput = document.getElementById('user-input').value.trim();
            const respostaContainer = document.getElementById('container-resposta');
            const iaResposta = document.getElementById('ia-resposta');

            if(!userInput) {
                alert('Por favor, descreva o maior desafio da sua empresa primeiro para a IA analisar.');
                return;
            }

            // Altera o estado do botão para simular carregamento
            const textoOriginal = this.innerText;
            this.innerText = 'Analisando dados...';
            this.disabled = true;

            // Simula um delay de resposta da IA (1.5 segundos)
            setTimeout(() => {
                iaResposta.innerHTML = `
                    <p style="color: var(--texto-mutado); margin-bottom: 15px;"><i>Analisamos a seguinte situação: "${userInput}"</i></p>
                    <p><strong>Diagnóstico Preliminar:</strong> Identificamos que gargalos operacionais e financeiros podem estar limitando o seu potencial. É recomendada a estruturação imediata de processos e definição clara de responsabilidades para a equipe. Isso ajudará a aliviar a carga sobre a direção e a estabilizar a sua margem de lucro real.</p>
                `;
                
                // Exibe o quadro de resposta com a classe CSS de animação
                respostaContainer.classList.add('resposta-visivel');
                
                // Restaura o botão original
                this.innerText = textoOriginal;
                this.disabled = false;
            }, 1500);
        });
    }

    // --- LÓGICA DO FORMULÁRIO DE CONTATO ---
    const formularioContato = document.getElementById('formulario-contato');
    
    if(formularioContato) {
        formularioContato.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede o comportamento padrão de atualizar a página ao enviar
            
            alert('Pedido de avaliação enviado com sucesso! A equipa da Vértice entrará em contato em breve.');
            
            // Limpa os campos do formulário após o "envio"
            this.reset(); 
        });
    }
});
