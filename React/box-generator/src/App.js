import Form from './components/Form';
import React, {useState} from 'react';
import Display from './components/Display';



function App() {
  const [hold, setHold ] = useState ([]);
  const Array = (arr) =>{
    setHold(hold.concat(arr))
  }
  return (
    <>
    <Form hoto = {Array}/>
    <Display box = {hold}/>
   
    </>
  );
}

export default App;
