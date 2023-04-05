import { useEffect, useState } from "react";
import arrEstados from "../../public/index.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "@/components/bar/Siderbar";

const Prueba = () => {

  return (
    <div className="flex">
      <Sidebar />
      <div className="grid grid-cols-2 gap-4 w-full h-screen p-10 bg-white">
        <div className=" bg-zinc-700"></div>
        <div className=" bg-zinc-700"></div>
      </div>
    </div>
  );
};

export default Prueba;
