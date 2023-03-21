import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import DistritosFederalesTable from "@/components/Table/DistritosFederalesTable";
import arrEstados from "../../public/index.json";
import EncabezadoTabla from "@/components/Encabezado/EncabezadoTabla";
import PPPNSelect from "@/components/Form/PPNSelect";

export default function ShowEscenario() {
  useEffect(() => {
    fetch("http://localhost:3002/api/escenario/get")
      .then((res) => res.json())
      .then((data) => {
        setArrEscenarios(data);
        console.log("new data", data);
      });
  }, []);

  const [arrEscenarios, setArrEscenarios] = useState([]);
  const [escenarioSelected, setEscenarioSelected] = useState({
    nombre: "",
    descripcion: "",
    fecha: "",
  });
  const [serch, setSearch] = useState("");
  const [arrDistritos, setDistritos] = useState([]);
  const [arrPPN, setPPN] = useState([]);

  const getEscenario = (id) => {
    fetch("http://localhost:3002/api/escenario/get/info/select/id?id=" + id)
      .then((res) => res.json())
      .then((data) => {
        setEscenarioSelected(data[0]);
        setPPN(data[1]);
      });
    fetch("http://localhost:3002/api/escenario/get/id?id=" + id)
      .then((res) => res.json())
      .then((data) => {
        setDistritos(data);
      });
    console.log(arrPPN);
  };
  return (
    <div className="w-full h-full p-4 bg-zinc-700">
      <div className="w-full h-full bg-gray-100 rounded p-4 mt-10">
        <div className="font-bold">SELECCIONAR ESCENARIO</div>
        <div className="">
          <div className=" mb-2  ml-auto flex content-center ">
            <FontAwesomeIcon icon={faSearch} className="text-sm ml-auto" />
            <input
              className="rounded border-solid border-2 h-5 "
              type={"text"}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3">ID</th>
                <th scope="col" className="px-6 py-3">
                  NOMBRE
                </th>
                <th scope="col" className="px-6 py-3">
                  DESCRIPCION
                </th>
                <th>ENTIDADES EN COALICION</th>
                <th>ENTIDADES SOLO</th>
                <th scope="col" className="px-6 py-3">
                  FECHA
                </th>
                <th scope="col" className="px-6 py-3">
                  OPCIONES
                </th>
              </tr>
            </thead>
            <tbody>
              {arrEscenarios
                .filter((e, index) => {
                  const NOMBRE = e.nombre.toUpperCase();
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
                      <th className="px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <button
                          onClick={(e) => {
                            getEscenario(x.ID);
                          }}
                        >
                          {x.ID}
                        </button>
                      </th>
                      <th
                        scope="row"
                        className="px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <button
                          onClick={(e) => {
                            getEscenario(x.idescenario);
                          }}
                        >
                          {x.nombre}
                        </button>
                      </th>
                      <td className="px-4 ">{x.descripcion}</td>
                      <td className="px-4">{x.num}</td>
                      <td className="px-4">{300 - x.num}</td>
                      <td className="px-4 ">{x.fecha}</td>
                      <td className="px-4 content-center justify-center flex">
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
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <div>
            <EncabezadoTabla
              arrDistritos={arrDistritos}
              onClickEliminar={() => {}}
              arrEstados={arrEstados}
              escenarioSelected={escenarioSelected}
              arrPPN={arrPPN}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
