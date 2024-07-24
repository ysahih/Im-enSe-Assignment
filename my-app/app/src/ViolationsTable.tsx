const Left = ()=>{
  return (
    <div className="text-black">
      <h1>Overview1</h1>
    </div>
  )
}

const Right = ()=>{
  return (
    <div className="text-black">
      <h1>Overview2</h1>
    </div>
  )
}

const Header = ()=>{
    return (
      <div className="flex items-center justify-between h-full">
        <Left/>
        <Right/>
      </div>
    )
}

const Sidebar = ()=>{
    return (
      <div className="">
            
        </div>
    );
}


const SubPages = ()=>{
    return (
      <div className="">
      </div>
    )
}

const ViolationsTable = () =>{
    return (
      <div className="w-full h-screen grid grid-cols-[65px_1fr] grid-rows-[60px_35px_1fr]">
        <div className="row-span-3 col-span-1 bg-[red]">
          <Sidebar />
        </div>

        <div className="col-span-1 row-span-1 bg-[blue]">
          <Header />
        </div>

        <div className="col-span-1 row-span-1 bg-[yellow]">
          <SubPages />
        </div>
        
        <div className="col-span-1 row-span-1 bg-[black]">
          <p>Hello Content...</p>
      </div>
    </div>
    // <Body/>
    // <SubPages/>
    )
}

export default ViolationsTable;