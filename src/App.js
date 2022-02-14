import { useState } from "react";
import "./App.css";
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function App() {
  const [display, setDisplay] = useState(0);
  const [primerNumero, setprimerNumero] = useState(0);
  const [operacion, setOperacion] = useState("");
  const aceptarOperacion = (simbolo) => {
    setprimerNumero(display);
    setDisplay(0);
    setOperacion(simbolo);
  };
  const entraNumero = (numero) => {
    setDisplay(display * 10 + numero);
  };

  const calcular = () => {
    if (operacion === "+") setDisplay(primerNumero + display);

    if (operacion === "-") setDisplay(primerNumero - display);
  };
  return (
    <div className="App">
      <div className="Calculadora">
        <>
          <div className="Display"> {display}</div>
          <div className="BotonesNumeros">
            {numeros.map((numero) => (
              <button onClick={() => entraNumero(numero)}>{numero}</button>
            ))}

            <br />
          </div>
          <div className="BotonesOperacionales">
            <button onClick={() => aceptarOperacion("+")}>+</button>
            <button onClick={() => aceptarOperacion("-")}>-</button>
          </div>
          <div className="BotonCalcular">
            <button onClick={calcular}>=</button>
          </div>
        </>
      </div>
    </div>
  );
}

export default App;
