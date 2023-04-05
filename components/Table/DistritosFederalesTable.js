import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
export default function DistritosFederalesTable({
  arrDistritos,
  onClickEliminar,
  arrEstados,
}) {
  useEffect(() => {
    setContador(SearchEntidades(arrDistritos));
  }, [arrDistritos]);
  const [serch, setSerch] = useState("");
  const [contadorEntidadesSelect, setContador] = useState(0);

  const filter = (e) => {
    var text = e.target.value;
    setSerch(text);
  };
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
  return (
    <>
      {arrDistritos.length > 1 ? (
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
              <FontAwesomeIcon icon={faSearch} className="text-sm ml-auto" />
              <input
                className="rounded border-solid border-2 h-5 "
                type={"text"}
                onChange={(e) => {
                  filter(e);
                }}
              />
            </div>
            <div className="">
              <div className="relative overflow-x-auto overflow-y-scroll h-96">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Estado
                      </th>
                      <th scope="col" className="">
                        Opciones
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Distrito
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Cabecera
                      </th>
                      <th>Indigena</th>
                     
                    </tr>
                  </thead>
                  <tbody>
                    {arrDistritos
                      .filter((e, index) => {
                        const NOMBRE = e.NESTADO.toUpperCase();
                        const NOMBREBUSCADOR = serch.toUpperCase();
                        return !NOMBRE.indexOf(NOMBREBUSCADOR);
                      })
                      .map((x, index2) => {
                        return (
                          <tr
                            key={index2}
                            className={
                              index2 % 2 == 0
                                ? "bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-xs"
                                : "bg-slate-200 border-b dark:bg-gray-800 dark:border-gray-700 text-xs"
                            }
                          >
                            <th
                              scope="row"
                              className="px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              {arrEstados[x.IDED - 1].estado}
                            </th>{" "}
                            <td className="content-center ">
                              <button
                                onClick={(e, index) => {
                                  console.log("boton eliminar");
                                  console.log(x.IDSAB2023);
                                  var numero = x.IDSAB2023;
                                  onClickEliminar(numero, index);
                                }}
                              >
                                <FontAwesomeIcon icon={faTrash} />
                              </button>
                            </td>
                            <td className=" justify-center flex">{x.IDDTOFED}</td>
                            <td className=" ">{x.CABECERA}</td>
                            <td className="">
                              {x.NTIPOINDIG == 1 ? "SI" : ""}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
