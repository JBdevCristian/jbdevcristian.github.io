
document.addEventListener("DOMContentLoaded", function() { //Pegando informações do caco
    // Obtendo a referência
    var gifImage = document.getElementById("caco");

    // Definindo looping
    function repeatGif() {
        // Reiniciando
        gifImage.src = gifImage.src;
    }

    // Definindo a repetição a cada 2.5 segundos
    setInterval(repeatGif, 2500);
});
