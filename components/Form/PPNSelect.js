import { useState } from "react";

export default function PPPNSelect({
  insertPPNSeleccionados,
  arrPPN,
  arrPPNLOCALES,
  Competencia,
  PPNSeleccionados,
  setPPNView,
  CompetenciaView,
  View,
}) {
  useState(() => {}, []);
  return (
    <>
      {View ? (
        <div id="select PPN" className="block text-xs w-full px-2 py-4">
          {Competencia != "" ? (
            <>
              <div className="items-center justify-center flex">
                <h2 className="font-bold my-1.5 ">
                  SELECCIONAR PARTIDO POLITICO
                </h2>
              </div>
              <div
                className="grid grid-cols-5"
                onChange={(e) => {
                  insertPPNSeleccionados(e);
                }}
              >
                {arrPPN.map((e) => {
                  return (
                    <div key={e.Abrev} className="my-1">
                      <input
                        name="PPN"
                        type={Competencia == "S" ? "radio" : "checkbox"}
                        className="mx-1"
                        value={e.Abrev}
                      />
                      <label className="ml-1">{e.Abrev}</label>
                    </div>
                  );
                })}
                {arrPPNLOCALES.map((e) => {
                  return (
                    <div key={e.Abrev} className="my-1">
                      <input
                        value={e.Abrev}
                        name="PPN"
                        type={Competencia == "S" ? "radio" : "checkbox"}
                        className="mx-1"
                      />
                      <label className="ml-1">{e.SIGLAS}</label>
                    </div>
                  );
                })}
              </div>
              <div className="flex">
            <button
              className="w-24 bg-blue-700 rounded h-6 text-white ml-auto mr-auto mt-1"
              onClick={() => {
                setPPNView(false);
              }}
            >
              Aceptar
            </button>
          </div>
            </>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
