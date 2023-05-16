
  import React, { useState } from 'react';
// import {Link} from 'react-router-dom'

function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Perform login logic or API call here
      console.log('Login successful');
    }
  };

  const validateForm = () => {
    let formIsValid = true;
    const newErrors = {};

     // Email validation
     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!formData.email.match(emailPattern)) {
       formIsValid = false;
       newErrors.email = 'Please enter a valid email address ';
     }

    // Password validation
    if (!formData.password) {
      formIsValid = false;
      newErrors.password = 'Please enter your password';
    }

    setErrors(newErrors);
    return formIsValid;
  };



  return (
    <div className='Loginpage h-4/5 w-2/5  rounded-2xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  p-5 bg-slate-900 text-white '>
      <h1 className='text-white bg-slate-900 font-bold text-3xl m-2 text-center my-5'>Login</h1>
      <div className="w-full border-2 border-white my-5"></div>
      <form className='' action="">
        
      <div className=" my-4">
        
        <input className='h-auto mt-6 w-full p-2 rounded-xl text-black  text-xl'  id="femail" type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Email Id" />
        {errors.email && <div className="error ml-1 text-sm">{errors.email}</div>}
      </div>

       <div className=" my-4 " >
        <input className='h-auto mt-6 w-full p-2 rounded-xl text-black  text-xl'  id='fpass' type="password" name="password"  value={formData.password} onChange={handleChange} placeholder="Password..."/>
        {errors.password && <div className="error ml-1 text-sm">{errors.password}</div>}
  
        </div>
      <div className="text-center">
         <button className='h-10 w-32 hover:text-gray-950 hover:font-bold  m-2 hover:bg-white border-2 border-white rounded-xl text-white my-5 text-xl' id='signup-btn' onclick="return validatefrom()">Sign In</button>
      </div>
       
        {/* <Link  to="/"><span className='m-2 p-2 hover:underline'>Create your account</span> </Link>
        <Link  to=""><span className='m-2 p-2 hover:underline'>Forgot password?</span> </Link> */}
      </form>
     
    </div>
  )
}

export default LoginPage
