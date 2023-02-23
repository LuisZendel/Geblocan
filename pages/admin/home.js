import DiputadosForm from "components/forms/DiputadosForm";
import Admin from "layouts/Admin.js";

export default function Home() {
    return (
      <>
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            </div>
            <DiputadosForm/>
          </div>
        </div>
      </>
    );
  }

Home.layout = Admin;
