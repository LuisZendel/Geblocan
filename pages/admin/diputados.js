import React from "react";

// components

// layout for page

import Administrador from "layouts/Administrador.js";
import DiputadosForm from "components/forms/DiputadosForm";

export default function DiputadosPage() {
  return (
    <>
    <div className="flex flex-wrap ">
    <br/>
    <div className="w-full p-4 mt-8">
        <DiputadosForm/>
    </div>
    </div>
    </>
  );
}

DiputadosPage.layout = Administrador;
