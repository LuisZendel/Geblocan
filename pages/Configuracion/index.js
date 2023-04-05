import Sidebar from "@/components/bar/Siderbar";
import { useState } from "react";
import './../Configuracion/index'
export default function Configuracion() {
  const [apartadoConfigurar, setApartado] = useState("");
  const [arrDistritos, setDistritos] = useState([]);
  const onChangeApartado = (e) => {
    setApartado(e.target.value);
  };
  const onChangeNumeroBloques = (e) => {
    console.log(e.target.value)
    NumeroBloques = e.target.value
};
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex w-full h-screen p-10 bg-white">
        <div className="bg-zinc-700 h-60 w-1/4 p-5 text-white">
          <div className="border border-2 rounded rounded-sm h-full">
            <div className="flex justify-center mt-1">
              <p>Apartado</p>
            </div>
            <div
              className="px-5"
              onChange={(e) => {
                onChangeApartado(e);
              }}
            >
              <div className="text-xs my-2">
                <input type="radio" name="Apartado" value="DF" />
                <label className="ml-2">Diputados Federales</label>
              </div>
              <div className="text-xs my-2">
                <input type="radio" name="Apartado" value="SN" />
                <label className="ml-2">Senador</label>
              </div>
              <div className="text-xs my-2">
                <input type="radio" name="Apartado" value="GOB" />
                <label className="ml-2">Gobernador</label>
              </div>
              <div className="text-xs my-2">
                <input type="radio" name="Apartado" value="DL" />
                <label className="ml-2">Diputados Locales</label>
              </div>
              <div className="text-xs my-2">
                <input type="radio" name="Apartado" value="AYUN" />
                <label className="ml-2">Ayuntamientos</label>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-zinc-700 ml-10 h-5/6 w-3/4 p-5">
          <div className="grid grid-cols-2 gap-4 h-40">
            <div className="border border-2 rounded rounded-sm h-full text-white w-1/2">
              <div>
                <div className="flex justify-center mt-1">
                  <p>Cantidad Bloques</p>
                </div>
                <div className="flex justify-center mt-1">
                  <div className="text-xs my-2">
                    <div className="flex">
                      <label className="ml-auto mr-auto">
                        Seleccdionar numero
                      </label>
                    </div>
                    <div className="flex text-sm text-left text-gray-500 ">
                      <select
                        onChange={(e) => {
                          onChangeNumeroBloques(e);
                        }}
                        value={global.config.NumeroBloques}
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
              </div>
            </div>
            <div className="border border-2 rounded rounded-sm h-full text-white w-full">
              <div className="flex justify-center mt-1">
                <p>Apartado</p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="h-full border border-2 rounded rounded-sm h-full text-white w-full">
              <div className="flex justify-center mt-1">
                <p>Asignar Distritos Default</p>
              </div>
              <div className="flex justify-center">
                <div class="relative overflow-x-auto mt-4">
                  <table class="text-sm text-left text-gray-500 dark:text-gray-400 mb-5">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" class="px-6 py-3">
                          Numero
                        </th>
                        <th className="px-14 py-3">Genero</th>
                        <th className="px-6 py-3">Agregar</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          1
                        </th>
                        <td class="px-6 py-4">
                          <select>
                            <option>Mujer</option>
                            <option>Hombre</option>
                          </select>
                        </td>
                        <td class="px-6 py-4">Laptop</td>
                      </tr>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          2
                        </th>
                        <td class="px-6 py-4">
                          <select>
                            <option>Hombre</option>
                            <option>Mujer</option>
                          </select>
                        </td>
                        <td class="px-6 py-4">Laptop</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
