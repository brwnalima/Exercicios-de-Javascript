let entradaUsr = prompt ("Escolha 1 para ônibus e 2 para metrô");

while (true) {
    if (entradaUsr == 2 || entradaUsr == 1) {
        alert("Obrigada pela preferência! Aqui está sua passagem para a opção " + entradaUsr);
        break;
    } else {
        alert("Entrada inválida!");
        entradaUsr = prompt("Escolha 1 para ônibus e 2 para metrô");
    }
}