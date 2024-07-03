import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

import DataFetchingClassic from "./Pages/DataFetchingClassic";
import DataFetchingAxios from "./Pages/DataFetchingAxios";

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
        <Route path="DataFetchingClassic" Component={DataFetchingAxios}/>
      </Routes>
    </Router>
  )
}

export default App
