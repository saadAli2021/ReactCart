import "./App.css";
import CartContainer from "./CartContainer";

import { useGlobalContext } from "./context";

import NavBar from "./NavBar";

function App() {
  return (
    <div className="container">
      <NavBar />
      <CartContainer />
    </div>
  );
}

export default App;
