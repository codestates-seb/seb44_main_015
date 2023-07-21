import './App.css';
import MainPage from './Pages/Main';
import EmploymentDetail from './Pages/EmploymentDetail';
import EmploymentList from './Pages/EmploymentList';
import MyPageFreelancer from './Pages/MyPageFreelancer';
import MyPageCompany from './Pages/MyPageCompany';
import Login from './Pages/LogIn';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import NameCardList from './Pages/NameCardList';

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
        <Route path="mypageuser/:userId" element={<MyPageFreelancer />}></Route>
        <Route path="notice/card/:noticeId" element={<NameCardList />}></Route>
        <Route path="mypagecompany/:userId" element={<MyPageCompany />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
//ok
