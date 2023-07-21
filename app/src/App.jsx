import './App.css';
import MainPage from './Pages/MainPage/MainPage';
import MyPageFreelancer from './Pages/MyPageFreelancer';
import MyPageCompany from './Pages/MyPageCompany';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import NameCardList from './Pages/NameCardList';
import Header from './Components/Commons/Layouts/Header';
import Footer from './Components/Commons/Layouts/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="mypageuser/:userId" element={<MyPageFreelancer />}></Route>
        <Route path="notice/card/:noticeId" element={<NameCardList />}></Route>
        <Route path="mypagecompany/:userId" element={<MyPageCompany />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
