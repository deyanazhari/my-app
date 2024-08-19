import React from 'react';
import UserCard from './UserCard'; // Get the UserCard Component

export default function App() {
  // Create a variable of type User
  const
  profile
  = {bio:
  "abc"
  ,website:
  "def"
  }
  const users = [
    {
    id:1,
    name:"Alice",
    age:28,
    email:"alice@example.com"
  },
  {
    id:2,
    name:"Deyan",
    age:30,
    email:"deyan@example.com"
  },  {
    id:3,
    name:"Jono",
    age:27,
    email:"jono@example.com"
  }
  ]
  return (
    <div className='App'>
      <h1>Hello World</h1>
      <UserCard user={users[0]} profile={profile}/>
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