import "./App.scss";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Card from "./components/Card";
import Grid from "./components/Grid";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Card />
      <Grid />
    </div>
  );
}

export default App;
