var req = new XMLHttpRequest();

req.open("GET", "https://pokeapi.co/api/v2/pokemon-species/132/")

req.send()

document.write("Informações: " + req.onload(     ))