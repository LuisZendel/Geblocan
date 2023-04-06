let otro = {
  valor: 1,
};
let NumeroBloques = otro.valor;

const changeValue = (e) => {
  NumeroBloques = e;
  otro.valor = e;
  console.log(NumeroBloques);
  console.log("Se cambio");
};
module.exports = NumeroBloques;
module.exports = { changeValue };
