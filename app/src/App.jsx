import './App.css';
import MainPage from './Pages/Main';
import EmploymentDetail from './Pages/EmploymentDetail';
import EmploymentList from './Pages/EmploymentList';
import Login from './Pages/Login';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/* <Route path="/signup" element={<Signup />}></Route> */}
        <Route path="/employmentlist" element={<EmploymentList />}></Route>
        <Route
          path="/employmentdetail/:noticeId"
          element={<EmploymentDetail />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
//ok
