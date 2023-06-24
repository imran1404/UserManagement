import React, { useState } from 'react';


const AddUserForm = ({ addUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone) {
      addUser({ name, email, phone });
      setName('');
      setEmail('');
      setPhone('');
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div><label>Name: </label><input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      /></div>
      
      <div><label>Email: </label><input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      /></div>
      
      <div><label>Number: </label><input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      /></div>
      
      <button className='btn' type="submit">Add User</button>
    </form>
  );
};

export default AddUserForm;
