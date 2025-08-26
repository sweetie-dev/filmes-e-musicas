const playButton = document.querySelector('.play-movie'); // Botão para o trailer
const videoContainer = document.querySelector('.video-container');
const closeVideoButton = document.querySelector('.close-video');
const playTrailer = document.querySelector('#myvideo');

playButton.addEventListener('click', function() {
    videoContainer.classList.add('show-video'); // Exibe o vídeo
    playTrailer.play(); // Inicia o vídeo automaticamente
});

closeVideoButton.addEventListener('click', function() {
    videoContainer.classList.remove('show-video'); // Esconde o vídeo
    playTrailer.pause(); // Pausa o vídeo quando fechado
    playTrailer.currentTime = 0; // Reinicia o vídeo ao fechar
});
playTrailer.addEventListener('ended', function() {
    playTrailer.currentTime = 0; // Volta para o início
    playTrailer.play(); // Reproduz novamente
});