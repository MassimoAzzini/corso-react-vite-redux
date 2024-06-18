import Navbar from "../components/Navbar";
import CardItem from "../components/CardItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cards() {
  const cities = useSelector((state)=> state.cities.value)
  return (
    <>
      <Navbar></Navbar>
      <h1 className="text-3x1 font-bold mb-10">
        Pagina con tutte le cards con link a sottopagina
      </h1>
      <div className='grid grid-cols-4 gap-5'>

        {cities.map((city) => (
          <Link to={`/cards/${city.id}`} key={city.id}>
            <CardItem 
              title= {city.name}
              isVisited= {city.isVisited}
              imgURL=  {city.imgURL}>
              {city.description}
            </CardItem>
          </Link>
        ))}
        
      </div>
    </>
  )
}

export default Cards;