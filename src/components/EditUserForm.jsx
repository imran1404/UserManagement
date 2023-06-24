import React, { useState } from "react";

const EditUserForm = ({ user, updateUser, closeEditForm }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone) {
      updateUser(user.id, { name, email, phone });
      closeEditForm();
    }
  };

  return (
    <form className="formm" onSubmit={handleSubmit}>
      <input
        className="editform"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="editform"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="editform"
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button className="btn" type="submit">
        Update User
      </button>
    </form>
  );
};

export default EditUserForm;
