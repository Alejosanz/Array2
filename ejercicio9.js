let utiles = [
    {color:"amarillo",tamaño: 11, tipo:  "cuadrado"},
    {color:"cafe",tamaño: 9, tipo:  "redondo"},
    {color:"negro",tamaño: 2, tipo:  "triangulo"},
    {color:"blanco",tamaño: 31, tipo:  "redondo"},
    {color:"verde",tamaño: 14, tipo:  "cuadrado"},
];

let utilesAgrupados = utiles.reduce((acumulador, util) => {
    let tipo = util.tipo;
    (acumulador[tipo] = acumulador[tipo] || []).push(util);
    return acumulador;
}, {});

console.log(utilesAgrupados);