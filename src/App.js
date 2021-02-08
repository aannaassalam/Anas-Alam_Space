import "./App.css";
import Footer from "./layout/components/footer/footer";
import Header from "./layout/components/header/header";
import Home from "./layout/pages/home/home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
