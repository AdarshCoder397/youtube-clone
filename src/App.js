import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Videos from './Videos';
function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_page">
        <Sidebar />
        <Videos />
      </div>
    </div>
  );
}

export default App;
