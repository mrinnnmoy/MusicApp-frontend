import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Experience from './Components/Experience';

function App() {
  return (
    <div className="App text-white overflow-hidden">
      <Header />
      <Hero />
      <Experience />

      {/*
      <Search />
      <Download />
      <Footer /> */}
    </div>
  );
}

export default App;
