const personas = [
    {nombre: "David", edad: 24, ocupacion: "Estudiante"},
    {nombre: "Nataly", edad: 27, ocupacion: "Trabajador"},
    {nombre: "Diana", edad: 30, ocupacion: "Trabajador"},    
]

let valorBuscado = "David"

const resultado = personas.find(persona => persona.nombre === valorBuscado)
console.log(resultado)

if (resultado == undefined){
    console.log("No existe")
} else {
    console.log("Existe")
}