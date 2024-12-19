import { useState } from "react"

import Header from "./components/Header"
import Userinput from "./components/UserInput"
import Results from "./components/ResultsTable"


function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })

  const inputIsValid = userInput.duration >= 1

  // 여기 좀 뭔소리인지
  // ...prevUserInput를 하는 이유가 뭐임?
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput, //이게 함수로 전달된 요소를 전부 받겠다는 의미인데 수정하는건 부분적인거임.
        [inputIdentifier]: +newValue
      }
    })
  }

  return (
    <>
    <Header />
    <Userinput userInput={userInput} onChange={handleChange} />
    {!inputIsValid && (
      <p className="center">Please enter a duration greater than zero.</p>
    )}
    {inputIsValid && <Results input={userInput} />}
    </>
  )
}

export default App
