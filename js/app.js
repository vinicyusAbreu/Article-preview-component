let share = document.querySelector('.click_share');
let balão = document.querySelector('.balão');
let balao2 = document.querySelector('.balão_2');
let contador = true;
let tamanho_tela = 1;
var largura = window.screen.availWidth;


function socialMedia() {
    if (largura > 500) {
        if (contador) {
            balão.style.display = 'flex';
            contador = false;
        } else if (contador === false) {
            balão.style.display = 'none';
            contador = true;
        }
    } else {
        if (contador) {
            balao2.style.display = 'flex';
            contador = false;
        } else if (contador === false) {
            balao2.style.display = 'none';
            contador = true;
        }
    }

}

share.addEventListener('click', socialMedia, false);