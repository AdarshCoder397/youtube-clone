import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./SearchPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="app_page">
                  <Sidebar />
                  <Videos />
                </div>
              </>
            }
          />
          <Route
            path="/search/:searchTerm"
            element={
              <>
                <div className="app_page">
                  <Sidebar />
                  <SearchPage />
                </div>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
