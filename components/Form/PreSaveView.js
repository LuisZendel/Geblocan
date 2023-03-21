import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function PreSaveView({
  arrDistritos,
  arrDistritosEliminados,
  arrEstados,
  onClickEliminar,
  onClickInsertDistrito,
  setPreview,
  Competencia,
}) {
  const [serchSelect, setSerchSelect] = useState("");
  const [serchNotSelect, setSerchNotSelect] = useState("");
  const [contadorEntidadesSelect, setContador] = useState(0);
  const [contadorEntidadesNotSelect, setContadorNot] = useState(0);

  useEffect(() => {
    setContador(SearchEntidades(arrDistritos));
    setContadorNot(SearchEntidades(arrDistritosEliminados));
  }, [arrDistritos, arrDistritosEliminados]);

  const SearchEntidades = (arr) => {
    var arreglo = [];
    arreglo = [...arr];
    var contador = 0;
    for (var i = 1; i <= 32; i++) {
      for (var j = 0; j < arr.length; j++) {
        if (arreglo[j].IDED == i) {
          console.log("numero entidades");
          console.log(arreglo[j].IDED, j);
          contador++;
          break;
        }
      }
    }
    return contador;
  };
  const filter = (e) => {
    var text = e.target.value;
    setSerchSelect(text);
  };
  const filterNoSelected = (e) => {
    var text = e.target.value;
    setSerchNotSelect(text);
  };
  return (
    <div className=" bg-gray-100 rounded p-4">
      <div>
        <button
          onClick={() => {
            setPreview(false);
          }}
        >
          Regresar
        </button>
      </div>
      <div className={Competencia == "C" ? "grid grid-cols-2 " : "flex"}>
        <div className="p-4">
          <div className="text-ms font-bold">
            <h1>SELECCIONADOS</h1>
          </div>
          <div className="text-xs p-2">
            <p>NUMERO DE ENTIDADES: {contadorEntidadesSelect} </p>
          </div>
          <div className="text-xs p-2">
            <p>NUMERO DE DISTRITOS FEDERALES: {arrDistritos.length}</p>
          </div>
          <div className=" mb-2  ml-auto flex content-center ">
            <FontAwesomeIcon icon={faSearch} className="text-sm ml-auto" />
            <input
              className="rounded border-solid border-2 h-5 "
              type={"text"}
              onChange={(e) => {
                filter(e);
              }}
            />
          </div>
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
                <th>Indigena</th>
                <th scope="col" className="px-2 py-2">
                  Opciones
                </th>
              </tr>
            </thead>
            <tbody>
              {arrDistritos
                .filter((e, index) => {
                  const NOMBRE = e.NESTADO.toUpperCase();
                  const NOMBREBUSCADOR = serchSelect.toUpperCase();
                  return !NOMBRE.indexOf(NOMBREBUSCADOR);
                })
                .map((x, index) => {
                  return (
                    <tr
                      key={index}
                      className={
                        index % 2 == 0
                          ? "bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-xs"
                          : "bg-slate-200 border-b dark:bg-gray-800 dark:border-gray-700 text-xs"
                      }
                    >
                      <th
                        scope="row"
                        className="px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {arrEstados[x.IDED - 1].estado}
                      </th>
                      <td className="px-4 ">{x.IDDTOFED}</td>
                      <td className="px-4 ">{x.CABECERA}</td>
                      <td className="px-4">{x.NTIPOINDIG == 1 ? "SI" : ""}</td>
                      <td className="px-4 content-center justify-center flex">
                        <button
                          onClick={(e) => {
                            console.log("boton eliminar");
                            console.log(x.IDSAB2023);
                            var numero = x.IDSAB2023;
                            onClickEliminar(numero, index);
                          }}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        {Competencia == "C" ? (
          <div className="p-4">
            <div className="font-bold text-sm">
              <h1>NO SELECCIONADOS</h1>
            </div>
            <div className="text-xs p-2">
              <p>NUMERO DE ENTIDADES: {contadorEntidadesNotSelect} </p>
            </div>
            <div className="text-xs p-2">
              <p>NUMERO DE DISTRITOS FEDERALES: {300 - arrDistritos.length}</p>
            </div>
            <div className=" mb-2  ml-auto flex content-center ">
              <FontAwesomeIcon icon={faSearch} className="text-sm ml-auto" />
              <input
                className="rounded border-solid border-2 h-5 "
                type={"text"}
                onChange={(e) => {
                  filterNoSelected(e);
                }}
              />
            </div>
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
                  <th>Indigena</th>
                  <th scope="col" className="px-2 py-2">
                    Opciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {arrDistritosEliminados
                  .filter((e, index) => {
                    const NOMBRE = e.NESTADO.toUpperCase();
                    const NOMBREBUSCADOR = serchNotSelect.toUpperCase();
                    return !NOMBRE.indexOf(NOMBREBUSCADOR);
                  })
                  .map((x, index) => {
                    return (
                      <tr
                        key={index}
                        className={
                          index % 2 == 0
                            ? "bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-xs"
                            : "bg-slate-200 border-b dark:bg-gray-800 dark:border-gray-700 text-xs"
                        }
                      >
                        <th
                          scope="row"
                          className="px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {arrEstados[x.IDED - 1].estado}
                        </th>
                        <td className="px-4 ">{x.IDDTOFED}</td>
                        <td className="px-4 ">{x.CABECERA}</td>
                        <td className="px-4">
                          {x.NTIPOINDIG == 1 ? "SI" : ""}
                        </td>
                        <td className="px-4 content-center justify-center flex">
                          <button
                            onClick={(e, index) => {
                              onClickInsertDistrito(e, index);
                            }}
                          >
                            <FontAwesomeIcon icon={faCheck} />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
