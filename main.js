function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    //na condição poderia ficar 'elemento != null', mas o js já entende desta forma
    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    }
    else{
        console.log('Elemento ou seletor inválido.')
    }
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

    tecla.onkeydown = function(evento){
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    };

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    };
}
