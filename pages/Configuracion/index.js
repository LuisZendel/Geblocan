import Sidebar from "@/components/bar/Siderbar";
import Configuration from "@/components/Config/Configuration";
import { useState } from "react";
import { changeValue } from "../../settings/config";
export default function Configuracion() {
  const [apartadoConfigurar, setApartado] = useState("");
  const [seccion, setSeccion] = useState("");
  const [arrCategorias, setCategorias] = useState([]);
  const [arrDistritos, setDistritos] = useState([]);
  var NumeroBloques = require("../../settings/config");
  const onChangeApartado = (e) => {
    setApartado(e.target.value);
  };
  const onChangeSeccion = (e) => {
    setSeccion(e.target.value);
  };
  const onChangeNumeroBloques = (e) => {
    console.log(e.target.value);
    var aux = [];
    for (var i = 0; i < e.target.value; i++) {
      aux[i] = { nombre: 1 };
    }
    setCategorias(aux);
    changeValue(e.target.value);
  };
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex w-full h-screen p-10 bg-white">
        <div className=" h-5/6 w-1/4 ">
          <div className="bg-zinc-700 h-60 p-5 text-white">
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
          <div className="bg-zinc-700 h-60 mt-10 p-5 text-white">
            <div className="border border-2 rounded rounded-sm h-full">
              <div className="flex justify-center mt-1">
                <p>Seccion</p>
              </div>
              <div
                className="px-5"
                onChange={(e) => {
                  onChangeSeccion(e);
                }}
              >
                <div className="text-xs my-2">
                  <input type="radio" name="Bloques" value="C" />
                  <label className="ml-2">Coalicion</label>
                </div>
                <div className="text-xs my-2">
                  <input type="radio" name="Bloques" value="S" />
                  <label className="ml-2">Solo</label>
                </div>
                <div className="text-xs my-2">
                  <input type="radio" name="Bloques" value="I" />
                  <label className="ml-2">Indigenas</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {apartadoConfigurar == "" || seccion == "" ? (
          <div className="bg-zinc-700 ml-10 w-3/4 p-5 flex text-white text-xl font-bold justify-center ">
            <h1 className="mt-auto mb-auto">
              Para más opciones de configuraccion seleccione un apartado y una
              sección
            </h1>
          </div>
        ) : (
          <Configuration
            arrCategorias={arrCategorias}
            NumeroBloques={3}
            onChangeNumeroBloques={onChangeNumeroBloques}
          />
        )}
      </div>
    </div>
  );
}
