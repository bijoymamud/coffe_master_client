import { useLoaderData } from 'react-router-dom';
import './App.css';
import Coffee from './components/Coffee';

function App() {
  //akhn fetch kore ana data aikhne dekhabo. toArray
  const coffees = useLoaderData();


  return (
    <div className='m-20'>

      <h1 className='text-center mb-24'>Amount of Coffee: {coffees.length}</h1>
      <div className='md:grid grid-cols-2 gap-20'>
        {
          coffees.map(coffee => <Coffee
            key={coffee._id}
            coffee={coffee}

          ></Coffee>)
        }
      </div>

    </div>
  )
}

export default App
