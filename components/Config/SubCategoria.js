import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
export default function SubCategoria({ index }) {
  const [hasSub, setSub] = useState(false);
  const [cantidadSub, setCantidadSub] = useState([]);
  const [isExpanded, setExpanded] = useState(true);
  const [nombreCategoria, setNombre] = useState("")
  const clickExpanded = () => {
    var aux = isExpanded;
    setExpanded(!aux);
  };
  const changeSub = (e) => {
    var aux = [...cantidadSub];
    if (e == 0) {
      aux.pop();
    }
    if (e == 1) {
      aux.push(aux.length + 1);
    }
    setCantidadSub(aux);
  };
  return (
    <div className="w-fit bg-gray-800 text-white rouded rounded-md">
      {isExpanded ? (
        <button
          className="flex w-full h-full p-2"
          onClick={() => {
            clickExpanded();
          }}
        >
          <p className="mx-2">Seleccione para configurar </p>
          <FontAwesomeIcon
            className="ml-auto"
            icon={isExpanded ? faChevronDown : faChevronUp}
          />
        </button>
      ) : (
        <div className="w-full h-ful">
          <button
            className="flex w-full h-full p-2"
            onClick={() => {
              clickExpanded();
            }}
          >
            <p className="mx-2">Seleccione para configurar </p>
            <FontAwesomeIcon icon={isExpanded ? faChevronDown : faChevronUp} />
          </button>
          <div className="p-3">
            <div className="text-xs my-1 border border-2 p-2">
              <label>Introducir Nombre:</label>
              <input className="ml-2 rouded rounded-sm" type={"text"} />
            </div>
            <div className="block border border-2 p-2">
              <label>
                Introducir cantidad de distritos pertenecientes a la
                subcategoria
              </label>
              <div className="px-3 ">
                <div className="flex my-1">
                  <input type={"radio"} name={"cantidad" + index} />
                  <label className="mx-1">Porcentaje</label>
                  <input type={"radio"} name={"cantidad" + index} />
                  <label className="mx-1">Cantidad</label>
                </div>
                <input
                  className="rounded rounded-sm my-1 w-1/2"
                  type={"text"}
                />
              </div>
            </div>
            <div className="block border border-2 p-2 my-1">
              <label>Tomar de:</label>
              <select className="ml-2">
                <option>Al inicio del bloque</option>
                <option>Al centro del bloque</option>
                <option>Al final del bloque</option>
                <option>Al inicio de la sub categoria anterior</option>
                <option>Al final de la sub categoria anterior</option>
                <option>Al terminar la sub categoria anterior</option>
              </select>
            </div>
            <div className="block border border-2 p-2 my-1">
              <div className="flex bg-white rounded rounded-sm h-fit px-1 py-2 ">
                <label className="mt-auto mb-auto text-black text-xs">
                  Agregar sub categoria
                </label>
                <div className=" h-full content-cente ml-2">
                  <button
                    className="h-5 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded w-5 mr-2"
                    onClick={() => {
                      changeSub(1);
                    }}
                  >
                    +
                  </button>
                  <button
                    className="h-5 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded w-5"
                    onClick={() => {
                      changeSub(0);
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
              {hasSub ? (
                <>
                  {cantidadSub.map((e, index) => {
                    return(
                        <div className="" key={index}>
                    <SubCategoria />
                    </div>
                  )
                  })}
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
