import React from 'react';
import './App.css';
import icon from './images/icon-star.svg';

export default function App() {
  return (
    <div className='center'>
      <div className="container">
        <div className='icon'>
          <img src={icon}/>
        </div>
        <h1>How did we do?</h1>
        <p>Please let us know how we did with your support request. All feedback is appreciated 
    to help us improve our offering!</p>
        <div className='feedback'>
          <div className='nota'>1</div>
          <div className='nota'>2</div>
          <div className='nota'>3</div>
          <div className='nota'>4</div>
          <div className='nota'>5</div>
        </div>
        <div className='submit'>Submit</div>
      </div>
    </div>
  );
}