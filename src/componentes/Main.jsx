import { useEffect, useState } from 'react'
import { Footer } from './Footer'

export const Main = () => {

    const [playerSelect, setPlayerSelect] = useState("piedra");
    const [pcSelect, setPcSelect] = useState("signo");
    const [result,setResult] = useState("ELIGIR")
    const [colorResult, setColorResult] = useState("azure")
    const options = ["piedra", "papel", "tijera"];

    const handlePlayerSelect = (event) => {
        setPlayerSelect(event.target.value)

    }


    // crear una funcion que recorra el array y elija uno al azar
    // y pasar la opcion elegida al pcSelect
    const handlePcSelect = () => {

        const selectOption = Math.floor(Math.random() * options.length)
        setPcSelect(options[selectOption])
    }

    const handleResult = () =>{


    
       if (playerSelect === pcSelect) {
        setResult("EMPATASTE"),setColorResult("yellow")}
       else if (playerSelect === "piedra" && pcSelect === "papel") { 
        setResult("PERDISTE"), setColorResult("red")}
       else if (playerSelect === "papel" && pcSelect === "tijera") { 
        setResult("PERDISTE"), setColorResult("red")}
       else if (playerSelect === "tijera" && pcSelect === "piedra") { 
        setResult("PERDISTE"), setColorResult("red")}
       
       else if (playerSelect === "piedra" && pcSelect === "tijera") { 
        setResult("GANASTE"), setColorResult("green")}
       else if (playerSelect === "papel" && pcSelect === "piedra") { 
        setResult("GANASTE"), setColorResult("green")}
       else if (playerSelect === "tijera" && pcSelect === "papel") { 
        setResult("GANASTE"), setColorResult("green")}

       
    }
  
    const play = () => {
        
        handlePcSelect()
      handleResult();
    
    }
  useEffect(() => {
    handleResult()
  }, [pcSelect])
  



    return (
        <main>
            <div className='header'><h2>Piedra Papel o Tijera</h2></div>
            <div className="card-player">
                <h4>OPCIONES JUGADOR</h4>
                <select name="" id="" onChange={handlePlayerSelect}>
                    <option value="piedra">Piedra</option>
                    <option value="papel">Papel</option>
                    <option value="tijera">Tijera</option>
                </select>
                <img src={`assets/${playerSelect}.jpg`} alt="" />
            </div>

           
                <button 
                    className="card-game"
                    onClick={play}
                >JUGAR</button>

           

            <div className="card-pc">
                <h4>OPCIONES PC</h4>

                <img src={`assets/${pcSelect}.jpg`} alt="" />

            </div>
            
            <Footer result={result}
                    color={colorResult}/>
        </main>
    )
}
