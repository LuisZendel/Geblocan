import { useEffect, useState } from "react";

export default function SelectEstados({
  PPNSeleccionados,
  num,
  onClickCheckAllStates,
  onClickEstado,
  arrEstados,
  checkAllStates,
  setMarco,
  setChangeMarcoView,
  changeMarcoView
}) {
  const [newArr, setArr] = useState([]);
  useEffect(() => {
    var arr = [];
    var newvalue = checkAllStates;
    for (var i = 0; i < 33; i++) {
      arr[i] = newvalue;
    }
    console.log("ARREGLO TRUE");
    console.log(arr);
    setArr(arr);
  }, [checkAllStates]);

  const chengeValueArr = (index) => {
    var arr = [];
    arr = [...newArr];
    const newvalue = !newArr[index];
    arr[index] = newvalue;
    setArr(arr);
  };

  return (
    <>
      {PPNSeleccionados.length > num ? (
        <>
          <div
            id="select Estados"
            className="border block text-xs w-full p-2 rounded border-2 mt-4"
          >
              <>
                <div className="items-center justify-center flex">
                  <h2 className="font-bold my-1.5 ">SELECCIONAR ESTADOS</h2>
                  <div className="text-xs ml-auto">
                    <label className="mr-2">SELECCIONAR TODOS:</label>
                    <input
                      type={"checkbox"}
                      name="selctAllStates"
                      value={checkAllStates}
                      onClick={() => {
                        onClickCheckAllStates();
                      }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-5">
                  {arrEstados.map((e, index) => {
                    return (
                      <div key={e.estado} className="my-1">
                        <input
                          onClick={(e) => {
                            onClickEstado(e, index);
                            chengeValueArr(index);
                          }}
                          type="checkbox"
                          className="mx-1"
                          checked={newArr[index]}
                        />
                        <label className="ml-1">{e.estado}</label>
                      </div>
                    );
                  })}
                </div>
              </>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
