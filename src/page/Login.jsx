import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
  const {singIn}=use(AuthContext)
  const location=useLocation()
  const navigate=useNavigate()
  const [error,setError]=useState("");
console.log(location);
  const handleLogin=(e)=>{
    e.preventDefault()
    const email=e.target.email.value;
    const password=e.target.password.value
    console.log({email,password});

   singIn(email,password).then((result) => {
    // Signed in 
    const user = result.user;
    console.log(user);
    navigate(`${location.state? location.state : "/"}`)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    //const errorMessage = error.message;
    //alert(errorCode,errorMessage)
    setError( errorCode)
  });

  }
    return (
        <div className='flex justify-center py-7'>
           <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">   
      <form onSubmit={handleLogin} className="card-body">
         <h1 className='font-semibold text-center text-2xl'>Login your account</h1>
        <fieldset className="fieldset">
          {error && <p className="text-red-500 text-lg">{error}</p>}
          <label className="label">Email</label>
          <input name="email" type="email" className="input" placeholder="Email" required/>
          <label className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" required/>
          <div><a className="link link-hover">Forgot password?</a></div>
          <button type="submit" className="btn btn-neutral mt-4">Login</button>
          <p className='pt-5 text-sm text-center font-semibold'>Dont’t Have An Account ? <Link to="/auth/Registens" className='text-secondary'>Register</Link></p>
        </fieldset>
      </form>
    </div>
        </div>
    );
};

export default Login;