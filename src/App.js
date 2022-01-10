import { useState } from "react";
import "./style.css";

function App() {
  const[a,setA]=useState("white");
  function Dark(){
    setA("divdark");

  }
  function Dim(){
    setA("divdim");
    
  }
  function Red(){
    setA("divred");
    
  }
  function Light(){
    setA("divlight");
    
  }
  function Night(){
    setA("divnight");
    
  }
  return (
    <>
    <div className={a}>
      <button onClick={Dark}id="dark">DARK</button>
      <button onClick={Dim}id="dim">DIM</button>
      <button onClick={Red}id="red">RED</button>
      <button onClick={Light}id="light">LIGHT</button>
      <button onClick={Night}id="night">NIGHT</button>
      

    </div>
    </>

  );
}

export default App;
