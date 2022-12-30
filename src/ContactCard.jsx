import React, { useState } from "react";

function ContactCard({ avatarUrl, name, email, age }) {
  const [showAge, setShowAge] = useState(false);
  return (
    <div className="contact-card">
      <img src={avatarUrl} alt="profile" />
      <div className="user-details">
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        {!showAge ? (
          <button onClick={() => setShowAge(true)}>Show Age</button>
        ) : (
          <button onClick={() => setShowAge(false)}>Hide Age</button>
        )}
        {showAge && <p>Age: {age}</p>}
      </div>
    </div>
  );
}

export default ContactCard;
