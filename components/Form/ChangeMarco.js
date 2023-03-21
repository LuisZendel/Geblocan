export default function ChangeMarco({
  setMarco,
  setChangeMarcoView,
  changeMarcoView,
  marco
}) {
  return (
    <>
      {changeMarcoView == true? (
        <div
          id="CONFIGURACION DE MARCO"
          className="border block text-xs w-full p-2 rounded border-2 mt-4"
        >
          <div className="items-center justify-center flex">
            SELECCIONAR MARCO:
            <div className="ml-2">
              <label>2017</label>
              <input
                type={"radio"}
                name="Marco"
                value="0"
                checked={marco == "0" ? true: false}
                onChange={() => {
                  setMarco(0);
                }}
              />
            </div>
            <div className="ml-2">
              <label>2023</label>
              <input
                type={"radio"}
                name="Marco"
                value="1"
                checked={marco == "1"? true: false}
                onChange={() => {
                  setMarco(1);
                }}
              />
            </div>
          </div>
          <button
            onClick={() => {
              setChangeMarcoView(false);
            }}
          >
            Aceptar
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
