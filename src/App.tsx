import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import MyRoutes from "./routes";

function App() {
  return (
    <>
      <Router basename="/">
        <MyRoutes />
      </Router>
    </>
  );
}

export default App;
