import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import PPPNSelect from "@/components/Form/PPNSelect";
import Sidebar from "@/components/bar/Siderbar";
import { icon } from "@fortawesome/fontawesome-svg-core";
export default function Bloques() {
  const [arr, setArr] = useState([]);
  const [names, setNames] = useState([]);
  const [arrEscenarios, setArrEscenarios] = useState([]);
  const [serch, setSearch] = useState("");
  const [searchDF, setSeacrhDF] = useState("");
  const [showConfig, setConfig] = useState(false);
  const [blockSelection, setBlockSelection] = useState(false);
  const [valorMaximo, setMaximo] = useState(0);
  const [valorMinimo, setMinimo] = useState(0);
  const [escenarioSelected, setEscenarioSelected] = useState({
    nombre: "",
    descripcion: "",
    fecha: "",
  });
  const [contadorBloques, setContadorBloques] = useState({
    mbajo: {
      hombre: 0,
      mujer: 0,
    },
  });
  const [arrPPN, setPPN] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/api/escenario/get")
      .then((res) => res.json())
      .then((data) => {
        setArrEscenarios(data);
        console.log("new data", data);
      });
  }, []);

  const getEscenario = (id) => {
    console.log(id);
    fetch("http://localhost:3002/api/escenario/get/info/select/id?id=" + id)
      .then((res) => res.json())
      .then((data) => {
        setEscenarioSelected(data[0]);
        setPPN(data[1]);
        console.log(data[1]);
        return data;
      })
      .then((ppn) => {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify([ppn[0], ppn[1]]),
        };
        fetch("http://localhost:3002/api/block/pross", requestOptions)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setArr(data);
            console.log("imprimiendo data");
            console.log(data);
            var objectToInspect;
            var result = [];

            for (
              objectToInspect = data[0];
              objectToInspect !== null;
              objectToInspect = Object.getPrototypeOf(objectToInspect)
            ) {
              result = result.concat(
                Object.getOwnPropertyNames(objectToInspect)
              );
            }
            for (var i = 0; i < 12; i++) {
              result.pop();
            }
            setNames(result);
            var aux = {
              mbajo: {
                hombre: 0,
                mujer: 0,
              },
            };
            var arregloH = [];
            var arregloM = [];
            (arregloH = data.filter((e) => {
              return e.genero == "Hombre" && e.NP2 < 20;
            })),
              (arregloM = data.filter((e) => {
                return e.genero == "Mujer" && e.NP2 < 20;
              }));

            aux.mbajo.hombre = arregloH.length;
            aux.mbajo.mujer = arregloM.length;
            console.log("Arreglo H");
            console.log(arregloH);
            setContadorBloques(aux);
          });
      });
  };

  const getEscenarioIndigena = () => {
    console.log("escenarios");
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([escenarioSelected, arrPPN]),
    };
    fetch("http://localhost:3002/api/block/pross/indigenas", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setArr(data);
        var objectToInspect;
        var result = [];

        for (
          objectToInspect = data[0];
          objectToInspect !== null;
          objectToInspect = Object.getPrototypeOf(objectToInspect)
        ) {
          result = result.concat(Object.getOwnPropertyNames(objectToInspect));
        }
        for (var i = 0; i < 12; i++) {
          result.pop();
        }
        setNames(result);
      });
  };

  const saveGenro = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([arr, escenarioSelected]),
    };
    fetch("http://localhost:3002/api/block/pross/genero", requestOptions);
  };

  const getEscenarioSolos = () => {
    console.log("escenarios");
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([escenarioSelected, arrPPN]),
    };
    fetch("http://localhost:3002/api/block/pross/solos", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setArr(data);
        var objectToInspect;
        var result = [];

        for (
          objectToInspect = data[0];
          objectToInspect !== null;
          objectToInspect = Object.getPrototypeOf(objectToInspect)
        ) {
          result = result.concat(Object.getOwnPropertyNames(objectToInspect));
        }
        for (var i = 0; i < 12; i++) {
          result.pop();
        }
        setNames(result);
      });
  };

  const getEscenarioSeleccionado = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([escenarioSelected, arrPPN]),
    };
    fetch("http://localhost:3002/api/block/pross", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setArr(data);
        var objectToInspect;
        var result = [];

        for (
          objectToInspect = data[0];
          objectToInspect !== null;
          objectToInspect = Object.getPrototypeOf(objectToInspect)
        ) {
          result = result.concat(Object.getOwnPropertyNames(objectToInspect));
        }
        for (var i = 0; i < 12; i++) {
          result.pop();
        }
        setNames(result);
      });
  };

  const onChangeGenero = (e, pos) => {
    var arraux = [];
    arraux = [...arr];
    console.log("pos a modificar", pos);
    console.log(arr[pos]);
    arraux[pos].GENERO = e.target.value;
    arraux[pos].genero = e.target.value;
    setArr(arraux);
    setConfig(false);
  };
  const filterBlock = (id) => {
    console.log(id);
    if (id == 0) {
      setBlockSelection(true);
      setMaximo(100);
      setMinimo(0);
    }
    if (id == 1) {
      setBlockSelection(true);
      setMaximo(20);
      setMinimo(0);
    } else if (id == 2) {
      console.log("medio");
      setBlockSelection(true);
      setMaximo(146);
      setMinimo(74);
    } else if (id == 3) {
      setBlockSelection(true);
      setMaximo(219);
      setMinimo(147);
    } else if (id == 4) {
      setBlockSelection(false);
      setMaximo(0);
      setMinimo(0);
    }
  };
  const valirDatos = () => {
    if (arr[0].GENERO == "Mujer") {
      alert(
        "La primera poscicion de la distribucion no puede ser asignada al genero seleccionado"
      );
    }
    if (arr[1].GENERO == "Mujer") {
      alert(
        "La segunda poscicion de la distribucion no puede ser asignada al genero seleccionado"
      );
    }
  };

  return (
    <div className="flex">
      <div className="">
        <Sidebar />
      </div>
      <div className="w-full h-screen p-4 bg-white">
        {arr.length == 0 ? (
          <div>
            <div className="w-full h-full bg-zinc-700 text-white rounded p-4 mt-10">
              <div className="font-bold">SELECCIONAR ESCENARIO</div>
              <div className="flex justify-center py-5">
                <table className="table-fixed">
                  <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 table-fixed">
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
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-5/6 overflow-scroll text-white p-4 mt-10">
            <div className="grid grid-cols-2 gap-4 smt-5 h-full">
              <div className="bg-zinc-700 p-3">
                <div className="flex ">
                  <p className="">NOMBRE DE ESCENARIO: </p>
                  <p className="font-bold ml-1 ">{escenarioSelected.nombre}</p>
                </div>
                <div className="flex">
                  <p>DESCRIPCION ESCENARIO:</p>
                  <p className="font-bold ml-1">
                    {escenarioSelected.descripcion}
                  </p>
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
                <div className="flex">
                  <p>DISTRITOS FEDERALES SOLOS SE EVALUAN CON: </p>
                  <p className="font-bold ml-1">PRI</p>
                </div>
                <div className="mt-3 text-black">
                  <div className="grid grid-cols-3 mt-3 text-black">
                    <button
                      onClick={() => {
                        getEscenarioSeleccionado();
                      }}
                      className=" mr-auto ml-auto p-2 bg-gray-200 w-fit rounded-md"
                    >
                      Coalicion
                    </button>
                    <button
                      onClick={() => {
                        getEscenarioIndigena();
                      }}
                      className=" mr-auto ml-auto p-2 bg-gray-200 w-fit rounded-md"
                    >
                      Indigenas
                    </button>
                    <button
                      onClick={() => {
                        getEscenarioSolos();
                      }}
                      className=" mr-auto ml-auto p-2 bg-gray-200 w-fit rounded-md"
                    >
                      Solos
                    </button>
                  </div>
                  <table className="text-white">
                    <thead>
                      <tr>
                        <th className="px-2">Bloques</th>
                        <th className="px-2">Mujeres</th>
                        <th className="px-2">Avance</th>
                        <th className="px-2">Hombres</th>
                        <th className="px-2">Avance</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>
                          <button
                            onClick={() => {
                              filterBlock(0);
                            }}
                            className="w-24 bg-red-400 rounded h-8 text-white ml-auto "
                          >
                            MÁS BAJO
                          </button>
                        </th>
                        <th className="px-2 border border-solid border-2 ">
                          {arr.length < 50 ? 1 : 10}
                        </th>
                        <th className="px-2 border border-solid border-2">
                          {contadorBloques.mbajo.mujer}
                        </th>
                        <th className="px-2 border border-solid border-2">
                          {arr.length < 50 ? 2 : 10}
                        </th>
                        <th className="px-2 border border-solid border-2">
                          {contadorBloques.mbajo.hombre}
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <button
                            onClick={() => {
                              filterBlock(1);
                            }}
                            className="w-24 bg-red-400 rounded h-8 text-white ml-auto"
                          >
                            BAJO
                          </button>
                        </th>
                        <th className="px-2 border border-solid border-2">
                          {arr.length < 100
                            ? Math.trunc(arr.length / 3 / 2)
                            : Math.trunc(arr.length / 3 / 2) - 10 + 1}
                        </th>
                        <th className="px-2 border border-solid border-2">0</th>
                        <th className="px-2 border border-solid border-2">
                          {arr.length < 100
                            ? Math.trunc(arr.length / 3 / 2 - 1)
                            : Math.trunc(arr.length / 3 / 2) - 10}
                        </th>
                        <th className="px-2 border border-solid border-2">0</th>
                      </tr>
                      <tr>
                        <th>
                          <button
                            onClick={() => {
                              filterBlock(2);
                            }}
                            className="w-24 bg-blue-400 rounded h-8 text-white ml-auto "
                          >
                            MEDIO
                          </button>
                        </th>
                        <th className="px-2 border border-solid border-2">
                          {Math.trunc(arr.length / 3 / 2) + 1}
                        </th>
                        <th className="px-2 border border-solid border-2">0</th>
                        <th className="px-2 border border-solid border-2">
                          {Math.trunc(arr.length / 3 / 2)}
                        </th>
                        <th className="px-2 border border-solid border-2">0</th>
                      </tr>
                      <tr>
                        <th>
                          <button
                            onClick={() => {
                              filterBlock(3);
                            }}
                            className="w-24 bg-green-400 rounded h-8 text-white ml-auto"
                          >
                            ALTO
                          </button>
                        </th>
                        <th className="px-2 border border-solid border-2">
                          {Math.trunc(arr.length / 3 / 2) + 1}
                        </th>
                        <th className="px-2 border border-solid border-2">0</th>
                        <th className="px-2 border border-solid border-2">
                          {Math.trunc(arr.length / 3 / 2)}
                        </th>
                        <th className="px-2 border border-solid border-2">0</th>
                      </tr>
                    </tbody>
                  </table>

                  <div className=" flex mt-3">
                    <button
                      onClick={valirDatos}
                      className="w-24  bg-blue-600 ml-auto  rounded rounded-md	p-1"
                    >
                      Aceptar
                    </button>

                    <input
                      type={"text"}
                      className="ml-auto"
                      onChange={(e) => {
                        setSeacrhDF(e.target.value);
                      }}
                    />
                    <button
                      className="ml-auto mr-auto"
                      onClick={() => {
                        filterBlock(4);
                      }}
                    >
                      Mostrar todo
                    </button>
                  </div>
                  <div className="flex w-full">
                    <button
                      className="ml-auto mr-auto w-96 mt-5 bg-blue-600 text-white rounded rounded-md	p-1"
                      onClick={() => {
                        saveGenro();
                      }}
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-zinc-700 h-full overflow-scroll ">
                <div>
                  <table className=" ml-auto mr-auto mt-3 text-xs">
                    <thead className="">
                      <tr>
                        <th>NP</th>
                        <th>IDE</th>
                        <th>IDDF</th>
                        <th>CABFED</th>
                        <th>CLASIFICACION</th>
                        <th>UNION</th>
                        <th>GENERO</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs">
                      {arr
                        .filter((v, index3) => {
                          if (blockSelection == false) {
                            const NOMBRE = v.ESTADO.toUpperCase();
                            const NOMBREBUSCADOR = searchDF.toUpperCase();
                            return !NOMBRE.indexOf(NOMBREBUSCADOR);
                          } else {
                            return (
                              index3 < valorMaximo && index3 >= valorMinimo - 1
                            );
                          }
                        })
                        .map((e, index2) => {
                          var aux = Object.values(e);
                          return (
                            <tr
                              key={index2}
                              className={
                                e.NP2 < arr.length / 3 + 1
                                  ? "bg-red-400 border-solid border border-2 text-xs"
                                  : e.NP2 < (arr.length / 3) * 2 + 1
                                  ? "bg-blue-400 border-solid border border-2 text-xs"
                                  : "bg-green-400 border-solid border border-2	text-xs"
                              }
                            >
                              <th>{e.NP2}</th>
                              <th>{e.IDE}</th>
                              <th>{e.DF}</th>
                              <th className="flex ml-2 w-fit">{e.CABFED}</th>
                              <th>{e.CLASIFICACION}</th>
                              <th>{e.union}</th>
                              <th>{e.genero ? e.genero : e.GENERO}</th>
                              {index2 > 1 ? (
                                <th>
                                  <button
                                    onClick={() => {
                                      setConfig(true);
                                    }}
                                  >
                                    <FontAwesomeIcon icon={faCog} />
                                  </button>{" "}
                                  :
                                </th>
                              ) : (
                                <></>
                              )}
                              {showConfig == true && index2 > 1 ? (
                                <>
                                  {e.CLASIFICACION == "INDIGENA" &&
                                  arr.length > 21 ? (
                                    <></>
                                  ) : (
                                    <>
                                      <th>
                                        {" "}
                                        <label>Mujer:</label>
                                        <input
                                          type={"radio"}
                                          value={"Mujer"}
                                          name={index2}
                                          onClick={(v) => {
                                            var pos = e.NP2 - 1;
                                            onChangeGenero(v, pos);
                                          }}
                                        />
                                      </th>
                                      <th>
                                        {" "}
                                        <label>Hombre:</label>
                                        <input
                                          type={"radio"}
                                          value={"Hombre"}
                                          name={index2}
                                          onClick={(v) => {
                                            var pos = e.NP2 - 1;
                                            onChangeGenero(v, pos);
                                          }}
                                        />
                                      </th>
                                    </>
                                  )}
                                </>
                              ) : (
                                <></>
                              )}
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
