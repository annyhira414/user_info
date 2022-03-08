import React,{useState} from "react";
import "./App.css";

function App() {
  const [name ,setName] = useState("");
  const [email,setEmail] = useState("");
  const [address , setAddress] = useState("");
  return (
    <div className="App">
      <h1>my user app.js</h1>
      <div style={{ display: "inline-block" }}> 
        <div>
          <label>Name </label>
          <input type="text"
          onChange={(e)=>setName(e.target.value)} value={name}></input>
       
          <br />
          <label>Email </label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} value ={email}></input>
          <br />
          <label>Address </label>
          <input type="text" onChange={(e) => setAddress(e.target.value)} value={address}></input>
        </div>
      </div>
    </div>
  );
}

export default App;
