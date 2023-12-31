// comando 'rfc' para criar component
import React from 'react'
import Icon from './../images/icon-star.svg'

export default function feedback() {
  return (
      <div className="home container">
        <div className='icon'>
          <img src={Icon}/>
          </div>
          <h1 className='mt-2'>How did we do?</h1>
          <p className='primary-text mt-1'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          <div className='feedback mt-2'>
            <div className='nota'>1</div>
            <div className='nota'>2</div>
            <div className='nota'>3</div>
            <div className='nota'>4</div>
            <div className='nota'>5</div>
          </div>
          <div className='submit mt-2' id='btn'>Submit</div>
      </div>
  )
}