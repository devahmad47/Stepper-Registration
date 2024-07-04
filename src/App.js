import './App.css';
import { RoutingcallAuth } from "./components/Auth/RoutingcallAuth";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/*" element={<RoutingcallAuth />} />
        </Routes>
    </div>
  );
}

export default App;
