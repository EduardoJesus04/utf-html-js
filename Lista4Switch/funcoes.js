function executarOperacao(){
    switch(operacao){
        case 'adição':
            return n1 + n2
        case 'subtração':
            return n1 - n2
        case 'multiplicação':
            return n1 * n2
        case 'divisão':
            return n1 / n2
        default:
            return 'operação não reconhecida'
    }

}

function executarCalculo(){
    switch(opcao){
        case 1:
            resultado = (n1 + n2)/2;
            document.write('A média é: ', resultado);
            break;
        case 2:
            if(n1 > n2){
                resultado = n1 - n2;
            }else{
                resultado = n2 - n1;
            }
            document.write('A diferença é: ', resultado);
            break;
        case 3:
            resultado = n1 * n2;
            document.write('O produto é: ', resultado);
            break;
        case 4:
            resultado = n1 / n2;
            document.write('A divisão do n1 pelo n2 é de: ', resultado);
            break;
        default:
            document.write('Operação não reconhecida');
    }

}

function classificarCompetidor(){
    switch(true){
        case (idade >= 5 && idade <= 7):
            document.write('Infantil A');
            break;
        case (idade >= 8 && idade <= 10):
            document.write('Infantil B');
            break;
        case (idade >= 11 && idade <= 13):
            document.write('Juvenil A');
            break;
        case (idade >= 14 && idade <= 17):
            document.write('Juvenil B');
            break;
        case (idade >= 18 && idade < 60):
            document.write('Adulto');
            break;
        case (idade >= 60):
            document.write('Sênior');
            break;
        default:
            document.write('Idade fora do limite')
    }
}
