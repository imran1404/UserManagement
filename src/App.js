import React, { useState } from 'react';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';
import UserList from './components/UserList';

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const addUser = (user) => {
    const newUser = { id: Date.now(), ...user };
    setUsers([...users, newUser]);
  };

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const editUser = (user) => {
    setEditingUser(user);
  };

  const updateUser = (userId, updatedUser) => {
    setUsers(users.map((user) => (user.id === userId ? updatedUser : user)));
  };

  const closeEditForm = () => {
    setEditingUser(null);
  };

  return (
    <div>
      <h1 className='title'>Single User Management Application</h1>
      <AddUserForm addUser={addUser} />
      <UserList
        users={users}
        deleteUser={deleteUser}
        editUser={editUser}
      />
      {editingUser && (
        <EditUserForm
          user={editingUser}
          updateUser={updateUser}
          closeEditForm={closeEditForm}
        />
      )}
    </div>
  );
};

export default App;

