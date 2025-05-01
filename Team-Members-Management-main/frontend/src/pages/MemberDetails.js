// src/pages/MemberDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './MemberDetails.css'; 

const MemberDetails = () => {
  const { id } = useParams(); // Get member id from URL

  // Example member data, this should ideally come from an API or database
  const members = [
    {
      id: 1,
      name: 'Ravi Prakash',
      image: '/ravi.jpg',
      email: 'ravi69@gmail.com',
      phone: '123-456-7890',
      role: 'Developer',
      bio: 'Ravi is a developer with 0 years of experience in full-stack development.'
    },
    {
      id: 2,
      name: 'Abhiram Sai',
      image: '/abhi.png',
      email: 'jane@example.com',
      phone: '987-654-3210',
      role: 'Designer',
      bio: 'Abhiram specializes in UX/UI design and has worked on one product.'
    },
  ];

  // Find the member that matches the id
  const member = members.find((m) => m.id === parseInt(id));

  if (!member) {
    return <div>Member not found</div>;
  }

  return (
    <div className="member-detail-container">
      <div className="member-detail-card">
        <img src={member.image} alt={member.name} />
        <h3>{member.name}</h3>
        <p><strong>Role:</strong> {member.role}</p>
        <p><strong>Email:</strong> {member.email}</p>
        <p><strong>Phone:</strong> {member.phone}</p>
        <p><strong>Bio:</strong> {member.bio}</p>
      </div>
    </div>
  );
};

export default MemberDetails;
