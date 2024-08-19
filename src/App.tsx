import React from 'react';
import UserCard from './UserCard'; // Get the UserCard Component

export default function App() {
  // Create a variable of type User

  const users = [
    {
    id:1,
    name:"Alice",
    age:28,
    email:"alice@example.com"
  },
  {
    id:2,
    name:"John",
    age:30,
    email:"john@example.com"
  }
  ]
  return (
    <div className='App'>
      <h1>Hello World</h1>
      <ul>
      {
        users.map((val)=><li key={val.id}>{val.name} - {val.email} - {val.age}</li>)
      }
      </ul>

    </div>
  );
}

// Log to console
console.log('Hello console');