import React from "react";
import { useState } from "react";
import styled from "styled-components"
import { DashLg,PlusLg,SlashLg,Asterisk} from "react-bootstrap-icons";

function Result(props){
  return <h2>The result is {props.result}</h2>
}

const CardContainer=styled.div`
padding: 80px 20px;
width: 100%;
max-width: 489px;
border-radius:30px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: whitesmoke;
box-shadow: 5px 5px 20px 0px #FB184E;
`
const ResultContainer=styled.div`
border: 1px solid black;
margin-top: 20px;
height: 100px;
line-height: 100px;
width: 100%;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
`
const CardBoxContainer=styled.div`
position: relative;
text-align: center;
height: 304px;
width: 100%;
max-width: 311px;
`
const CardButtonContainer=styled.div`
width: 100%;
position: absolute;
bottom: 0;
display:block;
justify-content:space-between;
align-items: center;

`
const CardButtonInnerContainer=styled.div`

width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content:space-between;
`

const CalculateButton=styled.button`
height: 50px;
width: 60px;
color: white;
background-color: black;
font-size: 16px;
`
const Headingtext=styled.h1`
font-size: 40px;
font-weight: bold;
margin: 0;
`
const TextInputTag=styled.input`
width:100%;
height:50px;
margin-top: 30px;
border: 2px solid black;
font-size: 22px;
padding-left: 20px;
`
const styleColor={
  color:"white"
}
const Card=()=>{

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleOperation = (operation) => {
    const num1Value = parseFloat(num1);
    const num2Value = parseFloat(num2);
    let calculatedResult = 0;

    switch (operation) {
      case "add":
        calculatedResult = num1Value + num2Value;
        break;
      case "subtract":
        calculatedResult = num1Value - num2Value;
        break;
      case "multiply":
        calculatedResult = num1Value * num2Value;
        break;
      case "divide":
        calculatedResult = num1Value / num2Value;
        break;
      default:
        break;
    }

    setResult(calculatedResult);
    setShowResult(true);
  };

  
    return(
        <>
 <CardContainer>
        {/* ... rest of your code ... */}

    
        <CardBoxContainer>
        <Headingtext>React Calculator</Headingtext>

        <TextInputTag
          id="num1"
          type="text"
          placeholder="Num 1"
          name="numinput1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          required
        />
        <TextInputTag
          id="num2"
          type="text"
          placeholder="Num 2"
          name="numinput2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          required
        />

        <CardButtonContainer>
          <CardButtonInnerContainer>
            <CalculateButton onClick={() => handleOperation("add")}>
              <PlusLg style={styleColor} />
            </CalculateButton>
            <CalculateButton onClick={() => handleOperation("subtract")}>
              <DashLg />
            </CalculateButton>
            <CalculateButton onClick={() => handleOperation("multiply")}>
              <Asterisk />
            </CalculateButton>
            <CalculateButton onClick={() => handleOperation("divide")}>
              <SlashLg />
            </CalculateButton>
          </CardButtonInnerContainer>
        </CardButtonContainer>
      </CardBoxContainer>
      <ResultContainer id="result">
        {showResult && <Result result={`Result - ${result}`} />}
      </ResultContainer>
    </CardContainer>
  </>
    )
};

export default Card;