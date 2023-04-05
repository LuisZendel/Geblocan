import {
  faBars,
  faSquarePlus,
  faList,
  faTable,
  faCog
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCreateScenario = () => {
    console.log("Create scenario button clicked");
  };

  const handleShowScenario = () => {
    console.log("Show scenario button clicked");
  };

  const handleAssignBlocks = () => {
    console.log("Assign blocks button clicked");
  };

  return (
    <div
      className={
        isExpanded ? "w-52 bg-zinc-700 h-screen" : "w-16 bg-zinc-700 h-screen"
      }
    >
      <div className="space-y-3 text-white ">
        <div className="flex items-center text-2xl flex py-3 ">
          <button className="font-bold mr-auto ml-auto" onClick={toggleSidebar}>
            {isExpanded == false ? <FontAwesomeIcon icon={faBars} /> : "MENU"}
          </button>
        </div>
        {isExpanded ? (
          <div className="text-xs">
            <div className="p-4 border-solid border w-3/4 py-2 rounded-lg flex content-center justify-center aling-center ml-auto mr-auto my-4 mt-10">
              <FontAwesomeIcon
                className="mt-auto mb-auto text-2xl"
                icon={faSquarePlus}
              />
              <a
                className="p-2"
                href={"http://localhost:3000/Escenario"}
                onClick={handleCreateScenario}
              >
                Crear
              </a>
            </div>
            <div className="p-4 border-solid border w-3/4 py-2 rounded-lg flex content-center justify-center aling-center ml-auto mr-auto  my-4">
              <FontAwesomeIcon
                className="mt-auto mb-auto text-2xl"
                icon={faTable}
              />
              <a
                className="p-2"
                href={"http://localhost:3000/ShowEscenario"}
                onClick={handleShowScenario}
              >
                Mostrar
              </a>
            </div>
            <div className="p-4 border-solid border w-3/4 py-2 rounded-lg flex content-center justify-center aling-center ml-auto mr-auto  my-4">
              <FontAwesomeIcon
                className="mt-auto mb-auto text-2xl"
                icon={faList}
              />
              <a
                className="p-2"
                href={"http://localhost:3000/Bloques"}
                onClick={handleAssignBlocks}
              >
                Asignar
              </a>
            </div>
            <div className="p-4 border-solid border w-3/4 py-2 rounded-lg flex content-center justify-center aling-center ml-auto mr-auto  my-4">
              <FontAwesomeIcon
                className="mt-auto mb-auto text-2xl"
                icon={faCog}
              />
              <a
                className="p-2"
                href={"http://localhost:3000/Bloques"}
                onClick={handleAssignBlocks}
              >
                Config
              </a>
            </div>
          </div>
        ) : (
          <div className=" text-xs">
            <a
               href={"http://localhost:3000/Escenario"}
               onClick={handleCreateScenario}
               className="p-4 border-solid border w-3/4 py-2 rounded-lg flex content-center justify-center aling-center ml-auto mr-auto my-4 text-2xl mt-10">
              <FontAwesomeIcon
                className="mt-auto mb-auto"
                icon={faSquarePlus}
              />
            </a>
            <a
              href={"http://localhost:3000/ShowEscenario"}
              onClick={handleShowScenario}
              className="p-4 border-solid border w-3/4 py-2 rounded-lg flex content-center justify-center aling-center ml-auto mr-auto  my-4 text-2xl"
            >
              <FontAwesomeIcon
                className="mt-auto mb-auto"
                icon={faTable}
              />
            </a>
            <a
              href={"http://localhost:3000/Bloques"}
              onClick={handleAssignBlocks}
              className="p-4 border-solid border w-3/4 py-2 rounded-lg flex content-center justify-center aling-center ml-auto mr-auto  my-4 text-2xl"
            >
              <FontAwesomeIcon
                className="mt-auto mb-auto"
                icon={faList}
              />
            </a>
            <a
              href={"/Configuracion"}
              onClick={handleAssignBlocks}
              className="p-4 border-solid border w-3/4 py-2 rounded-lg flex content-center justify-center aling-center ml-auto mr-auto  my-4 text-2xl"
            >
              <FontAwesomeIcon
                className="mt-auto mb-auto"
                icon={faCog}
              />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
