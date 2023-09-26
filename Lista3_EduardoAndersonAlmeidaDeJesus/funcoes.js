function retornarParImpar(){
    if(numero % 2 == 0){
        document.write("O número informado é par")
    }
    else{
        document.write("O número informado é ímpar")
    }
}

function calcularSalas(){
    quantSalas= parseInt(numCand / capSala);

    
    document.write("Quantidade de salas necessárias: ", quantSalas);
}

function calcularPesoIdeal(){
    if(sexo == 1){
        idealH = (72.7 * altura - 58);
        document.write("Por você ser homem, seu peso ideal seria: ", idealH);
    }
    else{
        idealM = (62.1 * altura - 44.7);
        document.write("Por você ser mulher, seu peso ideal seria: ", idealM);
    }

}

function executarOperacao(){
    if(operacao == "adição"){
        adicao = n1 + n2;
        document.write(n1, " + ", n2, " = ", adicao);
    }
    else if(operacao == "subtração"){
        subtracao = n1 - n2;
        document.write(n1, " - ", n2, " = ", subtracao);
    }
    else if(operacao == "multiplicação"){
        multiplicacao = n1 * n2;
        document.write(n1, " * ", n2, " = ", multiplicacao);
    }
    else{
        divisao = n1 / n2;
        document.write(n1, " / ", n2, " = ", divisao);
    }

}

function executarDivisao(){
    if(n1 > n2){
        divisao = n1 / n2;
        document.write(n1, " dividido por ", n2, " resulta em ", divisao);
    }
    else{
        n3 = Number(prompt("Cuidado!!! O primeiro número deve ser maior do que o segundo. Tente novamente digitando o primeiro número: "));
        n4 = Number(prompt("Agora digite o segundo número: "));
        divisao2 = n3 / n4;
        document.write(n3, " dividido por ", n4, " resulta em ", divisao2);
    }
}

function informarNumero(){
    if(n1 > 0){
        document.write("O número informado é positivo.");
    }
    else if(n1 < 0){
        document.write("O número informado é negativo.");
    }
    else{
        document.write("O número informado é nulo.");
    }
}

function informarMaior(){
    if(n1 > n2){
        document.write("O ", n1, " é maior do que o ", n2);
    }
    else if (n1 < n2){
        document.write("O ", n2, " é maior do que o ", n1);
    }
    else if(n1 == n2){
        alert("Chance 2 - Cuidado!!! Os números não podem ser iguais, tente novamente");
        n1 = Number(prompt("Insira o primeiro número: "));
        n2 = Number(prompt("Agora digite o segundo número: "));
        if(n1 > n2){
            document.write("O ", n1, " é maior do que o ", n2);
        }
        else if (n1 < n2){
            document.write("O ", n2, " é maior do que o ", n1);
        }
        else{
            document.write("SUAS CHANCES ACABARAM, REINICIE A PÁGINA E TENTE NOVAMENTE.");

        }
        
    }
}

function mostraMaior(){
    if(n1 > n2){
        if(n1 > n3){
            maior = n1;
        }
        else{
            maior = n3;
        }
    }
    else{
        if(n2 > n3){
            maior = n2;
        }
        else{
            maior = n3;
        }
    }

}

function imprimirCrescente(){
    if(n1 > n2){
        maior = n1;
        n1 = n2;
        n2 = maior;
    }
    if(n1 > n3){
        maior = n1;
        n1 = n3;
        n3 = maior
    }
    if(n2 > n3){
        maior = n2;
        n2 = n3;
        n3 = maior;
    }
    document.write('Em ordem crescente: ', n1, ', ', n2, ' e ', n3);
}

function imprimirDecrescente(){
    if(n1 < n2){
        menor = n1;
        n1 = n2;
        n2 = menor;
    }
    if(n1 < n3){
        menor = n1;
        n1 = n3;
        n3 = menor
    }
    if(n2 < n3){
        menor = n2;
        n2 = n3;
        n3 = menor;
    }
    document.write('Em ordem decrescente: ', n1, ', ', n2, ' e ', n3);
}