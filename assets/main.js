// Versão simplificada
const menuHamburguer = document.getElementById('menuHamburguer');
const menuLista = document.getElementById('menuLista');

menuHamburguer.addEventListener('click', function() {
    menuLista.classList.toggle('active');
});

// Fechar menu ao clicar nos links
const menuLinks = document.querySelectorAll('.cabecalho__menu-link');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuLista.classList.remove('active');
    });
});


// Controle de reprodução de vídeo 

  const videoHeader = document.getElementById('headerVideo');
  videoHeader.playbackRate = 0.8; // 

  const videoQuemSouEu = document.getElementById('quemSouEu');
  videoQuemSouEu.playbackRate = 0.3; // 

