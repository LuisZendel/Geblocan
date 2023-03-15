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
  setPPNSeleccionados
}) {
  return (
    <div className=" p-3 border-solid border-2 mb-3 fixed top-0 left-0 right-0 bg-white ml-4 mr-4 rounded p-2">
      <div className="grid grid-cols-4 text-xs">
        <div className="flex py-1">
        <div className="mr-1">
            <FontAwesomeIcon
              icon={faCog}
              onClick={(e) => {
                setBarConfig(true);
              }}
            />
          </div>
          <div className="font-bold">ESCENARIO: </div>
          {Federal != "" ? <>{Federal == "F" ? " Federal " : " Local "}</> : ""}
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
          <div className="font-bold">TIPO COMPETENCIA: </div>
          {CandidaturaTipo != "" ? (
            <>{CandidaturaTipo == "DF" ? " Diputados Federales" : "Senador"}</>
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
          <div className="font-bold">CANDIDATURA: {" "}</div>
          {Competencia != "" ? (
            <>{Competencia == "C" ? " Coalicion" : " Solo"}</>
          ) : (
            ""
          )}
        </div>
        {Coalicion.nombre != "" ? (
          <div className="flex  ">
            <div className="font-bold">COALICION NOMBRE:</div>
            <div className="text-xs">{Coalicion.nombre}</div>
          </div>
        ) : (
          ""
        )}
        {Coalicion.Abrev != "" ? (
          <div className="flex ">
            <div className="font-bold">ABREVIATURA:</div>
            <div className="text-xs">{Coalicion.Abrev}</div>
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
          <div className="font-bold ">PPN SELECCIONADOS: </div>
          {PPNSeleccionados.map((e, index) => {
            console.log("PPNNNNNN");
            console.log(e);
            return (
              <div key={index}>
                {" "}
                {e}
                {" ,"}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
