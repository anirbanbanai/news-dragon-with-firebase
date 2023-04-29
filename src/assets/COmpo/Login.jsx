import React from 'react';



const Login = () => {
    return (
        <div className='mx-auto'>
           <h3>Login form</h3>
           <input className='mx-5' type="text" name="name" placeholder='Name' id="" /> <br />
           <input className='mx-5' type="email" name='email' placeholder='email' value="" /> <br />
           <input className='mx-5' type="password" name='password' placeholder='password' value="" /> <br />
           <button className='mx-5'>Login</button>
        </div>

    );
};

export { Login }