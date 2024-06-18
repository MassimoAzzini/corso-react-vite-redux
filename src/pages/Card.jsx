import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Card () {
  const { cardID } = useParams();
  console.log(cardID);

  const cities = useSelector((state) => state.cities.value.filter((city) => city.id == cardID.toString()))
  console.log(cities);

  return (
    <>
      <Navbar></Navbar>

      <h1 className="text-3x1 font-bold">{ cities[0].name }</h1>

      <div className="flex flex-col p-4">
        {cities[0].isVisited ? <span className="text-green-500">visitata</span> 
                            : <span className="text-red-500">non visitata</span>}
      </div>

      <img
        src={ cities[0].imgURL }
        alt="" 
        width="400" />

    </>
    );

}

export default Card;