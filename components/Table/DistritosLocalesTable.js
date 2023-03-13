import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function DistritosLocalesTable({
  distritosLocales,
  CandidaturaTipo,
}) {
  return (
    <>
      {distritosLocales.length > 0 ? (
        <>
          <div className="rounded border-2 text-xs mt-4">
            <div className="items-center justify-center flex">
              <h2 className="font-bold my-1.5 ">DISTRITOS LOCALES</h2>
            </div>
            <div className="">
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        ID DISTRITO LOCAL
                      </th>
                      <th scope="col" className="px-6 py-3">
                        CABECERA
                      </th>
                      <th>OPCIONES</th>
                    </tr>
                  </thead>
                  <tbody>
                    {distritosLocales.map((e, index) => {
                      return (
                        <>
                          {CandidaturaTipo == "GOB" ? (
                            <tr
                              key={index}
                              className={
                                index % 2 == 0
                                  ? "bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-xs"
                                  : "bg-slate-200 border-b dark:bg-gray-800 dark:border-gray-700 text-xs"
                              }
                            >
                              <th className="align-center justify-center flex">
                                {e.IDDL}
                              </th>
                              <td className="px-4">{e.CABECERA}</td>
                              <td></td>
                            </tr>
                          ) : (
                            <tr
                              key={index}
                              className={
                                index % 2 == 0
                                  ? "bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-xs"
                                  : "bg-slate-200 border-b dark:bg-gray-800 dark:border-gray-700 text-xs"
                              }
                            >
                              <th className="align-center flex content-center justify-center">
                                {e.IDDL}
                              </th>
                              <td className="px-4">{e.CABECERA}</td>
                              <td className="flex content-center justify-center">
                                <button>
                                  <FontAwesomeIcon icon={faTrash} />
                                </button>
                              </td>
                            </tr>
                          )}
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
