var persona1 = {
    nombre:"Yenny",
    apellido:"Mendez",
    edad:"32",
    peso:"80"
}

    const INCREMENTO_PESO = 0.2
    const aumentarDePeso = persona1 => persona1.peso += INCREMENTO_PESO
    const adelgazar = persona1 => persona1.peso -= INCREMENTO_PESO

console.log(`Al inicio del año ${persona1.nombre} pesa ${persona1.peso} kg`)
    for (var i = 1; i <= 365; i++){
        var random = Math.random()
        if (random < 0.25){
        //aumentoDePeso
        aumentarDePeso(persona1)
    } else if (random < 0.5){
        //adelgazar
        adelgazar(persona1)
    }

    }

console.log(`Al final del año ${persona1.nombre} pesa ${persona1.peso.toFixed(2)} kg`)