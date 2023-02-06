import React, { useEffect, useRef } from "react"

function App() {
      const STARTING_TIME = 8

      const[text, setText] = React.useState("")
      const[timer, setTimer] = React.useState(STARTING_TIME)
      const[isTimeRunning, setIsTimeRunning] = React.useState(false)
      const[wordCount, setWordCount] = React.useState(0)
      const textBoxRef = useRef(null)

      function handleChange(e){
        const{value, name} = e.target
        setText(value)
      }

      function calculateWordCount(text){
        const wordArr = text.split(" ")
        return wordArr.filter(word => word !== "").length
      }

      function gameReset(){
        setTimer(STARTING_TIME)
        setText("")
        setIsTimeRunning(true)
        textBoxRef.current.disabled = false
        textBoxRef.current.focus()
      }

      useEffect(() => {
        if(isTimeRunning && timer > 0){
          setTimeout(() => {
              setTimer(time => time - 1)
            }, 1000)
          } else if(timer === 0){
            setIsTimeRunning(false)
            setWordCount(calculateWordCount(text))
          }

      }, [timer, isTimeRunning])

       return(
            <div>
                <h1>How fast do you type?</h1>
                <textarea 
                  type="text"
                  name="text"
                  value={text}
                  onChange={handleChange}
                  disabled={!isTimeRunning}
                  ref={textBoxRef}
                />
                <h4>Time remaining: {timer}</h4>
                <button onClick={gameReset} disabled={isTimeRunning}>Start</button>
                <h1>Word count: {wordCount}</h1>
            </div>
        )
}

export default App
