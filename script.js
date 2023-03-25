// var btn = document.querySelector(".no");
// var position
// btn.addEventListener("click", function() {
// position ? (position = 0) : (position = 150);
// btn.style.transform = `translate(${position}px,0px)`;
// btn.style.transition = "all 0.3s ease";
// });

// var btn = document.querySelector(".no");
// var position
// btn.addEventListener("mouseover", function() {
// position ? (position = 0) : (position = 150);
// btn.style.transform = `translate(${position}px,0px)`;
// btn.style.transition = "all 0.3s ease";
// });

// Obtenha o botão que deseja mover
const botao = document.getElementById('buttonno');

function moverBotao() {
    // Obtenha a largura e altura da janela do navegador
    const larguraJanela = window.innerWidth;
    const alturaJanela = window.innerHeight;
    const larguraBotao = botao.offsetWidth;
    const alturaBotao = botao.offsetHeight;
  
    // Defina limites máximos para a posição do botão na horizontal e vertical
    const limiteEsquerda = larguraJanela - larguraBotao;
    const limiteSuperior = alturaJanela - alturaBotao;
  
    // Defina uma posição aleatória para o botão na página
    const novaPosicaoEsquerda = Math.floor(Math.random() * limiteEsquerda);
    const novaPosicaoTopo = Math.floor(Math.random() * limiteSuperior);
  
    // Aplique a nova posição do botão
    botao.style.left = novaPosicaoEsquerda + 'px';
    botao.style.top = novaPosicaoTopo + 'px';
  }

// Adicione um evento de "mouseover" ao botão que chama a função para movê-lo
botao.addEventListener('mouseover', moverBotao);