import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [found, setFound] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, lastname, email, birthdate, found);
    const date = { name, lastname, email, birthdate, found };
    if (name && lastname && email && birthdate && found) {
      setList((ls) => [...ls, date]);
      setName("");
      setLastname("");
      setEmail("");
      setBirthdate("");
      setFound("");
    }
  };

  return (
    <div>
      <h1>React </h1>
      <form onSubmit={handleSubmit}>
        <label className="text">Voornaam zoals in paspoort</label>
        <input
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="text">Achternaam zoals in paspoort</label>
        <input
          name="lastname"
          placeholder="Lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />

        <label className="text">Email</label>
        <input
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="text">
          Je geboortedatum (minimumleeftijd voor vrije werkers is 16 jaar)
        </label>
        <input
          name="birthdate"
          placeholder="Birthdate"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />

        <label className="text">Hoe heb je ons gevonden?</label>
        <input
          name="found"
          placeholder="Found"
          value={found}
          onChange={(e) => setFound(e.target.value)}
        />

        <button>Add</button>
      </form>

      {list.map((a) => (
        <div>
          <li>{"Naam: " + a.name}</li>
          <li>{"Achternaam: " + a.lastname}</li>
          <li>{"Email: " + a.email}</li>
          <li>{"Geboorte Datum: " + a.birthdate}</li>
          <li>{"Hoe heb je ons gevonden: " + a.found}</li>
        </div>
      ))}
    </div>
  );
}

export default App;
