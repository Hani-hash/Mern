import React , {useState} from 'react';





const Form=()=>{
   const [username, setusername] = useState('');
   const [lastname, setlastname] = useState('');
   const [Email, setEmail] = useState('');
   const [Password, setPassword] = useState('');
   const [ConfirmPassword, setConfirmPassword] = useState('');
   const Validation =() => {
    if (username.length < 2){
        return('username must be at least 2 char');
    }

   }

   const Validationname =() => {
    if (lastname.length < 2){
        return('last name must be at least 2 char');
    }
    }

    const ValidationEmail =() => {
    if (Email.length < 2){
        return('Email must be at least 2 char');
    }
    }

    const Validatinpaswd =() => {
    if (Password.length < 8){
        return('Password must be at least 8 char');
    }
    }

    const ValidationConfirm =() => {
    if (Password.length != ConfirmPassword.length){
        return('Passwords must match');
    }
    }
    return(
        <>
        <form> 
            Uesrname: <input type="text" onChange = {(e)=>{setusername(e.target.value)}} />
            <p>{Validation()}</p>
            
            LastName: <input type="text"  onChange = {(e)=>{setlastname(e.target.value)}}/>
            <p>{Validationname()}</p>
            Email: <input type="text" onChange = {(e)=>{setEmail(e.target.value)}} />
            <p>{ValidationEmail()}</p>
            Password: <input type="password" onChange = {(e)=>{setPassword(e.target.value)}} />
            <p>{Validatinpaswd()}</p>
            Confirm Password: <input type="password" onChange = {(e)=>{setConfirmPassword(e.target.value)}}/>
            <p>{ValidationConfirm()}</p>
        </form>
        <p>{username}</p>
        <p>{lastname}</p>
        <p>{Email}</p>
        <p>{Password}</p>
        <p>{ConfirmPassword}</p>
        </>
    );

    
};

export default Form;