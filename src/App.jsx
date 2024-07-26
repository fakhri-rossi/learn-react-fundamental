import "./App.css";
import Article from "./components/Article";
import Homepage from "./pages";
import { GlobalContext } from "./context";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers";

function App() {
  const user = {
    username: "rossi",
  };

  return (
    <>
      <GlobalContext.Provider value={user}>
        {/* <Homepage /> */}
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
