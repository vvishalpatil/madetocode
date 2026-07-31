import { Route, Routes } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Portfolio } from "./pages/Portfolio";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/vishal-patil5" element={<Portfolio />} />
    </Routes>
  );
}

export default App;
