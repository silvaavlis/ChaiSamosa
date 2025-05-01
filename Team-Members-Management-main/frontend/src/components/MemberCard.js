// src/components/MemberCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MemberCard.css';

const MemberCard = ({ member }) => {
  const navigate = useNavigate();
  const imageUrl = `http://localhost:5000/uploads/${member.image}`;

  return (
    <div className="card">
      <img src={imageUrl} alt={member.name} />
      <h3>{member.name}</h3>
      <p>{member.role}</p>
      <button onClick={() => navigate(`/members/${member._id}`)}>View Details</button>
    </div>
  );
};

export default MemberCard;
