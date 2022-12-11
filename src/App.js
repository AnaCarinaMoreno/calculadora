import React from 'react'
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import './App.css';
import BotonClear from './components/BotonClear';
import { useState } from 'react';
import {evaluate} from 'mathjs';

function App() {
    const [input, setInput] = useState('');

    const adicionarInput = val =>{
      setInput(input + val)

    };

    const calcular = () => {
      if (input){
        setInput(evaluate(input))
      }
       else {
        alert('Por favor ingrese valores pra realizar los cálculos')
       }

    }

  return (
    <div className="App">
       <div className = "cont-calculadora">
         <Pantalla input= {input} />
         <div className = "fila">
          <Boton manejarClick = {adicionarInput}>1</Boton>
          <Boton manejarClick = {adicionarInput}>2</Boton>
          <Boton manejarClick = {adicionarInput}>3</Boton>
          <Boton manejarClick = {adicionarInput}>+</Boton>
         </div>
         <div className = "fila">
          <Boton manejarClick = {adicionarInput}>4</Boton>
          <Boton manejarClick = {adicionarInput}>5</Boton>
          <Boton manejarClick = {adicionarInput}>6</Boton>
          <Boton manejarClick = {adicionarInput}>-</Boton>
         </div>
         <div className = "fila">
          <Boton manejarClick = {adicionarInput}>7</Boton>
          <Boton manejarClick = {adicionarInput}>8</Boton>
          <Boton manejarClick = {adicionarInput}>9</Boton>
          <Boton manejarClick = {adicionarInput}>*</Boton>
         </div>
         <div className = "fila">
          <Boton manejarClick = {calcular}>=</Boton>
          <Boton manejarClick = {adicionarInput}>0</Boton>
          <Boton manejarClick = {adicionarInput}>.</Boton>
          <Boton manejarClick = {adicionarInput}>/</Boton>
         </div>
         <div className = "fila">
            <BotonClear manejarClear = {() => setInput('')}>
              Clear
            </BotonClear>
         </div>


       </div>
    </div>
  );
}

export default App;
