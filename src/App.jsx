import './App.css'
import Card from './components/Card'
import CardForm from './components/CardForm';
import Example from './components/Example';
import { useSelector } from 'react-redux';


function App() {
  const cities = useSelector((state)=> state.cities.value)

  return (
    <>
      <Example></Example>
      <CardForm></CardForm>
    
      <div className='grid grid-cols-4 gap-5'>

        {cities.map((city) => (

          <Card 
            key = {city.id}
            title= {city.name}
            isVisited= {city.isVisited}
            imgURL=  {city.imgURL}>
            {city.description}
          </Card>

        ))}
      </div>

    </>

  )
}

export default App
