import { useEffect, useState } from "react";
import arrEstados from "../../public/index.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";

const Prueba = () => {
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
  const [Coalicion, setCoalicion] = useState({
    nombre: "",
    Abrev: "",
  });
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

  useEffect(()=>{
    fetch("http://localhost:3002/api/distritos/get/locales/id?id=" + 2)
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      var arr = [...arrDistritos];
      for (var i = 0; i < data.length; i++) {
        arr = [...arr, data[i]];
        console.log("Seañadio");
      }
      console.log("arreglo", arr);
      setDistritos(arr);
    });
  },[]) 

  return (
    <div className="grid grid-cols-2 bg-blue-100">
      <div className="p-4">
        <div className="text-ms font-bold">
          <h1>SELECCIONADOS</h1>
        </div>
        <div className="text-xs p-2">
          <p>CONTADOR: {arrDistritos.length}</p>
        </div>
        <table className="text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-2 py-2">
                Distrito
              </th>
              <th scope="col" className="px-2 py-2">
                Cabecera
              </th>
              <th scope="col" className="px-2 py-2">
                Opciones
              </th>
            </tr>
          </thead>
          <tbody>
            {arrDistritos.map((x, index) => {
              console.log(x);
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className=" justify-center align-center flex py-2">
                    {x.IDDL}
                  </td>
                  <td className="justify-center align-center py-2">
                    {x.CABECERA}
                  </td>
                  <td className="justify-center align-centerpy-2 flex content-center justify-cente">
                    <button
                      onClick={(e, index) => {
                        onClickEliminar(e, index);
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
      <div className="p-4">
        <div className="font-bold text-sm">
          <h1>NO SELECCIONADOS</h1>
        </div>
        <div className="text-xs p-2">
          <p>CONTADOR: {arrDistritosEliminados.length}</p>
        </div>
        <table className="text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>

              <th scope="col" className="px-2 py-2">
                Distrito
              </th>
              <th scope="col" className="px-2 py-2">
                Cabecera
              </th>
              <th scope="col" className="px-2 py-2">
                Opciones
              </th>
            </tr>
          </thead>
          <tbody>
            {arrDistritosEliminados.map((x, index) => {
              console.log(x);
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className=" justify-center align-center flex py-2">
                    {x.IDDL}
                  </td>
                  <td className="justify-center align-center py-2">
                    {x.CABECERA}
                  </td>
                  <td className="justify-center align-centerpy-2 flex content-center justify-center">
                    <button
                      onClick={(e) => {
                        onClickInsertDistrito(e, index);
                      }}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Prueba;
