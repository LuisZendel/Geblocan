import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import arrEstados from "../../public/index.json";
import EncabezadoTabla from "@/components/Encabezado/EncabezadoTabla";
import Sidebar from "@/components/bar/Siderbar";
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
    console.log(id);
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
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="w-full h-screen p-2 bg-white">
        <div className="w-full h-5/6 bg-zinc-700 rounded p-6 mt-10 text-white overflow-scroll ">
          {escenarioSelected.nombre == "" ? (
            <div className="">
              <div className="font-bold">SELECCIONAR ESCENARIO</div>

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
              <div className="py-5 flex justify-center ">
                <table className="table-fixed">
                  <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 table-fixed">
                    <tr>
                      <th className="px-6 py-3">ID</th>
                      <th scope="col" className="px-6 py-3">
                        NOMBRE
                      </th>
                      <th scope="col" className="px-6 py-3">
                        DESCRIPCION
                      </th>
                      <th>COALICION</th>
                      <th>SOLOS</th>
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
                                ? "bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-xs text-black"
                                : "bg-slate-200 border-b dark:bg-gray-800 dark:border-gray-700 text-xs text-black"
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
                                  getEscenario(x.ID);
                                }}
                              >
                                {x.nombre}
                              </button>
                            </th>
                            <td className="px-4 ">{x.descripcion}</td>
                            <td className="px-4">
                              {x.competencia == "Coalicion" ? x.num : "Ninguno"}
                            </td>

                            <td className="px-4">
                              {x.competencia == "Coalicion"
                                ? 300 - x.num
                                : x.num}
                            </td>
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
              </div>
            </div>
          ) : (
            <div>
              <EncabezadoTabla
                arrDistritos={arrDistritos}
                onClickEliminar={() => {}}
                arrEstados={arrEstados}
                escenarioSelected={escenarioSelected}
                arrPPN={arrPPN}
                setDistritos={setDistritos}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
