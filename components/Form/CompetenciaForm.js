export default function CompetenciaForm({
  onChangeCoalicion,
  onChangeCompetencia,
  CandidaturaTipo,
  Competencia,
  Federal,
}) {
  return (
    <>
      <div
        id="select Competencia"
        className="border block text-xs w-32 p-2 rounded border-2 ml-4"
      >
        <div className="items-center justify-center flex">
          <h2 className="font-bold my-1.5 ">COMPETENCIA</h2>
        </div>
        {CandidaturaTipo != "" ? (
          <>
            <div onChange={(e) => onChangeCompetencia(e)}>
              <input
                className="ml-2 text-sm font-medium text-gray-900 mr-2"
                value="C"
                name="competencia-radio"
                type={"radio"}
              />
              <label>COALICION</label>
              <br />
              <input
                className="ml-2 text-sm font-medium text-gray-900 mr-2 mt-1.5"
                name="competencia-radio"
                value="S"
                type={"radio"}
              />
              <label>SOLO</label>
              <br />
              {Federal == "L" ? (
                <>
                  <input
                    className="ml-2 text-sm font-medium text-gray-900 mr-2"
                    value="A"
                    name="competencia-radio"
                    type={"radio"}
                  />
                  <label>ALIANZA</label>
                </>
              ) : (
                <></>
              )}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      {Competencia == "C" ? (
        <div
          id="name Competencia"
          className="border block text-xs w-80 p-2 rounded border-2 ml-4"
        >
          <div className="items-center justify-center flex">
            <h2 className="font-bold my-1.5 ">COMPETENCIA</h2>
          </div>
          <div>
            <label className="ml-2">NOMBRE COALICION</label>
            <br />
            <input
              onChange={(e) => {
                onChangeCoalicion(e, 1);
              }}
              className="ml-2 text-sm font-medium text-gray-900 mr-2"
              type={"text"}
            />
            <br />
            <label className="ml-2">ABREVIATURA</label>
            <br />
            <input
              onChange={(e) => {
                onChangeCoalicion(e, 2);
              }}
              className="ml-2 text-sm font-medium text-gray-900 mr-2 mt-1.5"
              type={"text"}
            />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
