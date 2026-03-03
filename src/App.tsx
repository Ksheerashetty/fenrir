import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './SignupPage';
import Dashboard from './pages/Dashboard';
import ScanDetail from './pages/ScanDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/scan/:id" element={<ScanDetail />} />
      </Routes>
    </Router>
  );
}
export default App;