import ContactCard from "./ContactCard";
import React, { useState, useEffect } from "react";

function App() {
  const [contacts, setContacts] = useState([]);
  const [numContacts, setNumContacts] = useState(3);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=${numContacts}`)
      .then((response) => response.json())
      .then((data) => setContacts(data.results));
  }, []);

  function handleClick() {
    fetch(`https://randomuser.me/api/?results=${numContacts}`)
      .then((response) => response.json())
      .then((data) => setContacts(data.results));
  }
  function handleChange(e) {
    setNumContacts(e.target.value);
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
      <label htmlFor="people">Number of people:</label>
      <select value={numContacts} id="people" onChange={handleChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>

      <button className="new-btn" onClick={handleClick}>
        Get New People
      </button>
    </div>
  );
}
export default App;
