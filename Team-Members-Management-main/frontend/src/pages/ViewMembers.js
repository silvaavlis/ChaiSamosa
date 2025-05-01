// src/pages/ViewMembers.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';  // Import the CSS file

const ViewMembers = () => {
  const members = [
    {
      id: 1,
      name: 'Ravi Prakash',
      image: '/ravi.jpg',
      email: 'john@example.com',
      phone: '123-456-7890',
      role: 'Developer',
      bio: 'John is a senior developer with 10 years of experience in full-stack development.'
    },
    {
      id: 2,
      name: 'Abhiram Sai',
      image: '/abhi.png',
      email: 'jane@example.com',
      phone: '987-654-3210',
      role: 'Designer',
      bio: 'Jane specializes in UX/UI design and has worked on various product designs.'
    },
  ];

  return (
    <div className="container">
      <h1 className="header">Team Members</h1>
      <div className="view-members">
        {members.map((member) => (
          <div key={member.id} className="member-card">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <Link to={`/members/${member.id}`} className="button">View Details</Link> {/* updated */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewMembers;
