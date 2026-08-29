function raizQuadrada(numero) {
    if (numero < 0) {
        throw new Error("Não é possível calcular a raiz de número negativo");
    }

    return Math.sqrt(numero);
}

console.log("Raiz quadrada de 25:", raizQuadrada(25));