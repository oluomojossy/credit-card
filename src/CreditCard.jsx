import React, { useState } from 'react'
import './App.css'

const creditCard = () => {

  const [cardName, setCardName]=useState("your cardName")
  const[cardNumber, setCardNumber]=useState("0000 0000 0000 0000")
  const [date, setDate]=useState("01/01")
  const [cvc, setCvc]=useState("123")

 

  return (
    <div className='body'>
     <div className="gradient"></div>
     <div className="whitespace"></div>
<div className="cardholder">
  <div className="cardDiv">
    <div className="fontcard">
      <div className="circleDiv">
        <div className="firstcircle"></div>
        <div className="secondcircle"></div>
      </div>
      <p className='number'>{cardNumber}</p>
      <div className="name-dateDiv">
        <p>{cardName}</p>
        <p>{date}</p>
      </div>
    </div>
<div className="backcardDiv">
<div className="backcard">
  <div className="black"></div>
  <div className="cvc">
    <p>{cvc}</p>
  </div>
  <p className='writeup'>Ashogbon Joseph is the real owner of this credit card and I live on the lagos mainland</p>
</div>
</div>
  </div>
  <div className="form">
    <div className="cardName">
    <label htmlFor='card-name'>CARDHOLDER NAME</label>
    <input type='text'
    name='card-name'
    id='card-name'
    placeholder='e.g Ashogbon Joseph'
    required
    value={cardName}
    onChange={(e)=> setCardName(e.target.value)}
    />
    </div>

    <div className="card-number">.
    <label htmlFor='card-number'>CARD Number</label>
    <input type='number'
    name='card-number'
    id='card-number'
    placeholder='e.g 0123 2321 1235 1235'
    required
    maxLength={19}
    value={cardNumber}
    // .replace(/\s/g, "")
    // .replace(/(\d{4})/g, "$1 ")
    // .trim()}
    onChange={(e)=>setCardNumber(e.target.value)}
    />
    </div>

   <div className="exp-cvcDiv">
   <div className="exp-date">
    <label htmlFor='exp-date'>EXP.DATE (MM/YY)</label>
    <input type='month'
    name='exp-date'
    id='exp-date'
    placeholder='MM YY'
    required
    value={date}
    onChange={(e)=>setDate(e.target.value)}
    />
    </div>

    <div className="c-v-c">
    <label htmlFor='cvc'>CVC</label>
    <input type='number'
    name='cvc'
    id='cvc'
    placeholder='e.g. 123'
    required
    maxLength={3}
    value={cvc}
    onChange={(e)=>setCvc(e.target.value)}
    />
    </div>
   </div>
<button>Confirm</button>
  </div>
</div>


    </div>
  )
}

export default creditCard