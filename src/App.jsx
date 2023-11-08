import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment=()=>{
    setCount(count +1);
  }

  const decrement=()=>{
    if(count>0){
    setCount(count -1);
    }else{
      alert('Cannot decrement ')
    }
}
  return (
    <>
    <div className='container'>
    <h1>Counter :{count}</h1>
      <button onClick={increment}>Increment</button>
      <br/><br/>
      <button onClick={decrement}>Decrement</button>
      </div>
    </>
  )
}

export default App
