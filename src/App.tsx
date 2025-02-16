import { Routes, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './App.css'
import './index.css';
import Auth from './pages/Auth';
import Main from './pages/Main';
import ProtectedRoute from './components/ProtectedRoute';

function isUserAuthenticated() {
  const userData = localStorage.getItem("user"); 

  if (!userData) return false; 

  try {
    const parsedUser = JSON.parse(userData); 
    return parsedUser.token && parsedUser.token.trim() !== "";
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return false; 
  }
}


function App() {
  const isAuthenticated = isUserAuthenticated();

  return (
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/home"
          element={<ProtectedRoute element={<Main />} isAuthenticated={isAuthenticated} />}
        />
      </Routes>
  );
}

export default App
