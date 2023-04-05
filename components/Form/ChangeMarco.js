export default function ChangeMarco({
  setMarco,
  setChangeMarcoView,
  changeMarcoView,
  marco,
}) {
  return (
    <>
      {changeMarcoView == true ? (
        <div
          id="CONFIGURACION DE MARCO"
          className="border block text-xs w-full p-2  mt-4"
        >
          <div className="items-center justify-center flex">
            SELECCIONAR MARCO:
          </div>
          <div className="">
            <div className="flex ">
              <input
                type={"radio"}
                name="Marco"
                value="0"
                checked={marco == "0" ? true : false}
                className="ml-auto"
                onChange={() => {
                  setMarco(0);
                }}
              />
              <label className="mr-auto ml-2">2017</label>
            </div>
            <div className="flex">
              <input
                className="ml-auto"
                type={"radio"}
                name="Marco"
                value="1"
                checked={marco == "1" ? true : false}
                onChange={() => {
                  setMarco(1);
                }}
              />
              <label className="mr-auto ml-2">2023</label>
            </div>
          </div>
          <div className="flex">
          <button
            className="w-24 bg-blue-700 rounded h-6 text-white ml-auto mr-auto mt-1"
            onClick={() => {
              setChangeMarcoView(false);
            }}
          >
            Aceptar
          </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
