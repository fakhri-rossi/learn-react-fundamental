import "./App.css";
import Article from "./components/Article";
import Homepage from "./pages";
import { GlobalContext } from "./context";

function App() {
  const user = {
    username: "rossi",
  };

  return (
    <>
      <GlobalContext.Provider value={user}>
        <Homepage />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
