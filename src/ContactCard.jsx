import React, { useState } from "react";

function ContactCard({ avatarUrl, name, email, age }) {
  const [showAge, setShowAge] = useState(false);
  return (
    <div className="contact-card">
      <img src={avatarUrl} alt="profile" />
      <div className="user-details">
        <p>Name: {name}</p>
        <p className="email-text">Email: {email}</p>
        <div className="age-container">
          {!showAge ? (
            <button onClick={() => setShowAge(true)}>Show Age</button>
          ) : (
            <button onClick={() => setShowAge(false)}>Hide Age</button>
          )}
          {showAge && <p>Age: {age}</p>}
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
