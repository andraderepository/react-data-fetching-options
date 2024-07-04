import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

import DataFetchingClassic from "./pages/DataFetchingClassic";
import DataFetchingAxios from "./pages/DataFetchingAxios";

function App() {

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="DataFetchingClassic">Classic</Link>
          </li>
          <li>
            <Link to="DataFetchingAxios">Axios</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="DataFetchingClassic" Component={DataFetchingClassic}/>
        <Route path="DataFetchingAxios" Component={DataFetchingAxios}/>
      </Routes>
    </Router>
  )
}

export default App
