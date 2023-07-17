import './App.css';
import Main from './Pages/Main';
import EmploymentPage from './Pages/EmploymentPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmploymentPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
