import React, { useState } from 'react';
import './App.css';

const CreditCardII = () => {
  const [cardName, setCardName] = useState('Your Cardholder Name');
  const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000');
  const [date, setDate] = useState('01/01');
  const [cvc, setCvc] = useState('123');

  const [nameError, setNameError] = useState('');
  const [numberError, setNumberError] = useState('');
  const [dateError, setDateError] = useState('');
  const [cvcError, setCvcError] = useState('');

  const handleCardNameChange = (e) => {
    const value = e.target.value;
    setCardName(value);

    if (!value.trim()) {
      setNameError('Cardholder name is required');
    } else {
      setNameError('');
    }
  };

  const handleCardNumberChange = (e) => {
    const value = e.target.value;
    setCardNumber(value);

    if (!/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(value)) {
      setNumberError('Invalid card number');
    } else {
      setNumberError('');
    }
  };

  const handleDateChange = (e) => {
    const value = e.target.value;
    setDate(value);

    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(value)) {
      setDateError('Invalid expiry date');
    } else {
      setDateError('');
    }
  };

  const handleCvcChange = (e) => {
    const value = e.target.value;
    setCvc(value);

    if (!/^\d{3}$/.test(value)) {
      setCvcError('Invalid CVV');
    } else {
      setCvcError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nameError || numberError || dateError || cvcError) {
      alert('Form has errors. Please fix them.');
    } else {
      alert('Form submitted successfully!');
    }
  };

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
      <div className='form'>
        <div className='cardName'>
          <label htmlFor='card-name'>CARDHOLDER NAME</label>
          <input
            type='text'
            name='card-name'
            id='card-name'
            placeholder='e.g Ashogbon Joseph'
            required
            value={cardName}
            onChange={handleCardNameChange}
          />
          {nameError && <p className='error' style={{color:"red", fontSize:"12px", fontFamily:"Arial, Helvetica, sans-serif"}}>{nameError}</p>}
        </div>

        <div className='card-number'>
          <label htmlFor='card-number'>CARD Number</label>
          <input
            type='text'
            name='card-number'
            id='card-number'
            placeholder='e.g 0123 2321 1235 1235'
            required
            maxLength={19}
            value={cardNumber}
            onChange={handleCardNumberChange}
          />
          {numberError && <p className='error' style={{color:"red", fontSize:"12px", fontFamily:"Arial, Helvetica, sans-serif"}}>{numberError}</p>}
        </div>

        <div className='exp-cvcDiv'>
          <div className='exp-date'>
            <label htmlFor='exp-date'>EXP.DATE (MM/YY)</label>
            <input
              type='text'
              name='exp-date'
              id='exp-date'
              placeholder='MM/YY'
              required
              value={date}
              onChange={handleDateChange}
            />
            {dateError && <p className='error' style={{color:"red", fontSize:"12px", fontFamily:"Arial, Helvetica, sans-serif"}}>{dateError}</p>}
          </div>

          <div className='c-v-c'>
            <label htmlFor='cvc'>CVC</label>
            <input
              type='text'
              name='cvc'
              id='cvc'
              placeholder='e.g. 123'
              required
              maxLength={3}
              value={cvc}
              onChange={handleCvcChange}
            />
            {cvcError && <p className='error' style={{color:"red", fontSize:"12px", fontFamily:"Arial, Helvetica, sans-serif"}}>{cvcError}</p>}
          </div>
        </div>
        <button onClick={handleSubmit}>Confirm</button>
      </div>
    </div>
    </div>
  );
};

export default CreditCardII;
