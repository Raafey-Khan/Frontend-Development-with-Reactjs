
const Custom  = () => {
  return(
    <nav>
      <div>1</div>
      <input></input>
      <div>2</div>
    </nav>
  )
}

const App = () =>{
    return (
    <div>
      <h1>
        Welcome to React
        </h1>
        <button>click</button>
        <Custom/>
        <Custom/>
        <Custom/>
        <Custom/>
        <Custom/>
        <Custom/>
        <Custom/>
        <Custom/>
      </div>
   
  )
  }


  const rootNode = document.getElementById("root");
  const root = ReactDOM.createRoot(rootNode);
  root.render(<App/>)
