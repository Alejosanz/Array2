
let personas = ["Nata", 25, true, { ciudad: "Berlin" }];
let objeto = {};
personas.forEach((elemento, indice) => {
  objeto[`propiedad${indice + 1}`] = elemento;
});
console.log(objeto);
