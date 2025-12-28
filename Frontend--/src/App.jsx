import { useState } from "react";
import "./App.css";
import Blue from "./components/Blue";
import profileimg from "./assets/profileimg.jpg";

function App() {
  return (
    <>
      <Blue username="Daniel" comment="hate this channel" image={profileimg} />
      <h1>Jello world</h1>
    </>
  );
}

export default App;
