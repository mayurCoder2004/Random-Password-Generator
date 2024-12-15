import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LC, NC, SC, UC } from './data/PassChar';

function App() {
  let [uppercase, setUppercase]=useState(false);
  let [lowercase, setLowercase]=useState(false);
  let [number, setNumber]=useState(false);
  let [symbols, setSymbols]=useState(false);
  let [passwordlen, setPasswordLen]=useState(10);
  let [fPass, setPass]=useState('');

  let createPassword=()=>{
    let finalPass = '';
    let p = "Wscubetech";
    // let n = p.charAt(Math.floor(Math.random()*p.length));
    // console.log(n);
    let charSet='';
    if (uppercase || lowercase || number || symbols){
      if (uppercase) charSet+=UC;
      if (lowercase) charSet+=LC;
      if (number) charSet+=NC;
      if (symbols) charSet+=SC;
      for (let i=0; i<passwordlen; i++){
        finalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length));
      }
      setPass(finalPass);
    }
    else {
      toast.warn("Please Select Atleast One Checkbox");
    }
  }

  let copyPass=()=>{
    navigator.clipboard.writeText(fPass);
  }

  return (
    <>
      <div className='passwordBox'>
        <h2>Password Generator</h2>

        <div className='passwordBoxin'>
          <input type='text' value={fPass} readOnly></input> <button onClick={copyPass}>Copy</button>
        </div>

        <div className='passlength'>
          <label>Password Length</label>
          <input type='number' value={passwordlen} onChange={(event)=>setPasswordLen(event.target.value)} max={20} min={10}/>
        </div>

        <div className='options'>
          <label>Include uppercase letters</label>
          <input type='checkbox' checked={uppercase} onChange={()=>setUppercase(!uppercase)}/>
        </div>

        <div className='options'>
          <label>Include lowercase letters</label>
          <input type='checkbox' checked={lowercase} onChange={()=>setLowercase(!lowercase)}/>
        </div>

        <div className='options'>
          <label>Include numbers</label>
          <input type='checkbox' checked={number} onChange={()=>setNumber(!number)}/>
        </div>

        <div className='options'>
          <label>Include symbols</label>
          <input type='checkbox' checked={symbols} onChange={()=>setSymbols(!symbols)}/>
        </div>

        <button className='btn' onClick={createPassword}>
          Generate Password
        </button>

        <ToastContainer/>
      </div>
    </>
  );
}

export default App;
