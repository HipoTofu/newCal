import React from 'react';
import { useState } from "react";
import './App.css';
import reactLogo from "./wow.png";


function CalcButton({label, onClick, buttonClassName = "CalcButton"}) {
  return (
    <button className={buttonClassName} onClick ={onClick}>
      {label}
    </button>
  );
}

function CalcDisplay({display}) {
  return (
    <div className="CalcDisplay">
      {display}
    </div>    
  );
}

export default function App() {
  let total = 0;

  const[disp, setDisp] = useState(0);
  const[num1, setNum1] = useState(null);
  const[oper, setOper] = useState(null);
  const[num2, setNum2] = useState(null);


  const numberClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    var num = value;
    if(oper === null) {
      if(num1 !== null) {
        num = num1 + num;
      }
      setNum1(num);            
      setDisp(num);            
    } else {
      if(num2 !== null) {
        num = num2 + num;
      }
      setNum2(num);            
      setDisp(num);       }
  }

  const operatorClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setOper(value);
    setDisp(value);
  }

  const equalClickHandler = (e) => {
    e.preventDefault();

    if (oper === "+") {
      total = parseFloat(num1) + parseFloat(num2);
      setDisp(parseFloat(num1) + parseFloat(num2));
    } 
    else if (oper === "-"){
      total = parseFloat(num1) - parseFloat(num2);
      setDisp(parseFloat(num1) - parseFloat(num2));
    }
    else if (oper === "*"){
      total = parseFloat(num1) * parseFloat(num2);
      setDisp(parseFloat(num1) * parseFloat(num2));
    }
    else if (oper === "÷"){
      total = parseFloat(num1) / parseFloat(num2);
      setDisp(parseFloat(num1) / parseFloat(num2));
    }
    else if (oper === "^"){
      total = parseFloat(num1) ** parseFloat(num2);
      setDisp(parseFloat(num1) ** parseFloat(num2));
    }
    else if (oper === "%"){
      total = parseFloat(num1) % parseFloat(num2);
      setDisp(parseFloat(num1) % parseFloat(num2));
    }
    else {
      setDisp("ERROR");
    }
  setNum1(total);
  setOper(null);
  setNum2(null);
  }

  const clearClickHandler = (e) => {
    e.preventDefault();

    setDisp(0);
    setNum1(null);
    setOper(null);
    setNum2(null);
  }

  const plusMinusClick = (e) => {
    e.preventDefault();
    
    total = parseFloat(num1) - parseFloat(num1 * 2);
    setDisp(total);
    setNum1(total);
  }


  const nameClickHandler = (e) => {
    e.preventDefault();
    // Action to display your name
    setDisp("Jhon Lee S. Reyes")
    setNum1(null);
    setOper(null);
    setNum2(null);
  }

  return (
    <div className="App">
      <div className="CalcContainer">
        <h1>Calculator of Jhon Lee Reyes <br></br>CPE 3-A</h1>
        <CalcDisplay display={disp} />
        <div className="ButtonContainer">
          <CalcButton label={"^"} onClick={operatorClickHandler}/>
          <CalcButton label={"%"} onClick={operatorClickHandler}/>
          <CalcButton label={"±"} onClick={plusMinusClick}/>
          <CalcButton label={"÷"} onClick={operatorClickHandler}/>



          <CalcButton label={1} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={2} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={3} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={"*"} onClick={operatorClickHandler}/>

          <CalcButton label={4} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={5} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={6} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={"+"} onClick={operatorClickHandler}/>

          <CalcButton label={7} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={8} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={9} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={"-"} onClick={operatorClickHandler} />

          <CalcButton label={"C"} onClick={clearClickHandler}/>
          <CalcButton label={0} onClick={numberClickHandler}buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={"."} onClick={numberClickHandler}buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={"="} onClick={equalClickHandler}/>

        </div>
        <div className="Name">
          <img width={"300px"} src={reactLogo} alt="react logo" className="dubu"/>
          <CalcButton label={"REYES"} onClick={nameClickHandler} buttonClassName={"CalcButtonName"}/>
        </div>

      </div>
    </div>
  );
}
