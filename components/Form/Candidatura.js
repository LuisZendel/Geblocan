export default function Candidatura({
  onChangeCandidatura,
  Federal,
  Candidatura,
  View,
  setCandidaturaView,
}) {
  return (
    <>
      {View ? (
        <div
          id="select CandidaturaTipo"
          className="border block text-xs w-32 p-2 rounded border-2 ml-4"
        >
          <div className="items-center justify-center flex">
            <h2 className="font-bold my-1.5 ">CANDIDATURA</h2>
          </div>
          {Federal != "" ? (
            <>
              <div onChange={(e) => onChangeCandidatura(e)}>
                {Federal == "F" ? (
                  <>
                    <input
                      className="ml-2 text-xs font-medium text-gray-900 mr-2"
                      value="SF"
                      name="tipo-radio"
                      checked={Candidatura == "SF" ? true : false}
                      type={"radio"}
                    />
                    <label>SENADORES</label>
                    <br />
                    <input
                      className="ml-2 text-xs text-gray-900 mr-2"
                      checked={Candidatura == "DF" ? true : false}
                      value="DF"
                      name="tipo-radio"
                      type={"radio"}
                    />
                    <label>DIPUTADOS</label>
                    <div className="flex mt-2">
                      <button
                        className="ml-auto mr-auto bg-blue-500 rounded h-6 text-whit"
                        onClick={() => {
                          setCandidaturaView(false);
                        }}
                      >
                        Aceptar
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    {Federal == "L" ? (
                      <>
                        <input
                          className="ml-2 text-sm font-medium text-gray-900 mr-2"
                          value="GOB"
                          name="tipo-radio"
                          type={"radio"}
                        />
                        <label>GOB</label>
                        <br />
                        <input
                          className="ml-2 text-sm font-medium text-gray-900 mr-2"
                          value="DL"
                          name="tipo-radio"
                          type={"radio"}
                        />
                        <label>DIP</label>
                        <br />
                        <input
                          className="ml-2 text-sm font-medium text-gray-900 mr-2"
                          value="AY"
                          name="tipo-radio"
                          type={"radio"}
                        />
                        <label>AYUN</label>
                        <div className="flex mt-2">
                          <button
                            className="ml-auto mr-auto bg-blue-500 rounded h-6 text-whit"
                            onClick={() => {
                              setCandidaturaView(false);
                            }}
                          >
                            Aceptar
                          </button>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                )}
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
