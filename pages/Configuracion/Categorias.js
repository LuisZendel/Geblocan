import Sidebar from "@/components/bar/Siderbar";
import { useState } from "react";
export default function Categorias() {
  const [arrSubCategorias, setSubCategorias] = useState([]);
  const onChangeSubCategorias = (e) => {
    var aux = [];
    for (var i = 0; i < e; i++) {
      aux[i] = { nombre: "Prueba" };
    }
    setSubCategorias(aux);
  };
  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-zinc-700 ml-10 w-5/6 p-5 h-5/6 mt-auto mb-auto ml-auto mr-auto text-white">
        <div className="p-4 flex">
          <h1 className="ml-auto mr-auto">Nombre de la categoria</h1>
        </div>
        <div className="grid grid-cols-2 h-3/4">
          <div className="border border-2 rounded rounded-sm w-5/6 h-3/4 mt-auto mb-auto">
            <div className="flex justify-center mt-1">
              <p>Sub Categorias</p>
            </div>
            <div className="px-5">
              <div className="flex text-sm text-left text-gray-500 mb-8 ">
                <select
                  onChange={(e) => {
                    onChangeSubCategorias(e.target.value);
                  }}
                  className="ml-auto mr-auto w-full mt-3 rounded rounded-sm"
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                </select>
              </div>
            </div>
          </div>
          <div className="border border-2 rounded rounded-sm w-5/6 ">
            <div className="flex justify-center mt-1">
              <p>Categorias </p>
            </div>
            <div className="px-5">
              <div className="grid grid-cols-2 text-xs text-white mb-8 mt-2">
                {arrSubCategorias.map((e, index) => {
                  return (
                    <div
                      key={index}
                      className="border border-2 rounded rounded-sm mx-2 px-2 my-2"
                    >
                      <div className="flex  mt-1">
                        <input type={"radio"} name={"Tipo" + index} />
                        <label>Porcentaje</label>
                      </div>
                      <div className="flex  mt-1">
                        <input type={"radio"} name={"Tipo" + index} />
                        <label>Num Distritos</label>
                      </div>
                      <div className="my-2">
                        <label>Cantidad:</label>
                        <input className="w-full text-black" type={"text "} />
                      </div>
                      <div className="my-2">
                        <label>Iniciar:</label>
                        <select
                          className="ml-auto mr-auto w-full rounded rounded-sm text-black"
                        >
                          <option value={1}>Inicio bloque</option>
                          <option value={1}>En sub anterior</option>
                        </select>{" "}
                      </div>
                      <div className="my-2">
                        <button>Guardar</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <button>Aceptar</button>
        </div>
      </div>
    </div>
  );
}
