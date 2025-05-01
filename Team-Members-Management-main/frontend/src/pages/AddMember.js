// src/pages/AddMember.js
import React, { useState } from 'react';
import axios from '../api';
import { useNavigate } from 'react-router-dom';
import './AddMember.css'; // optional CSS for styling

const AddMember = () => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    email: '',
    image: null,
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.role || !formData.email || !formData.image) {
      return setMessage('❌ All fields are required.');
    }

    const data = new FormData();
    data.append('name', formData.name);
    data.append('role', formData.role);
    data.append('email', formData.email);
    data.append('image', formData.image);

    try {
      await axios.post('/members', data);
      setMessage('✅ Member added successfully!');
      navigate('/members'); // redirect to View Members
    } catch (error) {
      console.error(error);
      setMessage('❌ Error adding member.');
    }
  };

  return (
    <div className="form-container">
      <h2>Add Team Member</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="text" name="name" placeholder="Name" onChange={handleChange} />
        <input type="text" name="role" placeholder="Role" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="file" name="image" accept="image/*" onChange={handleChange} />
        <button type="submit">Add Member</button>
      </form>
    </div>
  );
};

export default AddMember;
