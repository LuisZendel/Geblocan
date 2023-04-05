import Sidebar from "@/components/bar/Siderbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLayerGroup,
  faTable,
  faChartColumn,
} from "@fortawesome/free-solid-svg-icons";
import { Navigate } from "react-dom";
export default function Home() {
  return (
    <div className="bg-slate-700 text-white flex">
      <div className="">
        <Sidebar />
      </div>
      <div>
        <div className="grid grid-cols-3 p-20 grid-cols-3 gap-3 w-full">
          <a
            className=" bg-slate-500 rounded rounded-md p-4 w-80 h-32 text-2xl"
            href="http://localhost:3000/Escenario"
          >
            <div className="flex justify-center font-bold">
              <FontAwesomeIcon icon={faLayerGroup} />
            </div>
            <div className="flex justify-center mt-4">
              <h1>Crear Escenario</h1>
            </div>
          </a>

          <a
            className=" bg-slate-500 rounded rounded-md p-4 w-80 h-32 text-2xl"
            href="http://localhost:3000/ShowEscenario"
          >
            <div className="flex justify-center font-bold">
              <FontAwesomeIcon icon={faTable} />
            </div>
            <div className="flex justify-center mt-4">
              <h1>Mostrar Escenario</h1>
            </div>
          </a>
          <a
            className=" bg-slate-500 rounded rounded-md p-4 w-80 h-32 text-2xl"
            href="http://localhost:3000/Bloques"
          >
            <div className="flex justify-center font-bold">
              <FontAwesomeIcon icon={faChartColumn} />
            </div>
            <div className="flex justify-center mt-4">
              <h1>Crear Bloques</h1>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
