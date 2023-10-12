import React from 'react';
import './App.css';
import icon from './images/icon-star.svg';

export default function App() {
  return (
    <div className="container">
      <div className='icon'>
        <img src={icon}/>
      </div>
      <h1>Como Fizemos?</h1>
      <p>Informe-nos como nos saímos com sua solicitação de suporte. Todos os comentários são apreciados
      para nos ajudar a melhorar nossa oferta!</p>
      <div className='feedback'>
        <div className='nota'>1</div>
        <div className='nota'>2</div>
        <div className='nota'>3</div>
        <div className='nota'>4</div>
        <div className='nota'>5</div>
      </div>
      <div className='submit'>Submit</div>
    </div>
  );
}