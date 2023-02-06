import React from "react"

function App() {
      const[text, setText] = React.useState("")
      const[timer, setTimer] = React.useState(10)

      function handleChange(e){
        const{value, name} = e.target
        setText(value)
      }

      function wordCount(text){
        const wordArr = text.split(" ")
        return wordArr.filter(word => word !== "").length
      }

       return(
            <div>
                <h1>How fast do you type?</h1>
                <textarea 
                  type="text"
                  name="text"
                  value={text}
                  onChange={handleChange}
                />
                <h4>Time remaining: {timer}</h4>
                <button onClick={() => wordCount(text) }>Start</button>
                <h1>Word count: ???</h1>
            </div>
        )
}

export default App
