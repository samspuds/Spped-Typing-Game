import { useState useEffect, useRef} from "react"

function useTypingGame(){

    const STARTING_TIME = 8
    
    const[text, setText] = useState("")
    const[timer, setTimer] = useState(STARTING_TIME)
    const[isTimeRunning, setIsTimeRunning] = useState(false)
    const[wordCount, setWordCount] = useState(0)
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

    return {text, handleChange, isTimeRunning, textBoxRef, timer, gameReset, wordCount}
}

export default useTypingGame