import "./App.scss";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Card />
    </div>
  );
}

export default App;
