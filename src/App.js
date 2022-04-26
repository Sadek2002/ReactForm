import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <form>
        <label className="text">Voornaam zoals in paspoort</label>

        <label className="text">Achternaam zoals in paspoort</label>

        <br></br>

        <input type="text" className="inputfield" required />
        <input type="text" className="inputfield" required />

        <br></br>

        <label className="email">Email</label>

        <br></br>

        <input type="text" className="emailinput" required />

        <br></br>

        <label className="birthdate">
          Je geboortedatum (minimumleeftijd voor vrije werkers is 16 jaar)
        </label>

        <br></br>

        <input type="date" name="name" required />

        <br></br>

        <label className="birthdate">Hoe heb je ons gevonden?</label>

        <br></br>

        <input type="text" className="vinden" required />

        <br></br>

        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
