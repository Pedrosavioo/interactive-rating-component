import React from 'react'
import DesignThank from './../images/illustration-thank-you.svg'

export default function ThankYouStatate(){
    return(
        <div>
            <div className='thankYouState container'>
                <img src={DesignThank} className='mt-2'/>
                <p className='second-text mt-1'>You selected 4 out of 5</p>
                <h2 className='mt-2'>Thank you!</h2>
                <p className='primary-text mt-1'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
            </div>
        </div>
    )
}