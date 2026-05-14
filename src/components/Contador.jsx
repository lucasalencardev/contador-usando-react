import { useState } from "react"
import "./Contador.css"

function Contador() {

  const [contador, setContador] = useState(0)

  function aumentar() {
    setContador(contador + 1)
  }

  function diminuir() {
    setContador(contador - 1)
  }

  return (
    <div className="container">

      <div className="card">

        <h2>Counter App</h2>

        <h1>{contador}</h1>

        <div className="botoes">

          <button onClick={diminuir}>-</button>

          <button onClick={aumentar}>+</button>

        </div>

      </div>

      <p className="copyright">
        © Lucas Alencar
      </p>

    </div>
  )
}

export default Contador