export default function DiputadosForm(){
    return(
        <>
            <div className="relative w-full rounded h-600-px mt-28 bg-white p-3">
                <div className="">Hola</div>
                <p>Insertar registro </p>
                <div class="w-full">
    <div className="relative">
       <div className="mb-3 pt-0">
        <div className="flex">
        <div className="mr-1">
        <label>Apellido Paterno</label>
        <input placeholder="Select color" type="text" className="border-blueGray-300 px-3 py-2 text-sm  w-full placeholder-blueGray-200 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-lightBlue-500  focus:border-lightBlue-500 border border-solid transition duration-200 " />
        </div>
        <div className="ml-1">
        <label>Apellido Materno</label>
        <input placeholder="Select color" type="text" className="border-blueGray-300 px-3 py-2 text-sm  w-full placeholder-blueGray-200 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-lightBlue-500  focus:border-lightBlue-500 border border-solid transition duration-200 " />
        </div>
        </div>
        <label>Nombre (S)</label>
        <br/>
        <input placeholder="Select color" type="text" className="border-blueGray-300 px-3 py-2 text-sm  w-1/2 placeholder-blueGray-200 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-lightBlue-500  focus:border-lightBlue-500 border border-solid transition duration-200 " />
        </div>
        <div className="block">
            <label>Fecha de Nacimiento</label>
            <br/>
            <input type="date" min="2018-01-01" max="2018-12-31" />
        </div>
    </div>
 </div>

                
            </div>
        </>
    )
}