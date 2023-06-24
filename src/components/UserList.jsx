import React from 'react';
import "./style.css"

const UserList = ({ users, deleteUser, editUser }) => {
  return (
    <div className='list-card'>
      {users.map((user) => (
        <div key={user.id} className='single-list'>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <button className='btn' onClick={() => editUser(user)}>Edit</button>
          <button className='btn' onClick={() => deleteUser(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
