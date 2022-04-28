import React, { useState } from 'react';
import './App.css';


const App = () => {
   const [number1, setNumber1] = useState('');
   const [number2, setNumber2] = useState('');
   const [operation, setOperation] = useState('');
   const [results, setResults] = useState(0);

   const clickNumber = (valor) => {
      if (operation === "") {
         setNumber1(number1 + valor)
      } else {
         setNumber2(number2 + valor)
      }
   }
   const clickOperation = (valor) => {
      setOperation(valor)
   }
   const getResults = () => {
      switch (operation) {
         case "+":
            setResults(Number(number1) + Number(number2));
            break
         case "-":
            setResults(Number(number1) - Number(number2));  
            break
         case "*":
            setResults(Number(number1) * Number(number2));
            break
         case "/":
            setResults(Number(number1) / Number(number2));
            break
         default :
         alert('ingrese una operacion correcta')
      }
   }

   const del = ()=>{
      if(operation=== ""){
         setNumber1(number1.toString().slice(0,-1));
      }else{
         setNumber2(number2.toString().slice(0,-1));
      }
   }
   const allClear = () => {
      setNumber1('');
      setNumber2('');
      setOperation('');
      setResults('')
   }

   return (
      <div className='calculator-grid'>
         <div className='output'>
            <div className='previous-operand'>{operation ? number1 + operation : ""}</div>
            <div className='current-operand'>{results ? results : (!operation ? number1 : number2)}</div>

         </div>
         <button onClick={allClear} className='span-two'>AC</button>
         <button onClick={del}>DEL</button>
         <button onClick={() => { clickOperation("/") }}>/</button>
         <button onClick={() => { clickNumber(7) }}>7</button>
         <button onClick={() => { clickNumber(8) }}>8</button>
         <button onClick={() => { clickNumber(9) }}>9</button>
         <button onClick={() => { clickOperation("+") }}>+</button>
         <button onClick={() => { clickNumber(4) }}>4</button>
         <button onClick={() => { clickNumber(5) }}>5</button>
         <button onClick={() => { clickNumber(6) }}>6</button>
         <button onClick={() => { clickOperation("*") }}>*</button>
         <button onClick={() => { clickNumber(1) }}>1</button>
         <button onClick={() => { clickNumber(2) }}>2</button>
         <button onClick={() => { clickNumber(3) }}>3</button>
         <button onClick={() => { clickOperation("-") }}>-</button>
         <button onClick={() => { clickNumber(".") }}>.</button>
         <button onClick={() => { clickNumber(0) }}>0</button>
         <button onClick={getResults} className='span-two'>=</button>


      </div>
   )
}



export default App;