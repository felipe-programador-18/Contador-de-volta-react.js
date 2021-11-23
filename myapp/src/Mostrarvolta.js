import React from "react"

//read about jsx!!
//when i use jsx i need import react always!!!
const MostrarVolta = (props) => {
    return (
        <p> <span className='voltas'>{props.voltas}</span> 
         <br />
        Voltas
        </p>
    )
  }

export default MostrarVolta 