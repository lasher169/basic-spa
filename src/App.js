import './App.css';
import './components/Button'
import './components/Navigation.css'

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import FirstNamePage from './pages/FirstNamePage';
import LastNamePage from './pages/LastNamePage';
import DOBPage from './pages/DOBPage';


function App() {
  
  let navItemsList = [
        { name: "Home", styling: "nav-styling"},
        { name: "About", styling: "nav-styling"},
        { name: "Services", styling: "nav-styling"},
        { name: "Contact", styling: "nav-styling"}
  ];  

  console.log(navItemsList.length);

  return (
    <Router>
      <Routes>        
        <Route path="/" element={<FirstNamePage />} />
        <Route path="/lastname" element={<LastNamePage />} />
        <Route path="/date-of-birth" element={<DOBPage />} />
        <Route path="*" element={<NotFoundPage />} /> {/* This will catch all unmatched paths */}
      </Routes>
    </Router>
  );
}

function NotFoundPage() {
  return <Navigate to="/"/>
}

export default App;
