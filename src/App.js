import Logo from "./Logo.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Dictionary />
        <footer className="App-footer">
          <em>
            {" "}
            <p className="mt-4 text-success">Coded by Tumaini Edgar</p>
          </em>
        </footer>
      </main>
    </div>
  );
}

export default App;
