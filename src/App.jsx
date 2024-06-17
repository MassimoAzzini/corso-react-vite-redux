import { useState, useEffect, useReducer, useContext} from 'react'
import './App.css'
import Card from './components/Card'
import CardForm from './components/CardForm';
import Example from './components/Example';
import { ProvaContext } from './store/ProvaContext';

function handleClick(){
  alert("ciao");
}

function handleChange(e){
  console.log(e.target.value);
}

function handleSubmit(e){
  e.preventDefault();
  console.log(e);
}

function formReducer(state, action){
  switch(action.type){
    case "CHANGE_FIELD":
      return {...state, [action.field]: action.value};
    case "RESET_FORM":
      return {name: "", email: ""};
    default:
      return state;
    }
}

function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([1,2,3]);
  const [user, setUser] = useState({ name: "Alice", age : 30});
  const [data, setData] = useState([]);
  const [formState, dispatchFormState] = useReducer(formReducer, {name: "", email: ""});


  const aggiungiItem = () => {
    const nuovoItem = 4;
    setItems([...items, nuovoItem])
    console.log(items);
  }
  const updateUserName = () => {
    const updateUser ={...user, name: "Bob"};
    setUser(updateUser)
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {setData(data); console.log(data);})
  }, [count]); // cosi si lancia l'useEffect quando modifica [count], se usiamo [] lancia useEffect solo al caricamento, se non mettiamo nulla lancia useEffect a qualsiasi modifica

  // Chiamate http per ELIMINARE ad esempio un post specifico
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts/1", {
  //     method: 'DELATE',
  //   })
  //     .then((response) => response.status == 200 ? mando a scermo il messaggio "è stato eliminato" : manda l'errore che verra preso dal catch).catch (da capire come gestire l'errore)
  // }, [count]); 

  // Chiamate http aggiunta per esempio utente ad ogni modifica del count
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users", {
  //     method: 'POST',
  //     body: JSON.stringify({}),
  //     headers: {'Content-Type': 'application/json; charset=UTF-8'},
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {setData(data); console.log(data);})
  // }, [count]);

  // Chiamate http modifica per esempio un utente ad ogni modifica del count
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/users/${idutente}`, {
  //     method: 'PUT',
  //     body: JSON.stringify({}),
  //     headers: {'Content-Type': 'application/json; charset=UTF-8'},
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {setData(data); console.log(data);})
  // }, [count]);

  const handleFieldChange = (field, value) => {
    dispatchFormState({type: "CHANGE_FIELD", field, value});
  }

  const resetForm = (e) => {
    e.preventDefault();
    dispatchFormState({type: "RESET_FORM"});
  }

  const sendForm = (e) => {
    e.preventDefault();
    console.log(formState);
  }



  const [cities, setCities] = useState ([
    {
      id: 0,
      name: "Tokyo",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, voluptas. ",
      imgURL: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: true,
    },
    {
      id: 1,
      name: "New York",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, voluptas. ",
      imgURL: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: false,
    },
    {
      id: 2,
      name: "Rome",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, voluptas. ",
      imgURL: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: true,
    },
    {
      id: 3,
      name: "Paris",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, voluptas. ",
      imgURL: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: false,
    },
  ]);

  const addCity = (city) => {
    setCities([...cities, city])
  };

  return (
    <ProvaContext.Provider value={{ count, setCount}}>

      <Example cities={cities}></Example>
      <CardForm addCity={addCity}></CardForm>

      <div className='grid grid-cols-4 gap-10'>

        {cities.map((city) => (

          <Card 
            key = {city.id}
            title= {city.name}
            isVisited= {city.isVisited}
            imgURL=  {city.imgURL}>
               {city.description}
            </Card>

        ))}

        {/* {cities
          .filter((city) => city.isVisited)
          .map((city) => (

          <Card 
            key = {city.id}
            title= {city.name}
            isVisited= {city.isVisited}
            imgURL=  {city.imgURL}>
               {city.description}
            </Card>

        ))} */}

      </div>

      <div className='grid grid-cols-4 gap-10'>

        {data.map((item) => (

          <div key={item.id} className='bg-slate-400 rounded-lg p-3'>
            <p className='text-red-500 mb-1'>userid: {item.userId}</p>
            <p className='text-white text-xl font-bold mb-3'>{item.title}</p>
            <p className='text-gray-800'>{item.body}</p>
          </div>

        ))}

      </div>

      {/* <div className="card">
        <button className='m-2' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button className='m-2' onClick={aggiungiItem}>
          prova
        </button>

        <button className='m-2' onClick={handleClick}>
          alert
        </button>

        <input className='m-2' type='text' onChange={handleChange}/>

        <form onSubmit={handleSubmit}>
          <button className='m-2' type='submit'>invia</button>
        </form>
      </div> */}

      <form className='flex flex-col gap-3 w-80 mt-10'>
        <div>
          <label className='text-white' htmlFor="name">Nome:</label>
          <input 
            type="text"
            id='name'
            name='name'
            value={formState.name}
            onChange={(e) => handleFieldChange("name", e.target.value)}
          />
        </div>
        <div>
          <label className='text-white' htmlFor="email">Email:</label>
          <input 
            type="email"
            id='email'
            name='email'
            value={formState.email}
            onChange={(e) => handleFieldChange("email", e.target.value)}
          />
        </div>
        <button onClick={resetForm}>Reset</button>
        <button onClick={sendForm}>Invia</button>
      </form>

    </ProvaContext.Provider>
  )
}

export default App
