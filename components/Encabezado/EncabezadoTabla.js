import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
export default function EncabezadoTabla({
  arrDistritos,
  onClickEliminar,
  arrEstados,
  escenarioSelected,
}) {
  useEffect(() => {
    var arraux = [];
    setContador(SearchEntidades(arrDistritos));
    for (var i = 0; i < arrDistritos.length; i++) {
      arraux = [...arraux, false];
    }
    setNumeroDFAsignados(arrDistritos.length);
    console.log(arrDFAignados);
    setarrDFAsignados(arraux);
  }, [arrDistritos]);
  const [serch, setSerch] = useState("");
  const [contadorppn, setppnContador] = useState("")
  const [contadorEntidadesSelect, setContador] = useState(0);
  const [PRI, SETPRI ] = useState(0)
  const [PRD, SETPRD] = useState(0)
  const [PAN, SETPAN] = useState(0)
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
  const onChangePPN = (index,e) => {
    console.log(e.target.value)
    if(e.target.value == "PRI"){
      const value = PRI +1
      SETPRI(value)

    }
    if(e.target.value == "PAN"){
      const value = PAN +1
      SETPAN(value)

    }
    if(e.target.value == "PRD"){
      const value = PRD +1
      SETPRD(value)

    }
    var arraux = [];
    arraux = [...arrDFAignados];
    if (arraux[index] == false) {
      arraux[index] = true;
      const newValue = numeroDFAsignados - 1;
      setNumeroDFAsignados(newValue);
      setarrDFAsignados(arraux);
    }
  };
  return (
    <div>
      <div className="grid grid-cols-2 font-bold mt-5 p-4 border-solid">
        <div className="">NOMBRE DE ESCENARIO: {escenarioSelected.nombre}</div>
        <div>DESCRIPCION ESCENARIO: {escenarioSelected.descripcion}</div>
        <div>PARTIDOS POLITICOS INTEGRANTES: </div>
        <div>TIPO DE COALICION: FXM</div>
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
                <p>DF POR ASIGNAR: {numeroDFAsignados}</p>
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
                      <th scope="col" className="px-6 py-3">
                        Distrito
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Cabecera
                      </th>
                      <th scope="col" className="px-6 py-3">
                        PRI{" "}{PRI}
                      </th>
                      <th scope="col" className="px-6 py-3">
                        PAN{" "}{PAN}
                      </th>
                      <th scope="col" className="px-6 py-3">
                        PRD{" "}{PRD}
                      </th>
                      <th scope="col" className="px-6 py-3">
                        TOTAL
                      </th>
                    </tr>
                  </thead>
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
                            <td scope="col" className="px-6 ">
                              <input
                              value={"PRI"}
                                name={x.IDDTOFED + x.CABECERA}
                                onChange={(e) => {
                                  onChangePPN(index,e);
                                }}
                                type={"radio"}
                              />
                            </td>
                            <td scope="col" className="px-6">
                              <input
                              value={"PAN"}
                                name={x.IDDTOFED + x.CABECERA}
                                onChange={(e) => {
                                  onChangePPN(index,e);
                                }}
                                type={"radio"}
                              />
                            </td>
                            <td scope="col" className="px-6 ">
                              <input
                              value={"PRD"}
                                name={x.IDDTOFED + x.CABECERA}
                                onChange={(e) => {
                                  onChangePPN(index,e);
                                }}
                                type={"radio"}
                              />
                            </td>
                            <td scope="col" className="px-6 ">
                              0
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
      </div>
    </div>
  );
}
