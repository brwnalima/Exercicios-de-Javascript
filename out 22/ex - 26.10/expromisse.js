const promessa = new Promise ((certo, errado) => {
    if (4 === 5) {
        certo("Funcionou.")
        
    } else {
        let m = 9 + 3
        errado(`VALOR: ${m}`)

    }
})

.then((msgSucesso => console.log(msgSucesso)))
.catch((msgErro => console.log(msgErro)))

// ABRI TUDO NO NODE/TERMINAL