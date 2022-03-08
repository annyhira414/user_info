import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>my user app.js</h1>
      <div style={{ display: "inline-block" }}> 
        <div>
          <label>Name </label>
          <input type="text"></input>
          <br />
          <label>Email </label>
          <input type="email"></input>
          <br />
          <label>Address </label>
          <input type="text"></input>
        </div>
      </div>
    </div>
  );
}

export default App;
