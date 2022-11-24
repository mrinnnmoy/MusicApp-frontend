import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Experience from './Components/Experience';
import Search from "./Components/Search";
import Download from "./Components/Download";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App text-white overflow-hidden">
      <Header />
      <Hero />
      <Experience />
      <Search />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
