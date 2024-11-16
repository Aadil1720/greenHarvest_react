import React, { useState } from 'react';

function AuthForm() {
  const [mode, setMode] = useState('login'); // 'login', 'signup', or 'forgotPassword'
  const [username, setUsername] = useState(''); // State for username
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState(''); // State for role
  const [message, setMessage] = useState('');

  const handleToggle = (newMode) => {
    setMode(newMode);
    setMessage('');
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setRole('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage('');

    if (mode === 'signup' && password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    if (mode === 'forgotPassword') {
      setMessage(`Password reset link sent to ${email}`);
    } else if (mode === 'login') {
      setMessage('Login successful! (dummy message)');
    } else if (mode === 'signup') {
      setMessage('Signup successful! Please log in. (dummy message)');
      handleToggle('login');
    }
  };

  return (
    <form className="login-form active" onSubmit={handleSubmit}>
      <h3>
        {mode === 'login'
          ? 'Login Now'
          : mode === 'signup'
          ? 'Sign Up Now'
          : 'Forgot Password'}
      </h3>

      {mode !== 'forgotPassword' && (
        <select
          id="role"
          className="box"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required={mode === 'signup'}
        >
          <option value="" disabled>
            Select Role
          </option>
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
          <option value="farmer">Farmer</option>
        </select>
      )}

      {mode === 'signup' && (
        <input
          type="text"
          placeholder="Enter your username"
          className="box"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      )}

      <input
        type="email"
        placeholder="Enter your email"
        className="box"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      {mode !== 'forgotPassword' && (
        <input
          type="password"
          placeholder="Enter your password"
          className="box"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      )}

      {mode === 'signup' && (
        <input
          type="password"
          placeholder="Confirm your password"
          className="box"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      )}

      {message && <p className="message">{message}</p>}

      {mode === 'login' && (
        <p>
          Forgot Your Password?{' '}
          <button onClick={() => handleToggle('forgotPassword')}>Click Here</button>
        </p>
      )}

      {mode === 'forgotPassword' && (
        <p>
          Remembered your password?{' '}
          <button onClick={() => handleToggle('login')}>Login</button>
        </p>
      )}

      <p>
        {mode === 'login' ? "Don't Have An Account?" : 'Already Have An Account?'}{' '}
        <button onClick={() => handleToggle(mode === 'login' ? 'signup' : 'login')}>
          {mode === 'login' ? 'Create Now' : 'Login'}
        </button>
      </p>

      <input
        type="submit"
        value={
          mode === 'login'
            ? 'Login Now'
            : mode === 'signup'
            ? 'Sign Up Now'
            : 'Send Reset Link'
        }
        className="btn"
      />
    </form>
  );
}

export default AuthForm;
