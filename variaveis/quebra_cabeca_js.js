let idade;

if (idade >= 18 && idade < 70) {
    console.log("Voto obrigatório");
} else if (idade < 16) {
    console.log("Não pode votar");
} else if (idade >= 16 && idade < 18) {
    console.log("Voto facultativo");
} else if (idade >= 70) {
    console.log("Voto facultativo");
} else {
    console.log("Categoria inválida");
}

let numero;

if (numero < 0) {
    console.log("Negativo");
} else if (numero > 0) {
    console.log("Positivo");
} else {
    console.log("Zero");
}

let combustivel;

if (combustivel === "Gasolina") {
    console.log("Você escolheu gasolina");
} else if (combustivel === "Álcool") {
    console.log("Você escolheu o Álcool");
} else if (combustivel === "Diesel") {
    console.log("Você escolheu o Diesel");
} else {
    console.log("Opção Invalida");
}

let velocidade;

if (velocidade < 75) {
    console.log("Atenção");
} else if (velocidade >= 80) {
    console.log("Multado");
}

if (velocidade <= 60) {
    console.log("Dentro do limite");
} else {
    console.log("Velocidade não permitida");
}
