import React, { useState } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/addUserForm';

function App() {

  const userData = [
    {
      id:1,
      name:'pavi',
      email:'pavithrantkm@gmail.com',
      password:'pavi1234'
    },
    {
      id:2,
      name:'nambu',
      email:'nambu@gmail.com',
      password:'nambu123'
    },
    {
      id:3,
      name:'mugesh',
      email:'mugesh@gmail.com',
      password:'mugesh123'
    }
  ] ;

  const addUser = (user) =>{
    user.id =users.length + 1;
    setUsers([...users,user])

  }
 

  const [users ,setUsers]= useState(userData);
  return (
    <div>
      <h1>CRUD APP WITH HOOK APPLICATION</h1>
      <div>
        <h2>ADD USER</h2>
        <AddUserForm addUser={addUser} />
      
        <div>
          <h2>VIEW USER</h2>
          <UserTable users={users}/>
        </div>
      </div>
    </div>
   
  );
}

export default App;
