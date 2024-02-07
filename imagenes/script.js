document.addEventListener('DOMContentLoaded', function () {
    // Obtén el enlace por su ID
    var enlaceNuevaPagina = document.getElementById('enlaceNuevaPagina');

    // Agrega un evento de clic al enlace
    enlaceNuevaPagina.addEventListener('click', function (event) {
        // Evita el comportamiento predeterminado del enlace (navegación normal)
        event.preventDefault();

        // Realiza cualquier acción adicional aquí si es necesario
        // Por ejemplo, podrías mostrar un mensaje o hacer alguna otra operación antes de redirigir.

        // Redirige a la nueva página
        window.location.href = "nueva_pagina.html";
    });
});

document.getElementById('playAudio').addEventListener('click', function() {
    var audio = document.getElementById('miAudio');
    audio.play();
  });
