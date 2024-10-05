alert('Boas Vindas ao Jogo do Número Secreto');

let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

// Enquanto Chute Não For Igual ao Número Secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um Número Entre 1 e ${numeroMaximo}`);

    // Se Chute for Igual ao Número Secreto 
    if (chute == numeroSecreto) {
        break;
    }
    else {
        if (chute > numeroSecreto) {
            alert(`O Número Secreto é Menor que ${chute}`);
        }
        else {
            alert(`O Número Secreto é Maior que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';

alert(`Isso ai! Você Descobriu o Número Secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
