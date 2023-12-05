function tocaSom(idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);

    if (elemento && elemento.localName === 'audio'){
        elemento.play();
    }else{
        console.log('Elemento não encontrado ou seletor inválido');
    }
    
}

const listaSons = document.querySelectorAll('.tecla');
const listaDeTeclas = document.querySelectorAll('.tecla');

/*
let contador = 0;

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const idElementoAudio = tecla.classList[1];
    //console.log(`#som_${idElementoAudio}`);

    const idAudio = `#som_${idElementoAudio}`;

    tecla.onclick = function (){
        tocaSom(idAudio);
    }
    
    contador = contador + 1;

    //console.log(contador);
*/

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const idElementoAudio = tecla.classList[1];
    const idAudio = `#som_${idElementoAudio}`; //template string

    tecla.onclick = function (){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){
        console.log(evento);

        if (evento.code === 'Enter' || evento.code === 'Space'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(evento){
        if (evento.code === 'Enter' || evento.code === 'Space'){
            tecla.classList.remove('ativa');
        }
    }

}
