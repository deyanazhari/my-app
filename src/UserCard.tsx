// Interface declaration
// Format of object being used in the project
// Typescript
import React from 'react';

interface User {
    name: string, 
    age: number,
    email: string
  }
  
  // How to define a component in React.js
  // How to define a functional component in Reacr
  const UserCard: React.FC = () => {
    return (
      // In JSX when you build a component, it needs to be embedded in one HTML element
      <div>
        <h2>User name</h2>
        <p>User Age</p>
        <p>User Email</p>
      </div>
    );
  }
  // Export the component, to be used in App.tsx
  export default UserCard;