import ContactCard from "./ContactCard";
import React, { useState, useEffect } from "react";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=3")
      .then((response) => response.json())
      .then((data) => setContacts(data.results));
  }, []);

  function handleClick() {
    fetch("https://randomuser.me/api/?results=3")
      .then((response) => response.json())
      .then((data) => setContacts(data.results));
  }

  return (
    <div className="container">
      {contacts.map((contact, index) => {
        return (
          <ContactCard
            key={index}
            avatarUrl={contact.picture.large}
            name={contact.name.first + " " + contact.name.last}
            email={contact.email}
            age={contact.dob.age}
          />
        );
      })}
      <button className="new-btn" onClick={handleClick}>
        Get New People
      </button>
    </div>
  );
}
export default App;
