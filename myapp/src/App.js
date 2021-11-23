import React, {useState, useEffect} from "react";
import './style.css'
import MostrarVolta from "./Mostrarvolta";
import MostraTime from "./Mostrartempo";
import Button from "./button";


function App() {
  // part of number voltas and usestate
  const [NumerVolta, setNumerovol] = useState(0)
  const [running, setRun] = useState(false)
  const [tempo, setTempo] = useState(0)
  
  //read about useEffect!!!!
  useEffect(() => {
    let timer = null
    if(running){
     timer = setInterval(() => {
      setTempo(old => old + 1)
     }, 1000);
    }
    return () =>{
      if(timer){ //if for truthy value that is convert to true
      clearInterval(timer)
      }
    }
  }, [running])

  const ToggleRun = () =>{
    setRun(!running)
  }

  
  
  //this part of increment and decrement steps!!
  const increment = () => {
    setNumerovol(NumerVolta+1) 
  }
  const decrement = () =>{
    setNumerovol(NumerVolta-1)
  }
  
  const reset = () =>{
    setNumerovol(0)
    setTempo(0)
  }

  return (
    <div>
   <MostrarVolta voltas= {NumerVolta}/>
   <Button text='+' className='big' onClick={increment} />
   <Button text='-' className='morebig' onClick={decrement} />

   {
     NumerVolta > 0 &&
    <MostraTime tempo={Math.round(tempo/NumerVolta)}/> 
  }

  <Button onClick={ToggleRun} text='Iniciar' />
  <Button onClick={reset} text='Reiniciar'/>
  
     
    </div>




  )

}

export default App
