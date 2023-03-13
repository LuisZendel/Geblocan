import { useEffect, useState } from "react";
import arrEstados from "../../public/index.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import EscenarioFL from "@/components/Form/EscenarioFL";
import Candidatura from "@/components/Form/Candidatura";
import CompetenciaForm from "@/components/Form/CompetenciaForm";
import PreSaveView from "@/components/Form/PreSaveView";
import PPPNSelect from "@/components/Form/PPNSelect";
import DistritosLocalesTable from "@/components/Table/DistritosLocalesTable";
import DistritosFederalesTable from "@/components/Table/DistritosFederalesTable";
export default function Home() {
  const [Federal, setFederal] = useState("");
  const [CandidaturaTipo, setCandidatura] = useState("");
  const [Competencia, setCompetencia] = useState("");
  const [arrPPN, setPPN] = useState([]);
  const [arrDistritos, setDistritos] = useState([]);
  const [estadoSeleccionado, setEstado] = useState("");
  const [checkAllStates, setAllStates] = useState(false);
  const [checkAllStatesArr, setAllStatesArr] = useState([]);
  const [preview, setPreview] = useState(true);
  const [arrMunicipios, setMunicipios] = useState([]);
  const [PPNSeleccionados, setPPNSeleccionados] = useState([]);
  const [distritosLocales, setDistritosLocales] = useState([]);
  const [arrPPNLOCALES, setPNNLOCALES] = useState([]);
  const [arrDistritosEliminados, setDistritosEliminados] = useState([]);
  const [eliminado, setEliminados] = useState([]);
  const [contadorEntidadesSeleccionadas, setContador] = useState(0);
  const [Coalicion, setCoalicion] = useState({
    nombre: "",
    Abrev: "",
  });

  const resetArr = () => {
    var arrFalse = [];
    for (var i = 0; i < 32; i++) {
      arrFalse = [...arrFalse, false];
    }
    setAllStatesArr(arrFalse);
  };
  useEffect(() => {
    getPPN();
    setCandidatura("");
    setCompetencia("");
    setPPN([]);
    setDistritos([]);
    setEstado([]);
    setPreview(false);
    setMunicipios([]);
    setAllStates(false);
    setDistritosLocales([]);
    setPNNLOCALES([]);
    setDistritosEliminados([]);
    setPPNSeleccionados([]);
    setCoalicion({
      nombre: "",
      Abrev: "",
    });
    resetArr();
  }, [Federal]);

  const onClickCheckAllStates = () => {
    var x;
    x = !checkAllStates;
    setAllStates(x);
    fetch("http://localhost:3002/api/distritos/get/id?id=100")
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        var arr = [...arrDistritos];
        for (var i = 0; i < data.length; i++) {
          arr = [...arr, data[i]];
        }
        console.log("arreglo", arr);
        setDistritos(arr);
      });

    var arrFalse = [];
    for (var i = 0; i < 32; i++) {
      arrFalse = [...arrFalse, true];
    }
    setAllStatesArr(arrFalse);
    console.log(checkAllStatesArr);
  };
  const onChangeFederal = (e) => {
    const newValue = e.target.value;
    console.log(e.target.value);
    setFederal(newValue);
    console.log(Federal);
  };

  const onChangeCandidatura = (e) => {
    setDistritos([]);
    setEstado([]);
    setCompetencia("");
    setPreview(false);
    setAllStates(false);
    setDistritosEliminados([]);
    setPPNSeleccionados([]);
    setDistritosLocales([]);
    setMunicipios([]);
    setPNNLOCALES([]);
    setCoalicion({
      nombre: "",
      Abrev: "",
    });
    resetArr();
    if (e.target.value == "AY") {
      onChangeAyuntamiento();
    }
    setCandidatura(e.target.value);
  };
  const onChangeCompetencia = (e) => {
    setDistritos([]);
    setEstado([]);
    setPreview(false);
    setMunicipios([]);
    setAllStates(false);
    setDistritosLocales([]);
    setPNNLOCALES([]);
    setDistritosEliminados([]);
    setPPNSeleccionados([]);
    setCoalicion({
      nombre: "",
      Abrev: "",
    });
    resetArr();
    setCompetencia(e.target.value);
  };
  const onChangeCoalicion = (e, i) => {
    if (i == 1) {
      const coal = {
        nombre: e.target.value,
        Abrev: Coalicion.Abrev,
      };
      setCoalicion(coal);
    }
    if (i == 2) {
      const coal = {
        nombre: Coalicion.nombre,
        Abrev: e.target.value,
      };
      setCoalicion(coal);
    }
  };

  const insertPPNSeleccionados = (e) => {
    var arr = [];
    arr = [...PPNSeleccionados, e.target.value];
    setPPNSeleccionados(arr);
  };

  const onChangeAyuntamiento = () => {
    setCompetencia("");
    setDistritos([]);
    setEstado([]);
    setPreview(false);
    setAllStates(false);
    setDistritosLocales([]);
    setMunicipios([]);
    setDistritosEliminados([]);
    setPPNSeleccionados([]);
    setPNNLOCALES([]);
    setCoalicion({
      nombre: "",
      Abrev: "",
    });
    resetArr();
  };

  const getPPN = () => {
    fetch("http://localhost:3002/api/ppn/get")
      .then((data) => data.json())
      .then((data) => setPPN(data));
  };
  const onClickEstado = (e, index) => {
    var arr = [];
    arr = [...checkAllStatesArr];
    const newValue = !arr[index];
    arr[index] = newValue;
    setAllStatesArr(arr);
    if (newValue == true) {
      const id = index + 1;
      fetch("http://localhost:3002/api/distritos/get/id?id=" + id)
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
          var arr = [...arrDistritos];
          for (var i = 0; i < data.length; i++) {
            arr = [...arr, data[i]];
          }
          console.log("arreglo", arr);
          setDistritos(arr);
        });
    }
    if (newValue == false) {
      var arrforDelete = [];
      arrforDelete = [...arrDistritos];
      for (var i = 0; i < arrforDelete.length; i++) {
        if (arrforDelete[i].IDED == index + 1) {
          arrforDelete.splice(i, 1);
          i--;
        }
      }
      setDistritos(arrforDelete);
    }
  };
  const onChangeEstado = (e) => {
    console.log(e.target.value);
    setEstado(e.target.value);
    getPPNLocales(e.target.value);
    if (CandidaturaTipo == "GOB" || CandidaturaTipo == "DL") {
      getDistritosLocales(e.target.value);
      console.log(distritosLocales);
    }
    if (CandidaturaTipo == "AY") {
      getMunicipios(e.target.value);
    }
  };

  const onClickEliminar = (e, index) => {
    var arr = [];
    var arrEliminado = [];
    arr = [...arrDistritos];
    const elementoEliminado = arr.splice(index, 1);
    console.log(elementoEliminado[0]);
    arrEliminado = [...arrDistritosEliminados, elementoEliminado[0]];
    setDistritosEliminados(arrEliminado);
    setDistritos(arr);
  };

  const onClickInsertDistrito = (index) => {
    var arr = [];
    var arrEliminado = [];
    arrEliminado = [...arrDistritosEliminados];
    const elementoRecuperado = arrEliminado.splice(index, 1);
    arr = [...arrDistritos, elementoRecuperado[0]];
    setDistritosEliminados(arrEliminado);
    setDistritos(arr);
  };

  const onClickEliminarMunicipio = (e, index) => {
    e.preventDefault();
    var arr = [];
    arr = [...arrMunicipios];
    arr.splice(index, 1);
    setMunicipios(arr);
  };

  const getDistritosLocales = (idEstado) => {
    fetch("http://localhost:3002/api/distritos/get/locales/id?id=" + idEstado)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        var arr = [...arrDistritos];
        for (var i = 0; i < data.length; i++) {
          arr = [...arr, data[i]];
          console.log("Seañadio");
        }
        console.log("arreglo", arr);
        setDistritosLocales(arr);
      });
  };

  const getMunicipios = (idEstado) => {
    fetch(
      "http://localhost:3002/api/distritos/get/municipios/id?id=" + idEstado
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        var arr = [...arrDistritos];
        for (var i = 0; i < data.length; i++) {
          arr = [...arr, data[i]];
          console.log("Seañadio");
        }
        console.log("arreglo", arr);
        setMunicipios(arr);
      });
  };
  const getPPNLocales = (idEstado) => {
    fetch(
      "http://localhost:3002/api/distritos/get/ppn/locales/id?id=" + idEstado
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        var arr = [...arrDistritos];
        for (var i = 0; i < data.length; i++) {
          arr = [...arr, data[i]];
          console.log("Seañadio");
        }
        console.log("arreglo", arr);
        setPNNLOCALES(arr);
      });
  };

  const onClickPreview = (e) => {
    console.log("nkjadsbnjf");
    const newValue = !preview;
    console.log(newValue);
    var contador = 0;
    checkAllStatesArr.map((e) => {
      if (e == true) {
        contador++;
      }
    });
    if (contador < 32) {
      fetch("http://localhost:3002/api/distritos/get/id?id=100")
        .then((data) => data.json())
        .then((data) => {
          console.log("SHOW DATA");
          console.log(data);
          var arr = [];
          for (var i = 0; i < data.length; i++) {
            for (var j = 0; j < arrDistritos.length; j++) {
              if (
                data[i].IDED == arrDistritos[j].IDED &&
                data[i].IDDTOFED == arrDistritos[j].IDDTOFED
              ) {
                console.log("HELLO");
                data.splice(i, 1);
                i--;
              }
            }
          }
          setDistritosEliminados(data);
          setEliminados(data);
        });
    }
    console.log("ELIMINAR DISTRITOS SELECCIONADOS");
    var arr = [];
    arr = [...arrDistritosEliminados];
    console.log(eliminado);
    console.log(arrDistritosEliminados.length);

    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arrDistritos.length; j++) {
        /*   if(arr[i].IDED == arrDistritos[j].IDED && arr[i].IDDTOFED == arrDistritos[j].IDDTOFED){
                arr.splice(i,1 )
                i--
            }*/
      }
    }
    setPreview(newValue);
    setContador(contador);
  };
  return (
    <div className="w-full h-full p-4 bg-zinc-700">
      {preview == false ? (
        <div className="w-full h-full bg-gray-100 rounded p-4">
          <div className="flex">
            <EscenarioFL onChangeFederal={onChangeFederal} />
            <Candidatura
              onChangeCandidatura={onChangeCandidatura}
              Federal={Federal}
            />
            <CompetenciaForm
              onChangeCoalicion={onChangeCoalicion}
              onChangeCompetencia={onChangeCompetencia}
              CandidaturaTipo={CandidaturaTipo}
              Competencia={Competencia}
              Federal={Federal}
            />
          </div>
          {Coalicion.Abrev != "" ? (
            <>
              {Coalicion.nombre != "" ? (
                <PPPNSelect
                  insertPPNSeleccionados={insertPPNSeleccionados}
                  arrPPN={arrPPN}
                  arrPPNLOCALES={arrPPNLOCALES}
                  Competencia={Competencia}
                />
              ) : (
                <></>
              )}{" "}
            </>
          ) : (
            <></>
          )}
          {Competencia != "" ? (
            <>
              {Federal == "F" ? (
                <>
                  {PPNSeleccionados.length > 1 ? (
                    <>
                      <div
                        id="select Estados"
                        className="border block text-xs w-full p-2 rounded border-2 mt-4"
                      >
                        <div className="items-center justify-center flex">
                          <h2 className="font-bold my-1.5 ">
                            SELECCIONAR ESTADOS
                          </h2>
                          <div className="text-xs ml-auto">
                            <label className="mr-2">SELECCIONAR TODOS:</label>
                            <input
                              type={"checkbox"}
                              name="selctAllStates"
                              value={checkAllStates}
                              onClick={() => {
                                onClickCheckAllStates();
                              }}
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-5">
                          {arrEstados.map((e, index) => {
                            return (
                              <div key={e.estado} className="my-1">
                                <input
                                  onClick={(e) => onClickEstado(e, index)}
                                  type="checkbox"
                                  className="mx-1"
                                  checked={checkAllStatesArr[index]}
                                />
                                <label className="ml-1">{e.estado}</label>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}
          {Federal == "L" ? (
            <div className="border text-xs w-full p-2 rounded border-2 mt-4 ">
              {Competencia != "" ? (
                <>
                  <div className="items-center justify-center flex">
                    <h2 className="font-bold my-1.5 ">SELECCIONAR ENTIDAD</h2>
                  </div>
                  <div className="flex aling-center justify-center">
                    <select
                      onChange={(e) => onChangeEstado(e)}
                      className="w-1/2 p-2 rounded bg-blue-700 text-white"
                    >
                      <option value="1">Aguascalientes </option>
                      <option value="2">Baja California </option>
                      <option value="3">Baja California Sur </option>
                      <option value="4">Campeche </option>
                      <option value="5">Chiapas </option>
                      <option value="6">Chihuahua </option>
                      <option value="7">Coahuila </option>
                      <option value="8">Colima </option>
                      <option value="9">Ciudad de Mexico</option>
                      <option value="10">Durango </option>
                      <option value="11">Guanajuato </option>
                      <option value="12">Guerrero </option>
                      <option value="13">Hidalgo </option>
                      <option value="14">Jalisco </option>
                      <option value="15">México </option>
                      <option value="16">Michoacán </option>
                      <option value="17">Morelos </option>
                      <option value="18">Nayarit </option>
                      <option value="19">Nuevo León </option>
                      <option value="20">Oaxaca </option>
                      <option value="21">Puebla </option>
                      <option value="22">Querétaro </option>
                      <option value="23">Quintana Roo </option>
                      <option value="24">San Luis Potosí </option>
                      <option value="25">Sinaloa </option>
                      <option value="26">Sonora </option>
                      <option value="27">Tabasco </option>
                      <option value="28">Tamaulipas </option>
                      <option value="29">Tlaxcala </option>
                      <option value="30">Veracruz </option>
                      <option value="31">Yucatán </option>
                      <option value="32">Zacatecas </option>
                    </select>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          ) : (
            <></>
          )}

        <DistritosFederalesTable arrDistritos={arrDistritos} onClickEliminar={onClickEliminar} arrEstados={arrEstados}/ >
          <DistritosLocalesTable
            distritosLocales={distritosLocales}
            CandidaturaTipo={CandidaturaTipo}
          />
          {CandidaturaTipo == "AY" ? (
            <>
              <div
                id="select Distritos"
                className="border block text-xs w-full p-2 rounded border-2 mt-4"
              >
                <div className="items-center justify-center flex">
                  <h2 className="font-bold my-1.5 ">SELECCIONAR MUNICIPIOS</h2>
                </div>
                <div className="">
                  <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            Estado
                          </th>
                          <th scope="col" className="px-6 py-3">
                            ID municipio
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Municipio
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Opciones
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {arrMunicipios.map((x, index) => {
                          console.log(x);
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
                                className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                              >
                                {arrEstados[x.IDED - 1].estado}
                              </th>
                              <td className="px-4 ">{x.IDMP}</td>
                              <td className="px-4 ">{x.CABECERA_MUNICIPIO}</td>
                              <td className="px-4 flex content-center justify-center">
                                <button
                                  onClick={(e, index) =>
                                    onClickEliminarMunicipio(e, index)
                                  }
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
                <div className="grid grid-cols-2 mt-4">
                  <button className="w-24 bg-blue-700 rounded h-8 text-white ml-auto">
                    Guardar
                  </button>
                  <button
                    className="w-24 bg-blue-700 rounded h-8 text-white ml-auto"
                    onClick={(e) => onClickPreview(e)}
                  >
                    Pre view
                  </button>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
          {arrDistritos.length > 0 ? (
            <div className="grid grid-cols-2 mt-4">
              <button className="w-24 bg-blue-700 rounded h-8 text-white ml-auto">
                Guardar
              </button>
              <button
                className="w-24 bg-blue-700 rounded h-8 text-white ml-auto"
                onClick={(e) => onClickPreview(e)}
              >
                Pre view
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
      {preview == true ? (
        <PreSaveView
          onClickEliminar={onClickEliminar}
          onClickInsertDistrito={onClickInsertDistrito}
          arrDistritos={arrDistritos}
          arrDistritosEliminados={arrDistritosEliminados}
          contadorEntidadesSeleccionadas={contadorEntidadesSeleccionadas}
          arrEstados={arrEstados}
          setPreview={setPreview}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
