import { useEffect, useState } from "react";
export default function BlockIndigena() {
  const [arr, setArr] = useState([]);
  const [names, setNames] = useState([]);
  const [search, setSearch] = useState("");
  const [valorMaximo, setMaximo] = useState(0);
  const [valorMinimo, setMinimo] = useState(0);
  const [blockSelection, setBlockSelection] = useState(false);
  const [expander, setExpander] = useState({
    min: 9,
    max: 19,
  });
  useEffect(() => {
    fetch("http://localhost:3002/api/block/get/indigenas")
      .then((data) => data.json())
      .then((data) => {
        setArr(data);
        console.log(data);
        var objectToInspect;
        var result = [];

        for (
          objectToInspect = data[0];
          objectToInspect !== null;
          objectToInspect = Object.getPrototypeOf(objectToInspect)
        ) {
          result = result.concat(Object.getOwnPropertyNames(objectToInspect));
        }

        for (var i = 0; i < 12; i++) {
          result.pop();
        }
        console.log("RRRRR");
        console.log(result);
        setNames(result);
      });
  }, []);
  const filter = (e) => {
    const valor = e.target.value;
    setSearch(valor);
  };
  const filterBlock = (id) => {
    console.log(id);
    if (id == 0) {
      setBlockSelection(true);
      setMaximo(3);
      setMinimo(0);
    }
    if (id == 1) {
      setBlockSelection(true);
      setMaximo(8);
      setMinimo(0);
    } else if (id == 2) {
      console.log("medio");
      setBlockSelection(true);
      setMaximo(15);
      setMinimo(8);
    } else if (id == 3) {
      setBlockSelection(true);
      setMaximo(22);
      setMinimo(15);
    } else if (id == 4) {
      setBlockSelection(false);
      setMaximo(0);
      setMinimo(0);
    }
  };
  const expanderFunction = (idf) => {
    if (idf == 1) {
      setExpander({
        min: -1,
        max: -1,
      });
    } else {
      setExpander({
        min: 9,
        max: 19,
      });
    }
  };
  return (
    <>
      <div className="flex justify-center">
        <h1>Secmetacion de Bloques Distritos Indigenas</h1>
      </div>
      <table className="">
        <thead>
          <tr>
            <th className="px-2">Bloques</th>
            <th className="px-2">Mujeres</th>
            <th className="px-2">Avance</th>
            <th className="px-2">Hombres</th>
            <th className="px-2">Avance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <button
                onClick={() => {
                  filterBlock(0);
                }}
                className="w-24 bg-red-200 rounded h-8 text-white ml-auto"
              >
                MÁS BAJO
              </button>
            </th>
            <th className="px-2 border border-solid border-2">1</th>
            <th className="px-2 border border-solid border-2">1</th>
            <th className="px-2 border border-solid border-2">1</th>
            <th className="px-2 border border-solid border-2">1</th>
          </tr>
          <tr>
            <th>
              <button
                onClick={() => {
                  filterBlock(1);
                }}
                className="w-24 bg-red-200 rounded h-8 text-white ml-auto"
              >
                BAJO
              </button>
            </th>
            <th className="px-2 border border-solid border-2">2</th>
            <th className="px-2 border border-solid border-2">0</th>
            <th className="px-2 border border-solid border-2">3</th>
            <th className="px-2 border border-solid border-2">0</th>
          </tr>
          <tr>
            <th>
              <button
                onClick={() => {
                  filterBlock(2);
                }}
                className="w-24 bg-blue-200 rounded h-8 text-white ml-auto"
              >
                MEDIO
              </button>
            </th>
            <th className="px-2 border border-solid border-2">4</th>
            <th className="px-2 border border-solid border-2">0</th>
            <th className="px-2 border border-solid border-2">3</th>
            <th className="px-2 border border-solid border-2">0</th>
          </tr>
          <tr>
            <th>
              <button
                onClick={() => {
                  filterBlock(3);
                }}
                className="w-24 bg-green-200 rounded h-8 text-white ml-auto"
              >
                ALTO
              </button>
            </th>
            <th className="px-2 border border-solid border-2">4</th>
            <th className="px-2 border border-solid border-2">0</th>
            <th className="px-2 border border-solid border-2">3</th>
            <th className="px-2 border border-solid border-2">0</th>
          </tr>
        </tbody>
      </table>
      <br/>
      <button
        onClick={() => {
          filterBlock(4);
        }}
      >
        MOSTRAR TODOS
      </button>
      <br />
      <input
        type={"text"}
        className="border border-2 border-solid"
        onChange={(e) => filter(e)}
      />
      <br/>
      <button
        onClick={() => {
          expanderFunction(1);
        }}
      >
        Expandir tabla
      </button>
      <br/>
      <button
        onClick={() => {
          expanderFunction(2);
        }}
      >
        Cortar tabla
      </button>
      <table>
        <thead>
          <tr>
            {names.map((e, index) => {
              if (index > expander.min && index < expander.max) {
              } else {
                return <th key={index}>{e}</th>;
              }
            })}
            <th>MUJER</th>
            <th>HOMBRE</th>
          </tr>
        </thead>
        <tbody className="text-xs">
          {arr
            .filter((x, index) => {
              if (blockSelection == false) {
                const NOMBRE = x.ESTADO.toUpperCase();
                const NOMBREBUSCADOR = search.toUpperCase();
                return !NOMBRE.indexOf(NOMBREBUSCADOR);
              } else {
                return index < valorMaximo - 1 && index >= valorMinimo - 1;
              }
            })
            .map((e, index2) => {
              var aux = Object.values(e);

              return (
                <tr
                  key={index2}
                  className={
                    e.NP <= 7
                      ? "bg-red-200 border-solid border border-2"
                      : e.NP <= 14
                      ? "bg-blue-200 border-solid border border-2"
                      : "bg-green-200 border-solid border border-2	"
                  }
                >
                  {aux.map((x, index1) => {
                    if (index1 > expander.min && index1 < expander.max) {
                    } else {
                      return (
                        <th
                          key={index2.toString() + index1.toString()}
                          className={() => {
                            if (index2 < 73) {
                              return "bg-red-400";
                            }
                          }}
                        >
                          {x}
                        </th>
                      );
                    }
                  })}
                  <th>
                    {e.NP == 0 ? (
                      <>
                        <p>1</p>
                      </>
                    ) : (
                      <>
                        {e.NP == 1 ? (
                          <>
                            <p>0</p>
                          </>
                        ) : (
                          <input type={"radio"} value={true} name={index2} />
                        )}{" "}
                      </>
                    )}
                  </th>{" "}
                  <th>
                    {e.NP == 1 ? (
                      <>
                        <p>1</p>
                      </>
                    ) : (
                      <>
                        {e.NP == 0 ? (
                          <>
                            <p>0</p>
                          </>
                        ) : (
                          <input type={"radio"} value={true} name={index2} />
                        )}
                      </>
                    )}
                  </th>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
