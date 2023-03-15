export default function EscenarioFL({ onChangeFederal, Federal, View }) {
  return (
    <>
      {View ? (
        <div
          id="select Escenario"
          className="border block text-xs w-32 p-2 rounded border-2"
        >
          <div className="items-center justify-center flex">
            <h2 className="font-bold my-1.5 ">ESCENARIO</h2>
          </div>
          <div onChange={(e) => onChangeFederal(e)}>
            <input
              className="ml-2 text-sm font-medium text-gray-900 mr-2"
              value="F"
              name="federal-radio"
              checked={Federal == "F" ? true : false}
              type={"radio"}
            />
            <label>FEDERAL</label>
            <br />
            <input
              className="ml-2 text-sm font-medium text-gray-900 mr-2 mt-1.5"
              name="federal-radio"
              value="L"
              checked={Federal == "L" ? true : false}
              type={"radio"}
            />
            <label>LOCAL</label>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
