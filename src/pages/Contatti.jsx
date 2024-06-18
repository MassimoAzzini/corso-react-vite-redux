import Navbar from "../components/Navbar";
import useCounterProva from "../hooks/useCounterProva";

function Contatti() {

  useCounterProva()

  return (
    <>
      <Navbar></Navbar>
      <h1 className="text-3x1 font-bold">Pagina Contatti</h1>
    </>
  )
}

export default Contatti;