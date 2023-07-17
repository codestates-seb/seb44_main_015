import './App.css';
import Main from './Pages/Main';
import EmploymentDetail from './Pages/EmploymentDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmploymentList from './Pages/EmploymentList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmploymentDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
