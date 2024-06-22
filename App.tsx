
                          // Answer 1


import React, { useState } from 'react';

const UserPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const handleViewToggle = () => {
    setIsSignUp((prevState) => !prevState);
  };

  return (
    <div>
      <h1>Creating a user page like Instagram using React Functionalities</h1>
      <p>Assignment Description:</p>
      <p>
        In this assignment, you will create a user page similar to Instagram using React functionalities. The primary task is to implement conditional rendering, allowing users to either sign up or log in depending on their choice. The user interface should show different input fields based on their selection. If they choose to sign up, additional inputs for registration will be displayed. On the other hand, if they opt for login, only the basic username and password inputs should be visible.
      </p>
      <p>Requirements:</p>
      <ol>
        <li>Create a React application from scratch or use an existing one.</li>
        <li>Implement conditional rendering to toggle between sign up and login Views.</li>
        <li>Design the user interface with a clean and intuitive layout similar to Instagram.</li>
      </ol>
      <button onClick={handleViewToggle}>
        {isSignUp ? 'Sign Up' : 'Log In'}
      </button>
      {isSignUp ? <SignUpForm /> : <LoginForm />}
    </div>
  );
};

const SignUpForm = () => {
  return (
    <div>
      <h2>Sign Up</h2>
      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      {/* Additional input fields for name, email, etc. can be added here */}
      <button>Submit</button>
    </div>
  );
};

const LoginForm = () => {
  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Log In</button>
    </div>
  );
};

export default UserPage;


                  
