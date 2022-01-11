import axios from "axios";
import { useState } from "react";
import "./style.css";
function App() {
  const [a, setA] = useState(1000);

  function Inc() {
    var c = document.getElementById("text").value|0;
    console.log(typeof c);
    axios.post("http://localhost:8080/inc",c).then((res) => {
      
      setA(res.data);

    })

  }

  function Dec() {
    var d = document.getElementById("text2").value|0;
    axios.post("http://localhost:8080/dec",d).then((res) => {
     
      setA(res.data);
    })

  }
  return (
    <>
      <div className="counter">
        <input id="text" type="text" />
        <button id="first" onClick={Inc}>+</button>

        <h1>{a}</h1>
        <input id="text2" type="text" />
        <button id="second" onClick={Dec}>-</button>
      </div>
    </>
  )
}
export default App;