import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <div className="App">
            <PersonCard firstname={"Hani"} lastname={"Khamees"} age={22} haircolor={"brown"}/>
            <PersonCard firstname={"Aws"} lastname={"Radwan"} age={21} haircolor={"brown"}/>
            <PersonCard firstname={"Yasar"} lastname={"Nassar"} age={23} haircolor={"black"}/>
            <PersonCard firstname={"Ans"} lastname={"Anoos"} age={30} haircolor={"brown"}/>
        </div>
    </div>
  );
}

export default App;
