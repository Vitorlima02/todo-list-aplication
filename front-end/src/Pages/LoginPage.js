import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [password, setPassword] = useState('');

  const validateEmail = (value) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(value);
  };

  const handleClick = (e) => {
    const { target } = e;
    setEmail(target.value);
    const validate = validateEmail(target.value);
    setIsEmailValid(validate);
  }

  const onRegisterClick = () => {
    const path = '/register';
    navigate.push(path);
  }

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={ handleClick }
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>
        <button
          type="submit"
          disabled={!isEmailValid}
        >
          Login
        </button>
        <button
          type="button"
          onClick={ onRegisterClick }
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default LoginPage;