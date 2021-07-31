import React,{useState} from 'react'


function Form(props) {
    const [Color, setColor] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');

    const Array = [];

   const handelSubmit = (e) =>{
       e.preventDefault();
    const obj = {Color, width, height};
    Array.push(obj);
    props.hoto(Array);
   }


    return (
        <div>
          <form onSubmit = {handelSubmit} >

              <input type="text" placeholder='Color' onChange = {(e)=>{setColor(e.target.value)}} />
              <input type="number" placeholder='width'  onChange = {(e)=>{setWidth(e.target.value)}} />
              <input type="number" placeholder='height'  onChange = {(e)=>{setHeight(e.target.value)}} />
              <input type="submit" value='click' />
        </form>  
        </div>
    )
}

export default Form
