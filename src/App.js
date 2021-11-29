import Navbar from './Navbar';
import SiteRoutes from './SiteRoutes';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <SiteRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
