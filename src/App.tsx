import { BrowserRouter } from "react-router-dom";
import "../src/index.css";

import Routes from "./routes";

function App() {
  // const Logout = () => {
  //   sessionStorage.clear();
  //   window.indexedDB.deleteDatabase("firebaseLocalStorageDb");
  //   return document.location.reload();
  // };

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
