import { useEffect } from "react";
import Bloque from "./Bloque";

export default function Configuration({
  NumeroBloques,
  onChangeNumeroBloques,
  arrCategorias,
}) {
  return (
    <div className="bg-zinc-700 ml-10 w-3/4 p-5 overflow-hidde">
      <div className="">
        <div className="border border-2 rounded rounded-sm h-full text-white w-1/2 mb-3 ml-auto mr-auto">
          <div className="">
            <div className="flex justify-center mt-2">
              <p>Cantidad Bloques</p>
            </div>
            <div className="flex justify-center mt-1">
              <div className="text-xs my-2">
                <div className="flex">
                  <label className="ml-auto mr-auto">Seleccdionar numero</label>
                </div>
                <div className="flex text-sm text-left text-gray-500 ">
                  <select
                    onChange={(e) => {
                      onChangeNumeroBloques(e);
                    }}
                    className="ml-auto mr-auto w-full mt-3 rounded rounded-sm"
                  >
                    <option value={""}>Sin elegir</option>
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
          </div>
        </div>
        <div className="border border-2 rounded rounded-sm h-full text-white w-full overflow-scroll">
          <div className="mt-1">
            <div className="flex justify-center">
              <p>Configurar Bloques</p>
            </div>
            <div className="mt-4 mx-2">
              {arrCategorias.map((e, index) => {
                return (
                  <div
                    key={index}
                    className=" flex w-full my-1  ml-auto mr-auto text-black"
                  >
                    <Bloque/>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}
