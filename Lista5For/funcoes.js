function somarNums(){
    soma = soma + num;

}
function calcularMedia(){
    media = soma / (i-1);
}

function acharMaior(){
    if(num > maior){
        maior = num;
    }
}

function acharMenor(){
    if(i == 1){
        menor = num
    }
    if(num < menor){
        menor = num;
    }
}

function listarQuadrados(limite){
    var i;
    for(i = 1; i <= limite; i++){
        document.write(i, ' elevado ao quadrado = ', i*i, '.<br>');
    }

}

function listarPares(limite){
    var i;
    for(i = 1; i <= limite; i++){
        if(i % 2 == 0){
            document.write(i, ' é par <br>');
        }
    }

}

function listarNumerosSoma(limite){
    var i, total=0;
    for(i = 1; i <= limite; i++){
        document.write(i, '<br>');
        total = total + i;
    }
    return total;

}

function listarParesSoma(limite){
    var i, total=0;
    for(i = 24; i <= limite; i++){
        if(i % 2 == 0){
            document.write(i, '<br>');
            total = total + i;
        }
    }
    return total;

}