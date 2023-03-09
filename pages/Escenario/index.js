import { useEffect, useState } from "react";
import arrEstados from "../../public/index.json";
export default function Home() {
  const [Federal, setFederal] = useState("");
  const [CandidaturaTipo, setCandidatura] = useState("");
  const [Competencia, setCompetencia] = useState("");
  const [arrPPN, setPPN] = useState([]);
  const [arrDistritos, setDistritos] = useState([]);
  const [preview, setPreview] = useState(true);
  const [Coalicion, setCoalicion] = useState({
    nombre: "",
    Abrev: "",
  });

  const onChangeFederal = (e) => {
    const newValue = e.target.value;
    console.log(e.target.value);
    setFederal(newValue);
    console.log(Federal);
  };
  const onChangeCandidatura = (e) => {
    setCandidatura(e.target.value);
  };
  const onChangeCompetencia = (e) => {
    setCompetencia(e.target.value);
  };
  const onChangeCoalicion = (e, i) => {
    if (i == 1) {
      const coal = {
        nombre: e.target.value,
        Abrev: Coalicion.Abrev,
      };
      setCoalicion(coal);
    }
    if (i == 2) {
      const coal = {
        nombre: Coalicion.nombre,
        Abrev: e.target.value,
      };
      setCoalicion(coal);
    }
  };

  const getPPN = () => {
    fetch("http://localhost:3002/api/ppn/get")
      .then((data) => data.json())
      .then((data) => setPPN(data));
  };
  const onClickEstado = (index) => {
    const id = index + 1;
    fetch("http://localhost:3002/api/distritos/get/id?id=" + id)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        var arr = [...arrDistritos];
        for (var i = 0; i < data.length; i++) {
          arr = [...arr, data[i]];
          console.log("Seañadio");
        }
        console.log("arreglo", arr);
        setDistritos(arr);
      });
  };
  useEffect(() => {
    getPPN();
  }, [arrDistritos]);
  return (
    <div className="w-full h-full p-4 bg-zinc-700">
      <div className="w-full h-full bg-gray-100 rounded p-4">
        <div className="flex">
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
                type={"radio"}
              />
              <label>FEDERAL</label>
              <br />
              <input
                className="ml-2 text-sm font-medium text-gray-900 mr-2 mt-1.5"
                name="federal-radio"
                value="L"
                type={"radio"}
              />
              <label>LOCAL</label>
            </div>
          </div>
          <div
            id="select CandidaturaTipo"
            className="border block text-xs w-32 p-2 rounded border-2 ml-2"
          >
            <div className="items-center justify-center flex">
              <h2 className="font-bold my-1.5 ">CANDIDATURA</h2>
            </div>
            <div onChange={(e) => onChangeCandidatura(e)}>
              {Federal == "F" ? (
                <>
                  <input
                    className="ml-2 text-xs font-medium text-gray-900 mr-2"
                    value="SF"
                    name="tipo-radio"
                    type={"radio"}
                  />
                  <label>SENADORES</label>
                  <br />
                  <input
                    className="ml-2 text-xs text-gray-900 mr-2"
                    value="DF"
                    name="tipo-radio"
                    type={"radio"}
                  />
                  <label>DIPUTADOS</label>
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
                      <br />
                    </>
                  ) : (
                    <></>
                  )}
                </>
              )}
            </div>
          </div>
          <div
            id="select Competencia"
            className="border block text-xs w-32 p-2 rounded border-2 ml-4"
          >
            <div className="items-center justify-center flex">
              <h2 className="font-bold my-1.5 ">COMPETENCIA</h2>
            </div>
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
              <input
                className="ml-2 text-sm font-medium text-gray-900 mr-2"
                value="A"
                name="competencia-radio"
                type={"radio"}
              />
              <label>ALIANZA</label>
            </div>
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
        </div>
        <div
          id="select PPN"
          className="border block text-xs w-full p-2 rounded border-2 mt-4"
        >
          <div className="items-center justify-center flex">
            <h2 className="font-bold my-1.5 ">SELECCIONAR PARTIDO POLITICO</h2>
          </div>
          <div className="grid grid-cols-5">
            {arrPPN.map((e) => {
              return (
                <div key={e.Abrev} className="my-1">
                  <input type="checkbox" className="mx-1" />
                  <label className="ml-1">{e.Abrev}</label>
                </div>
              );
            })}
          </div>
        </div>
        <div
          id="select Estados"
          className="border block text-xs w-full p-2 rounded border-2 mt-4"
        >
          <div className="items-center justify-center flex">
            <h2 className="font-bold my-1.5 ">SELECCIONAR ESTADOS</h2>
          </div>
          <div className="grid grid-cols-5">
            {arrEstados.map((e, index) => {
              return (
                <div key={e.estado} className="my-1">
                  <input
                    onClick={(e) => onClickEstado(index)}
                    type="checkbox"
                    className="mx-1"
                  />
                  <label className="ml-1">{e.estado}</label>
                </div>
              );
            })}
          </div>
        </div>
        <div
          id="select Distritos"
          className="border block text-xs w-full p-2 rounded border-2 mt-4"
        >
          <div className="items-center justify-center flex">
            <h2 className="font-bold my-1.5 ">SELECCIONAR DISTRITOS</h2>
          </div>
          <div className="">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Estado
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Distrito
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Cabecera
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Opciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {arrDistritos.map((x, index) => {
                    console.log(x);
                    return (
                      <tr
                        key={index}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-xs"
                      >
                        <th
                          scope="row"
                          className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {arrEstados[x.IDED - 1].estado}
                        </th>
                        <td className="px-4 ">{x.IDDTOFED}</td>
                        <td className="px-4 ">{x.CABECERA}</td>
                        <td className="px-4 "></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="grid grid-cols-2 mt-4">
                <button className="w-24 bg-blue-700 rounded h-8 text-white ml-auto">
                  Guardar
                </button>
                <button className="w-24 bg-blue-700 rounded h-8 text-white ml-auto">
                  Pre view
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {preview ? (
        <div className="grid grid-cols-2 bg-blue-100">
          <div className="p-4">
            <h1>SELECCIONADOS</h1>
            <table className="text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-2 py-2">
                    Estado
                  </th>
                  <th scope="col" className="px-2 py-2">
                    Distrito
                  </th>
                  <th scope="col" className="px-2 py-2">
                    Cabecera
                  </th>
                  <th scope="col" className="px-2 py-2">
                    Opciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {arrDistritos.map((x, index) => {
                  console.log(x);
                  return (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="justify-center align-center px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {arrEstados[x.IDED - 1].estado}
                      </th>
                      <td className=" justify-center align-center flex py-2">
                        {x.IDDTOFED}
                      </td>
                      <td className="justify-center align-center py-2">
                        {x.CABECERA}
                      </td>
                      <td className="justify-center align-centerpy-2"></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="p-4">
            <h1>NO SELECCIONADOS</h1>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
