import "./App.scss";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Quote from "./components/Quote";
import Grid from "./components/Grid";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Quote />
      <Grid />
      <Footer />
    </div>
  );
}

export default App;
