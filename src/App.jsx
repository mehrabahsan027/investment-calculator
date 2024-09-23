import React, { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  // State Lifting--- as UserInput and Results component need similar state data
  const [userInput, setUserInput] = useState({
    initialInvestment: '',
    annualInvestment: '',
    expectedReturn:'',
    duration:'1',
  });

  

  const handleChange = (identifier, newValue) => {
    setUserInput((prevValue) => {
      return {
        ...prevValue,
        [identifier]: +newValue,
      };
    });
  };

  const isUserDataValid = userInput.duration >= 1;

 

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleChange} />

      {/* {
        !isUserDataValid && <p>Please select duration greater than 0</p>
      } */}

      {
        isUserDataValid && <Results input={userInput}/>
      }



      
    </>
  );
}

export default App;
