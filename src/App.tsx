import React from 'react';
import UserCard from './UserCard';


const user = {
  id: 1,
 name: "Alice",
 age: 28,
 email: "alice@example.com",
};

const users= [
  {
    id: 1,
   name: "Alice",
   age: 28,
   email: "alice@example.com",
  },
  {
    id: 2,
   name: "Deyan",
   age: 23,
   email: "deyan@example.com",
  },
  {
    id: 3,
   name: "supri",
   age: 28,
   email: "supri@example.com",
  }
]

function App() {
 return (
   <div>
     <h1>Hello Wordl</h1>

     <ul>

     </ul>
     {/* <UserCard user={user} /> */}
   </div>
 );
}


export default App;

