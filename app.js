alert('Boas Vindas ao Jogo do Número Secreto');

let numeroSecreto = 9;
console.log('Valor do Número Secreto: ' + numeroSecreto);

let chute = prompt('Escolha um Número Entre 1 e 10');
console.log('Valor do Chute: ' + chute);


console.log('Resultado da comparação:', chute == numeroSecreto);

// Se Chute for Igual ao Número Secreto 
if (chute == numeroSecreto) {
    alert(`Isso ai! Você Descobriu o Número Secreto ${numeroSecreto}`);
} 
else{
    alert('Você Errou :(');
};