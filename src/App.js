import React, { useEffect, useState } from "react"

const App = () => {
  const [player, setPlayer] = useState(null)
  const [computer, setComputer] = useState(null)
  const [winner, setWinner] = useState('Start Game')

  const options = ['rock', 'paper', 'scissors']

  useEffect(()=>{
    win()
  }, [player])

  const win = () => {
    setComputer(options[Math.floor(Math.random()*3)])
    if (player === null && computer === null){
      setWinner('Start Game')
    } else if (player === computer){
        setWinner('Tie') 
    } else if (player === options[0]){
        if(computer === options[1]){
          setWinner('Computer Wins')
        } else{
          setWinner('Player Wins')
        }
    } else if (player === options[1]){
        if(computer === options[2]){
          setWinner('Computer Wins')
        } else{
          setWinner('Player Wins')
        }
    } else if (player === options[2]){
        if(computer === options[0]){
          setWinner('Computer Wins')
        } else{
          setWinner('Player Wins')
        }
      }
      setPlayer("")
  }

  return (
    <div>
      <h1>Rock, Paper, Scissors</h1>
      <div>
        <button onClick={() => setPlayer(options[0])}>Rock</button>  
        <button onClick={() => setPlayer(options[1])}>Paper</button>  
        <button onClick={() => setPlayer(options[2])}>Scissors</button>  
        <h3>{winner}</h3>
      </div>
    </div>
  )
}

export default App;
