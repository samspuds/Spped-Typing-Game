import React from "react"

function App() {
      const[text, setText] = React.useState("")
      function handleChange(e){
        const{value, name} = e.target
        setText(value)
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
                <h4>Time remaining: ???</h4>
                <button>Start</button>
                <h1>Word count: ???</h1>
            </div>
        )
}

export default App
