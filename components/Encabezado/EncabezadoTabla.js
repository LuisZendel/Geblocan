import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faTrash, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
export default function EncabezadoTabla({
  arrDistritos,
  onClickEliminar,
  arrEstados,
  escenarioSelected,
  setDistritos,
  arrPPN,
}) {
  useEffect(() => {
    var arraux = [];
    var arrppnaux = [];
    var arreglo = [];
    arreglo = [...arrDistritos];
    var contador = 0;
    for (var i = 1; i <= 32; i++) {
      for (var j = 0; j < arrDistritos.length; j++) {
        if (arreglo[j].IDED == i) {
          console.log("numero entidades");
          console.log(arreglo[j].IDED, j);
          contador++;
          break;
        }
      }
    }
    setContador(contador);
    for (var i = 0; i < arrDistritos.length; i++) {
      arraux = [...arraux, false];
    }
    setNumeroDFAsignados(arrDistritos.length);
    console.log(arrDFAignados);
    setarrDFAsignados(arraux);
    for (var i = 0; i < arrPPN.length; i++) {
      arrppnaux = [...arrppnaux, 0];
    }
    setppnContador(arrppnaux);
  }, []);
  const [serch, setSerch] = useState("");
  const [contadorppn, setppnContador] = useState([]);
  const [contadorEntidadesSelect, setContador] = useState(0);
  const [showOptions, setOptions] = useState(false);

  const filter = (e) => {
    var text = e.target.value;
    setSerch(text);
  };
  const [arrDFAignados, setarrDFAsignados] = useState([]);
  const [numeroDFAsignados, setNumeroDFAsignados] = useState(0);
  const SearchEntidades = (arr) => {
    var arreglo = [];
    arreglo = [...arr];
    var contador = 0;
    for (var i = 1; i <= 32; i++) {
      for (var j = 0; j < arr.length; j++) {
        if (arreglo[j].IDED == i) {
          console.log("numero entidades");
          console.log(arreglo[j].IDED, j);
          contador++;
          break;
        }
      }
    }
    return contador;
  };
  const onChangePPN = (index, x, indexp, e) => {
    var auxcontador = [];
    var arraux = [];
    arraux = [...arrDFAignados];
    auxcontador = [...contadorppn];
    auxcontador[indexp] = auxcontador[indexp] + 1;
    setppnContador(auxcontador);
    var auxDistritos = [];
    auxDistritos = [...arrDistritos];
    console.log("Se va cambiar el valor de distritos");
    auxDistritos[indexp].cabeza = e.target.value;
    setDistritos(auxDistritos);
    console.log(auxcontador[indexp]);
    if (arraux[index] == false) {
      arraux[index] = true;
      const newValue = numeroDFAsignados - 1;
      setNumeroDFAsignados(newValue);
      setarrDFAsignados(arraux);
    }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([escenarioSelected, x, e.target.value]),
    };
    fetch("http://localhost:3002/api/escenario/genero", requestOptions);
    console.log(arrDistritos);
  };
  return (
    <div>
      <div className="grid grid-cols-2 mt-5 p-4 border-solid">
        <div className="flex ">
          <p className="">NOMBRE DE ESCENARIO: </p>
          <p className="font-bold ml-1 ">{escenarioSelected.nombre}</p>
        </div>
        <div className="flex">
          <p>DESCRIPCION ESCENARIO:</p>
          <p className="font-bold ml-1">{escenarioSelected.descripcion}</p>
        </div>
        <div className="flex">
          <p>PARTIDOS POLITICOS INTEGRANTES:</p>
          {arrPPN.map((e, index) => {
            return (
              <p className="ml-1 font-bold" key={index}>
                {e.Abrev}{" "}
              </p>
            );
          })}
        </div>
      </div>
      <div className="mt-2">
        <>
          <div
            id="select Distritos"
            className="border block text-xs w-full p-2 rounded border-2 mt-4"
          >
            <div className="items-center justify-center flex">
              <h2 className="font-bold my-1.5 ">DISTRITOS</h2>
            </div>
            <div className=" mb-2  ml-auto flex content-center ">
              <div className="text-xs p-2">
                <p>NUMERO DE ENTIDADES: {contadorEntidadesSelect} </p>
              </div>
              <div className="text-xs p-2">
                <p>NUMERO DE DISTRITOS FEDERALES: {arrDistritos.length}</p>
              </div>
              <div className="text-xs p-2">
                <p>
                  DF POR ASIGNAR: {numeroDFAsignados}(
                  {(
                    100 -
                    ((arrDistritos.length - numeroDFAsignados) * 100) /
                      arrDistritos.length
                  ).toFixed(2)}
                  %)
                </p>
              </div>
              <div className="text-xs p-2">
                <p>
                  COMPLETADO: {arrDistritos.length - numeroDFAsignados}(
                  {(
                    ((arrDistritos.length - numeroDFAsignados) * 100) /
                    arrDistritos.length
                  ).toFixed(2)}
                  %)
                </p>
              </div>
              <FontAwesomeIcon icon={faSearch} className="text-sm ml-auto" />
              <input
                className="rounded border-solid border-2 h-5 "
                type={"text"}
                onChange={(e) => {
                  filter(e);
                }}
              />
            </div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className="realtive">
                  <th scope="col" className="px-6 py-3">
                    Estado __________
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Distrito
                  </th>
                  <th scope="col" className="px-6 py-3 mr-4 ">
                    ________________Cabecera__________
                  </th>
                  <th>Indigena</th>
                  {arrPPN.map((p, indexp) => {
                    return (
                      <th scope="col" className="px-6 py-3" key={p.Abrev}>
                        {p.Abrev}( {contadorppn[indexp]})
                      </th>
                    );
                  })}
                </tr>
              </thead>
            </table>
            <div className="">
              <div className="relative overflow-x-auto overflow-y-scroll h-96">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <tbody>
                    {arrDistritos
                      .filter((e, index) => {
                        const NOMBRE = e.NESTADO.toUpperCase();
                        const NOMBREBUSCADOR = serch.toUpperCase();
                        return !NOMBRE.indexOf(NOMBREBUSCADOR);
                      })
                      .map((x, index) => {
                        return (
                          <tr
                            key={index}
                            className={
                              index % 2 == 0
                                ? "bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-xs"
                                : "bg-slate-200 border-b dark:bg-gray-800 dark:border-gray-700 text-xs"
                            }
                          >
                            <th
                              scope="row"
                              className="px-6 text-xs text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              {arrEstados[x.IDED - 1].estado}
                            </th>
                            <td className="px-4 ">{x.IDDTOFED}</td>
                            <td className="px-4 ">{x.CABECERA}</td>
                            <td className="px-4">
                              {x.NTIPOINDIG == "1" ? "SI" : "NO"}
                            </td>
                            {showOptions == false ? (
                              <>
                                {arrPPN.map((p, indexp) => {
                                  return (
                                    <td
                                      scope="col"
                                      className="px-6 "
                                      key={p.Abrev}
                                    >
                                      <input
                                        value={p.Abrev}
                                        name={x.IDDTOFED + x.CABECERA}
                                        onChange={(e) => {
                                          onChangePPN(index, x, indexp, e);
                                        }}
                                        type={"radio"}
                                      />
                                    </td>
                                  );
                                })}
                              </>
                            ) : (
                              <>
                                <td>
                                  <button onClick={setOptions(true)}>
                                    <FontAwesomeIcon icon={faCog} />
                                  </button>
                                </td>
                              </>
                            )}
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}
