import { useState } from "react";
import "./output.css";
import Nav from "./components/nav/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[url(/assets/mario.jpg)] h-[80vh]">
      <Nav />
    </div>
  );
}

export default App;
