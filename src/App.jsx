import React, { useEffect, useRef } from "react"
import useTypingGame from "../public/hooks/useTypingGame"

function App() {
      const {text, handleChange, isTimeRunning, textBoxRef, timer, gameReset, wordCount} = useTypingGame()

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
