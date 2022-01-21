let pesoPeca = 150

if(pesoPeca > 100) {
    console.log("Peso maior que 100g, logo, podemos cadastrar a peça")

    
} else {
    console.log ("Peso Insuficiente, não é possível cadastrar.")
}

let numeroDePeca = 6

if(numeroDePeca < 10) {
    console.log ("Pode cadastrar")
} else {
    console.log ("Não pode cadastrar")
}      

let nomeDaPeca = 'freio'

console.log ("O comprimento do nome da peça é:", nomeDaPeca.length)

if(nomeDaPeca.length < 4) { 
    console.log("Nome de peça muito curto, não é possível cadastrar")
} else {
    console.log ("Nome da peça ok") 
}