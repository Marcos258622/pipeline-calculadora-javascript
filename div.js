function div(a, b) {
    return a / b;
}
 
const resultado = div(6, 3);
 
if (resultado === 2) {
    console.log("Teste passou!");
} else {
    console.error("Teste falhou!");
    process.exit(1);
}