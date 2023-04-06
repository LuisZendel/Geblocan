import { useState } from "react";
import SubCategoria from "./SubCategoria";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
export default function Bloque() {
  const [isExpanded, setExpanded] = useState(false);
  const [conGeneros, setGeneros] = useState(false);
  const [subCategoria, setSub] = useState([]);
  const changeExpanded = () => {
    var newValue = isExpanded;
    setExpanded(!newValue);
  };
  const changeSub = (e) => {
    var aux = [...subCategoria];
    if (e == 0) {
      aux.pop();
    }
    if (e == 1) {
      aux.push(aux.length + 1);
    }
    setSub(aux)
  };
  return (
    <div className="h-fit w-full px-3 px-1 bg-gray-300 px-3 rounded rounded-sm">
    <div className="flex justify-center content-center">
      <button
        onClick={() => {
          changeExpanded();
        }}
        className="w-full h-fit"
      >
        Configuracion de bloque
      </button>
      <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown } />
      </div>
      <div className={isExpanded ? "bg-white w-full text-xs ": "hidde"}>
        {isExpanded ? (
          <div className="p-2">
            <div className="block">
              <label className="my-2">Introducir Nombre</label>
              <input className=" rounded rounded-sm border border-2 ml-2" type={"text"} />
            </div>
            <div className="flex">
              <label className="mt-auto mb-auto">Agregar sub categoria</label>
              <div className=" h-full content-cente ml-2 my-2">
              <button className="h-5 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded w-5 mr-2"
                onClick={() => {
                  changeSub(1);
                }}
              >
                +
              </button>
              <button className="h-5 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded w-5"
                onClick={() => {
                  changeSub(0);
                }}
              >
                -
              </button>
              </div>
              </div>
              {subCategoria.map((e, index) => {
                return (
                  <div className="my-1" key={index}>
                    <SubCategoria index={index} />
                  </div>
                );
              })}
            <div>
              <label>Configuracioon de generos</label>
              <table></table>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
