import React from 'react'
import react ,{useState} from 'react'
import Button from '@material-ui/core/Button';

const MyComponent=()=> {
    const taps=["tap 1", "tap 2", "tap 3"]
    const[msg,setMsg] = useState("");
    const clickHandler = (e,value,i) =>{
        e.preventDefault();
        setMsg(value+ "was taped");}
    return (

        <div>
            {
                taps.map((value,i) =>{
                    return <Button variant="contained" color="primary" key={i} onClick={(e)=> clickHandler(e,value,i)} >
                    {value}
                        </Button>
                        
                })
            }
            <p> {msg} </p> 
                   </div>
    )
}

export default MyComponent
