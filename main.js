function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

// laço de repetiação for
for (let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`

    //utilizando função anônima
    tecla.onclick = function(){
        tocaSom(idAudio);
    };

    tecla.onkeydown = function(){
        tecla.classList.add('ativa');
    };

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    };
}

/* laço de repetição while
let contador = 0;

while(contador < listaDeTeclas.length){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function(){
        tocaSom(idAudio);
    };

    contador++;
}
*/ 
