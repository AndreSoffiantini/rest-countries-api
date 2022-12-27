import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import GlobalProvider from "./context/GlobalProvider";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <Main />
      </div>
    </GlobalProvider>
  );
}

export default App;
