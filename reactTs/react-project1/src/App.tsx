import { ChaiCard } from './components/ChaiCard';
import {Counter } from './components/counter';
import './App.css'

function App() {

  return (
    <>
    <div>welcome to our typescript</div>
    <ChaiCard 
    name= "Smartwatch"
    price={6000}
    /> 
    <ChaiCard 
    name= "iphone"
    price={90000}
    />  
    <div>
      <Counter />
    </div>
    
    </>
  )
}
export default App;