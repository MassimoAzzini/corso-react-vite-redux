import { Link } from "react-router-dom";

function Navbar(){
  return (
    <ul className="flex gap-10 mb-10">
      <li>
        <Link to={`/`}>Home</Link>
      </li>
      <li>
        <Link to={`/contatti`}>Contatti</Link>
      </li>
      <li>
        <Link to={`/about`}>About</Link>
      </li>
      <li>
        <Link to={`/cards`}>Cards vers.1</Link>
      </li>
      <li>
        <Link to={`/cards-children`}>Cards vers.2</Link>
      </li>
    </ul>
  );
}

export default Navbar;