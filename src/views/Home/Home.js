import React, { useState } from 'react';
import './Home.css'

function Home() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [fruits, setFruits] = useState([]);
  const[city,setCity]=useState('')

  function saveData(){
    console.log(`Your name is ${name}`);
    console.log(`Your gender is ${gender}`);
    console.log(`Your Favourite Fruits are ${fruits.join(',')}`);
    console.log(`You are from ${city}`);

    setName('');
    setGender('');
    setFruits([]);
    setCity('');
  }
  return (
    <div>
      <h1 className='heading'>Form Handling in React</h1>
      <form className='form-container'>
        <div>
          <p className='print-info'>Name:{name}</p>
          <input type='text' placeholder='Enter Your Name' className='input-box' onChange={(e) => { setName(e.target.value) }}></input>
        </div>
        <div>
          <p className='print-info'>Gender:{gender}</p>
          <label htmlFor='male'>
            <input type='radio' name='gender' id='male' value='male' className='input-gender'
              onChange={(e) => {
                if (e.target.checked) {
                  setGender('Male')
                }
              }}></input>Male
          </label>
          <label htmlFor='female'>
            <input type='radio' name='gender' id='female' value='female' className='input-gender'
              onChange={(e) => {
                if (e.target.checked) {
                  setGender('Female')
                }
              }}
            ></input>Female
          </label>
        </div>
        <div className='input-fruit'>
          <p>Fruits:{fruits.join(',')}</p>
          <input type='checkbox'
            onChange={(e) => {
              if (e.target.checked) {
                setFruits([...fruits, "Mango"])
              } else {
                const newFruits = fruits.filter((fruit) => {
                  return fruit !== "Mango"
                })
                setFruits(newFruits);
              }
            }}></input>Mango<br />
          <input type='checkbox'
            onChange={(e) => {
              if (e.target.checked) {
                setFruits([...fruits, "Orange"])
              } else {
                const newFruits = fruits.filter((fruit) => {
                  return fruit !== "Orange"
                })
                setFruits(newFruits);
              }
            }}
          ></input>Orange<br />
          <input type='checkbox'
            onChange={(e) => {
              if (e.target.checked) {
                setFruits([...fruits, "Custard-Apple"])
              } else {
                const newFruits = fruits.filter((fruit) => {
                  return fruit !== "Custard-Apple"
                })
                setFruits(newFruits);
              }
            }}
          ></input>Custard-Apple<br />
          <input type='checkbox'
           onChange={(e) => {
            if (e.target.checked) {
              setFruits([...fruits, "Water-melon"])
            } else {
              const newFruits = fruits.filter((fruit) => {
                return fruit !== "Water-melon"
              })
              setFruits(newFruits);
            }
          }}
          ></input>Water-melon<br />
          <input type='checkbox'
            onChange={(e) => {
              if (e.target.checked) {
                setFruits([...fruits, "Banana"])
              } else {
                const newFruits = fruits.filter((fruit) => {
                  return fruit !== "Banana"
                })
                setFruits(newFruits);
              }
            }}
          ></input>Banana<br />

        </div>
        <div>
          <p className='city'>City:{city}</p>
          <select className='select-city' onChange={(e)=>{setCity(e.target.value)}}>
            <option value=''>Select city</option>
            <option value='pune'>Pune</option>
            <option value='Nagpur'>Nagpur</option>
            <option value='Wardha'>Wardha</option>
            <option value='Amravati'>Amravati</option>
            <option vlaue='Mumbai'>Mumbai</option>
          </select>
        </div>
        <div>
          <button type='button' onChange={saveData} className='btn'>Save</button>
        </div>
      </form>
    </div>
  )
}

export default Home
