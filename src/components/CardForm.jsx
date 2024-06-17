import { useState, useContext } from "react";
import { ProvaContext } from "../store/ProvaContext";

function CardForm({addCity}){
  const [formData, setFormData] = useState({
    name:"",
    description:"",
    imgURL:"",
    isVisited:false,
  })

  const handleInputChange = (e) => {
    const {name, value, type, checked} = e.target;
    const inputValue = type == "checkbox" ? checked : value
    setFormData({
      ...formData,
      [name]: inputValue,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const city = {
      id: Math.random(),
      name: formData.name,
      description: formData.description,
      imgURL: formData.imgURL,
      isVisited: formData.isVisited,
    };

    setFormData({
      name:"",
      description:"",
      imgURL:"",
      isVisited:false,
    })

    addCity(city);
  };

  const {count } = useContext(ProvaContext)

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80 mb-10 bg-zinc-900 p-5 rounded-lg">
      <div className="flex flex-col">
        <label className="text-white">Nome</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </div>
      <div className="flex flex-col">
        <label className="text-white">Descrizione {count}</label>
        <textarea name="description" value={formData.description} onChange={handleInputChange}></textarea>
      </div>
      <div className="flex flex-col">
        <label className="text-white">Immagine</label>
        <input type="text" name="imgURL" value={formData.imgURL} onChange={handleInputChange} />
      </div>
      <div className="flex flex-col">
        <label className="text-white">Visitata</label>
        <input type="checkbox" name="isVisited" checked={formData.isVisited} onChange={handleInputChange} />
      </div>

      <button type="submit">Aggiungi Card</button>
    </form>
  );
}

export default CardForm;