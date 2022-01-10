import { useState } from "react";
import "./style.css";
import axios from "axios";

function App() {
  const [a, setA] = useState("white");
  function Dark() {
    axios.get("http://localhost:8080/dark").then((res)=>{
      setA(res.data);
    })

  }
  function Dim() {
    axios.get("http://localhost:8080/dim").then((res)=>{
      setA(res.data);
    })
    

  }
  function Red() {
    axios.get("http://localhost:8080/red").then((res)=>{
      setA(res.data);
    })

    

  }
  function Light() {
    axios.get("http://localhost:8080/light").then((res)=>{
      setA(res.data);
    })


  } 
  function Night() {
    axios.get("http://localhost:8080/night").then((res)=>{
      setA(res.data);
    })

  }
  return (
    <>
      <div className={a}>
        <button onClick={Dark} id="dark">DARK</button>
        <button onClick={Dim} id="dim">DIM</button>
        <button onClick={Red} id="red">RED</button>
        <button onClick={Light} id="light">LIGHT</button>
        <button onClick={Night} id="night">NIGHT</button>


      </div>
    </>

  );
}

export default App;
