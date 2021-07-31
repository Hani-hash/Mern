import React from "react"
import Card from './components/Card'; 

function App() {
  return ( 
  <div className="App">
       <div className="App">
            <Card firstname={"Hani"} lastname={"Khamees"} age={28} haircolor={"black"}/>
            <Card firstname={"Haytham"} lastname={"Khamees"} age={30} haircolor={"brown"}/>
            <Card firstname={"Hellen"} lastname={"Khamees"} age={15} haircolor={"black"}/>
            <Card firstname={"Hisham"} lastname={"Khamees"} age={40} haircolor={"brown"}/>
        </div>
    </div>
  );
}

export default App