import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import LogIn from './components/LogIn/LogIn';
import EntryPage from './components/EntryPage/EntryPage';
import AddJournel from './components/AddJournel/AddJournel';
import Journel from './components/Journel/Journel';
function App() {
  return (
    <BrowserRouter>
      <Routes className="app">
        <Route path="/" element={<EntryPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addJournel" element={<AddJournel />} />
        <Route path="/watchJournel" element={<Journel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

