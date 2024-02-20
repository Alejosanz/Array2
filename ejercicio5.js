const personas = [
    {nombre: "David", edad: 17},
    {nombre: "Nataly", edad: 27},
    {nombre: "Diana", edad: 15},
    {nombre: "Diana", edad: 30},   
]
edadFiltrada = personas.filter(function(persona) {
    return persona.edad >= 18
})
console.log(edadFiltrada)

let = valorBuscado = "Nataly"
for(let i = 0; i < personas.length; i++) {
    for (const key in personas[i]) {
        if(key === "nombre") {
            if (personas[i][key] === valorBuscado) {
                console.log("existe")
            } else {
                console.log("no existe")
            }     

        }else {
            continue;
        }
    }
}