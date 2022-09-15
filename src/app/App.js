import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ChartPage from "../pages/ChartPage";
import MainPage from "../pages/MainPage";

function App() {
  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<MainPage />}/>
              <Route path="/:chartId" element={<ChartPage />}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
