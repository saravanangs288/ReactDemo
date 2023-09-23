import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  // Additional Fields for Sign Up
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState(0); // Initialize weight as an integer
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform your login or sign-up logic based on the "isSignUp" state.

    if (isSignUp && password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Is Sign Up:', isSignUp);

    if (isSignUp) {
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
      console.log('Gender:', gender);
      console.log('Weight:', weight);
      console.log('Address:', address);
    }

    // Clear the form fields after submission
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setFirstName('');
    setLastName('');
    setGender('');
    setWeight(0); // Reset weight to 0
    setAddress('');
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h3>{isSignUp ? 'Sign Up' : 'Login'}</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <div className="input-group">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                      required
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={toggleShowPassword}
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                </div>
                {isSignUp && (
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm Password:
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="form-control"
                      required
                    />
                  </div>
                )}
                {isSignUp && (
                  <>
                    <div className="mb-3">
                      <label htmlFor="firstName" className="form-label">
                        First Name:
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="lastName" className="form-label">
                        Last Name:
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="gender" className="form-label">
                        Gender:
                      </label>
                      <input
                        type="text"
                        id="gender"
                        name="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="weight" className="form-label">
                        Weight (kg):
                      </label>
                      <input
                        type="number" // Use type "number" for an integer input
                        id="weight"
                        name="weight"
                        value={weight}
                        onChange={(e) => setWeight(parseInt(e.target.value, 10))} // Parse input as an integer
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="address" className="form-label">
                        Address:
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </>
                )}
                <button type="submit" className="btn btn-primary btn-block">
                  {isSignUp ? 'Sign Up' : 'Login'}
                </button>
              </form>
              <div className="mt-3">
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={toggleForm}
                >
                  {isSignUp ? 'Already have an account? Login' : 'Don\'t have an account? Sign Up'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
