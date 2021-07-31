import React from 'react'
import ReactDom from 'react-dom'




function Hello(){
  return (
    <div>
  <h1>Hello Dojo</h1>
  <h2>Things I need to do:</h2>
  <ul>
  <li>Learn react</li>
  <li>climb Mt. Everest</li>
  <li> drink milk</li>
  <li>go on a walk</li>
</ul>
    </div>    
);
}

ReactDom.render(<Hello />, document.getElementById('root') );