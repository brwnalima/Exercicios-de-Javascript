

// Exercício faz com que a promessa receba uma frase se for true e outra se for false
// O includes serve pra verificar se algo está incluso - ou seja, se "carro" e "de vdd" estão inclusos em fala
// A frase do then e catch não precisa ser a mesma que o parametro do método, pois é como se eles automaticamente 
// criassem variáveis que receber tudo o que está no escopo das condições

const  fala = "te comprei um carro... de mentira"

const promessa = new Promise ((verdade, mentira) => {
    if (fala.includes("carro") && fala.includes("de verdade")) {
        verdade("te amo, mãe!")
    } else {
        mentira("amm, não era bem isso que eu esperava...")
    }
}) 

.then((certo) => console.log(certo))
.catch((errado) => console.log(errado))
