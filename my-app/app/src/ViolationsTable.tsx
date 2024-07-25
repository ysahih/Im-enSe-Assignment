import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import SubPages from "./Components/SubPages";





const ViolationsTable = () =>{

    return (
      <div className="w-full h-screen grid grid-cols-[65px_1fr] grid-rows-[60px_35px_1fr]">
        <div className="row-span-3 col-span-1">
          <Sidebar />
        </div>

        <div className="col-span-1 row-span-1 ">
          <Header />
        </div>

        <div className="col-span-1 row-span-1">
          <SubPages />
        </div>
        
        <div className="text-white col-span-1 row-span-1 bg-[#F2F2F2]">
          <p>Hello Content...</p>
      </div>
    </div>
    // <Body/>
    // <SubPages/>
    )
}

export default ViolationsTable;