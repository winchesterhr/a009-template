/* const Pessoa = prompt("Qual Seu Nome?")
const CorFavorita = prompt("Qual Sua Cor Favorita")
const Citacao = prompt("Qual sua citação favorita?")

const NomeMaiusculo = Pessoa.toUpperCase() // Deixa a letra MAISCULA
const quantasletras = Pessoa.length // Quantas letras tem o nome
const TemLetraA = Pessoa.match(/bB/g)

const FraseConcatenada = "A cor preferida de "+NomeMaiusculo+" é "+ CorFavorita + " E a citação preferida dela é: "+" \" " + Citacao + " \" "
console.log("frase Concatenada:",FraseConcatenada, NomeMaiusculo, quantasletras, TemLetraA);


const fraseTemplateString = `A cor preferida de ${Pessoa} é: \n${CorFavorita}.\nE a citação preferida dela é: \n${Citacao}`
console.log("FraseTemplate:",fraseTemplateString); // -- Forma + pratica  */


// EXERCICIO

const Nome = prompt("Qual o seu nome")
const Email = prompt("Qual o seu Email?")
const verificacao = Email.includes("@")
const numrocarac = Nome.length
const frase = `O e-mail ${Email} casdastrado com sucesso.\nBem vindo ${Nome}! \nA sua quantidade de caracteres presente no seu nome e ${numrocarac} \n Tem @ no seu email? ${verificacao}`
const novafrase = frase.replaceAll("r","L")


console.log(novafrase)


