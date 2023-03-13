export default function PPPNSelect({
  insertPPNSeleccionados,
  arrPPN,
  arrPPNLOCALES,
  Competencia,
}) {
  return (
    <div
      id="select PPN"
      className="border block text-xs w-full p-2 rounded border-2 mt-4"
    >
      {Competencia != "" ? (
        <>
          <div className="items-center justify-center flex">
            <h2 className="font-bold my-1.5 ">SELECCIONAR PARTIDO POLITICO</h2>
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
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
