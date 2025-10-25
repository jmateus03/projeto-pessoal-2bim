const prompt = require("prompt-sync")()

let equipes = []

let equipeQuantidade
do {
    equipeQuantidade = parseInt(prompt("Insira o número de equipes que teremos no campeonato: "))
    if (isNaN(equipeQuantidade) || equipeQuantidade <= 2) {
        console.log("\nPor favor, digite um número válido maior que 2.")
    }
} while (isNaN(equipeQuantidade) || equipeQuantidade <= 2)

for (let i = 0; i < equipeQuantidade; i++) {
    let nomeEquipe
    do {
        nomeEquipe = prompt(`Insira o nome da equipe ${i + 1}: `)
        if (!nomeEquipe) {
            console.log("\nPor favor, digite um nome válido para a equipe.")
        }
    } while (!nomeEquipe)

    equipes.push(nomeEquipe)
}

let partida = 1

while (equipes.length > 8) {
    let aleatorio1 = Math.floor(Math.random() * equipes.length)
    let aleatorio2

    do {
        aleatorio2 = Math.floor(Math.random() * equipes.length)
    } while (aleatorio2 === aleatorio1)
    console.log(`\n======${partida}° PARTIDA ======`)
    console.log(`\n${equipes[aleatorio1]} X ${equipes[aleatorio2]}\n`)

    let vencedor
    do {
        vencedor = prompt("Insira o nome do vencedor da partida: ")
    } while (vencedor !== equipes[aleatorio1] && vencedor !== equipes[aleatorio2])

    let perdedor = equipes[aleatorio1] === vencedor ? equipes[aleatorio2] : equipes[aleatorio1]
    let indice = equipes.findIndex(equipeEliminada => equipeEliminada === perdedor)
    equipes.splice(indice, 1)

    partida++
}

while (equipes.length > 4 && equipes.length <= 8) {
    let aleatorio1 = Math.floor(Math.random() * equipes.length)
    let aleatorio2

    do {
        aleatorio2 = Math.floor(Math.random() * equipes.length)
    } while (aleatorio2 === aleatorio1)
    console.log(`\n======QUARTAS DE FINAIS======`)
    console.log(`\n${equipes[aleatorio1]} X ${equipes[aleatorio2]}\n`)

    let vencedor
    do {
        vencedor = prompt("Insira o nome do vencedor da partida: ")
    } while (vencedor !== equipes[aleatorio1] && vencedor !== equipes[aleatorio2])

    let perdedor = equipes[aleatorio1] === vencedor ? equipes[aleatorio2] : equipes[aleatorio1]
    let indice = equipes.findIndex(equipeEliminada => equipeEliminada === perdedor)
    equipes.splice(indice, 1)
}

while (equipes.length > 2 && equipes.length <= 4) {
    let aleatorio1 = Math.floor(Math.random() * equipes.length)
    let aleatorio2
    do {
        aleatorio2 = Math.floor(Math.random() * equipes.length)
    } while (aleatorio2 === aleatorio1)

    console.log("\n======SEMI FINAL======")
    console.log(`\n${equipes[aleatorio1]} X ${equipes[aleatorio2]}\n`)

    let vencedor
    do {
        vencedor = prompt("Insira o nome do vencedor da semi final: ")
    } while (vencedor !== equipes[aleatorio1] && vencedor !== equipes[aleatorio2])

    let perdedor = equipes[aleatorio1] === vencedor ? equipes[aleatorio2] : equipes[aleatorio1]
    let indice = equipes.findIndex(equipeEliminada => equipeEliminada === perdedor)
    equipes.splice(indice, 1)
}

while (equipes.length > 1 && equipes.length < 3) {
    let aleatorio1 = Math.floor(Math.random() * equipes.length)
    let aleatorio2

    do {
        aleatorio2 = Math.floor(Math.random() * equipes.length)
    } while (aleatorio2 === aleatorio1)

    console.log("\n======FINAL======")
    console.log(`${equipes[aleatorio1]} X ${equipes[aleatorio2]}`)

    let vencedor
    do {
        vencedor = prompt("Insira o nome do vencedor da final: ")
    } while (vencedor !== equipes[aleatorio1] && vencedor !== equipes[aleatorio2])

    let perdedor = equipes[aleatorio1] === vencedor ? equipes[aleatorio2] : equipes[aleatorio1]
    let indice = equipes.findIndex(equipeEliminada => equipeEliminada === perdedor)
    equipes.splice(indice, 1)
}


console.log(`\nParabéns ${equipes[0]}! Você é o vencedor do campeonato 🏆`)