//* faça o prompt o usuário colocar 3 números, faça 3 var que recebam esses números e retorne com alert os números em ordem crescente*//

let numUm = parseInt (prompt ("Escolha um número entre 0 e 10."));
let numDois = parseInt (prompt ("Escolha outro número entre 0 e 10."));
let numTres = parseInt (prompt ("Escolha mais um número entre 0 e 10.")); 

//* acima, 3 variáveis para receber os números do usuário *//

let numbers = [numUm, numDois, numTres];
numbers.sort((a, b) => a - b);
console.log(numbers);

//* acima, uma variável para receber todos os números fornecidos pelo usuário, colocá-los em ordem por sort() e retornar no console a ordem dessa variável *//

window.alert("A ordem dos números escolhidos é " + numbers);

//* acima, um alert para retornar uma frase e a ordem dos números na variável numbers*//



//* fiz diferente do prof, segue como ele fez:

//let num1 = parseInt (prompt ("Escolha um número: "));
//let num2 = parseInt (prompt ("Escolha um número: "));

//function ordernar (num1, num2) {
//  if (num1<=num2) {
        //windows.alert("Ordem: " num2 + num1);
    //else {
        //windows.alert("Ordem: " num1 + num2);
    //}
//}




