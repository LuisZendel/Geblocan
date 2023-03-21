import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

export default function BarConfiguration({
  Federal,
  Competencia,
  CandidaturaTipo,
  Coalicion,
  PPNSeleccionados,
  setBarConfig,
  setCandidaturaView,
  setCompetenciaView,
  setPPNView,
  setPPNSeleccionados,
  marco,
  setChangeMarcoView
}) {
  return (
    <div className=" p-3 border-solid border-2 mb-3 fixed top-0 left-0 right-0 bg-white ml-4 mr-4 rounded p-2">
      <div className="grid grid-cols-4 text-xs">
        <div className="flex py-1">
        <div className="mr-1 w-2">
            <FontAwesomeIcon
              icon={faCog}
              onClick={(e) => {
                setBarConfig(true);
              }}
            />
          </div>
          <div className="text-xs ml-1">ESCENARIO: </div>
          {Federal != "" ? <p className="font-bold ml-1">{Federal == "F" ? " FEDERAL " : " LOCAL "}</p> : ""}
        </div>
        <div className=" flex py-1">
        <div className="mr-1 ">
            <FontAwesomeIcon
              icon={faCog}
              onClick={(e) => {
                setCandidaturaView(true);
              }}
            />
          </div>
          <div className="">TIPO COMPETENCIA: </div>
          {CandidaturaTipo != "" ? (
            <p className="font-bold ml-1">{CandidaturaTipo == "DF" ? " DIPUTADOS FEDERALES" : "SENADOR"}</p>
          ) : (
            ""
          )}{" "}
   
        </div>
        <div className="flex py-1 ">
        <div className="mr-1">
            <FontAwesomeIcon
              icon={faCog}
              onClick={(e) => {
                setCompetenciaView(true);
              }}
            />
          </div>
          <div className="">CANDIDATURA:</div>
          {Competencia != "" ? (
            <p className="font-bold ml-1">{Competencia == "C" ? " COALICION" : " SOLO"}</p>
          ) : (
            ""
          )}
        </div>
        {Coalicion.nombre != "" ? (
          <div className="flex  ">
            <div className="">COALICION NOMBRE:</div>
            <div className="text-xs font-bold ml-1">{Coalicion.nombre}</div>
          </div>
        ) : (
          ""
        )}
        {Coalicion.Abrev != "" ? (
          <div className="flex ">
            <div className="">ABREVIATURA:</div>
            <div className="text-xs font-bold ml-1">{Coalicion.Abrev}</div>
          </div>
        ) : (
          ""
        )}
        <div className=" flex content-center py-1 ">
          <div className="mr-1">
        <FontAwesomeIcon
              icon={faCog}
              onClick={(e) => {
                setPPNSeleccionados([])
                setPPNView(true);
              }}
            />
            </div>
          <div className="">PPN SELECCIONADOS: </div>
          {PPNSeleccionados.map((e, index) => {
            return (
              <div
              className="ml-1 font-bold "
              key={index}>
                {e}
              </div>
            );
          })}
        </div>
        <div className="flex py-1">
        <div className="mr-1 w-2">
            <FontAwesomeIcon
              icon={faCog}
              onClick={(e) => {
                setChangeMarcoView(true);
              }}
            />
          </div>
          <div className="text-xs ml-1">MARCO FEDERAL: </div>
          {Federal != "" ? <p className="font-bold ml-1">{marco == 1 ? " 2023 " : "2017 "}</p> : ""}
        </div>
      </div>
    </div>
  );
}
