import React from "react"


//remember i used jsx i have import always!!
const MostraTime = (props) =>{
    const tempo = props.tempo
    const minuto = Math.round(tempo / 60)
    const segundo = tempo % 60
    const minutoSeg = minuto < 10 ? '0' + minuto : segundo
    const segundoStr = segundo < 10? '0' + segundo : segundo 
    return (
        <p> {`${minutoSeg}: ${segundoStr}` } <br />
      Tempo Médio por volta.
      </p>
    )
  }



export default MostraTime  