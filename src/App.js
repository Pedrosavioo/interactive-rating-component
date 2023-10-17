import React from 'react';
import './App.css';
import Feedback from './componentes/feedback'
import ThankYouStatate from './componentes/thank-you-state';
export default function App() {
  // transformar div container em componente
  return (
    <div className='center'>
      <Feedback />
      <ThankYouStatate />
    </div>
  )
}