import React from 'react';
import withAuthProtection from './withAuthProtection ';

const Dashboard = () => {
  return <div>Welcome to your dashboard!</div>;
};

const NotAuthorized = () => {
  return <div>logged in </div>;
};
const ProtectedDashboard = withAuthProtection(Dashboard, NotAuthorized);

const Task4 = () => {
  const isUserLoggedIn = false;

  return (
    <div>
        <h6>task6</h6>
      <h3>Login</h3>
      <ProtectedDashboard isAuthenticated={isUserLoggedIn} />
    </div>
  );
};

export default Task4;
