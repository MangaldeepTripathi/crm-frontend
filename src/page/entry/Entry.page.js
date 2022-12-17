import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './entry.style.css'
//import { Jumbotron } from "react-bootstrap"
import { LoginForm } from '../../components/login/Login.comp';
import { ResetPassword } from '../../components/password-reset/PasswordReset.comp';
function Entry() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[formload,setFormLoad]= useState("login");
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value)
        break;
      case 'password':
        setPassword(value)
        break;
      default:
        break;
    }
    //console.log(name, value);
  }
  const handleOnSubmit= (e) =>{
   e.preventDefault();
   if(!email || !password){
    alert("Please fill all the input fields");
   }
   //Todo to call the API
   console.log(email, password);
  }
  const formSwitcher= (formType)=>{
   setFormLoad(formType);
  }
  const handleOnResetSubmit= (e) =>{
    e.preventDefault();
    if(!email){
     alert("Please fill email input fields");
    }
    //Todo call the API to submit the form
    console.log(email, password);
   }

  return (
    <div className="entry-page bg-info">
      <div className='mt-4 p-5 bg-primary text-white rounded'>
        {formload==="login" && <LoginForm handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} formSwitcher={formSwitcher} email={email} pass={password} />}
        {formload==="reset" && <ResetPassword handleOnChange={handleOnChange} handleOnResetSubmit={handleOnResetSubmit} formSwitcher={formSwitcher} email={email} />}
        
      </div>
    </div>
  );
}

export default Entry;
