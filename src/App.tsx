import "./App.css";

function App() {
  return (
    <form>
      <h1>Hello there!</h1>
      <label htmlFor="name">What's your name?</label>
      <br />
      <input type="text" id="name" name="name" />

      <h1>When's your birthday?</h1>

      <label htmlFor="day">day</label>
      <input type="text" id="day" name="day" />

      <label htmlFor="month">month:</label>
      <select name="months" id="months" title="Select a month from the drop down">
        <option value="january">January</option>
        <option value="february">February</option>
        <option value="march">March</option>
        <option value="april">April</option>
        <option value="may">May</option>
        <option value="june">June</option>
        <option value="july">July</option>
        <option value="august">August</option>
        <option value="september">September</option>
        <option value="october">October</option>
        <option value="november">November</option>
        <option value="december">December</option>
      </select>
      <br/>
      <input type="submit" value="Go!"/>

    </form>
  );
}

export default App;
