import './App.css';
import MainPage from './Pages/MainPage/MainPage';
import MyPageFreelancer from './Pages/MyPageFreelancer';
import MyPageCompany from './Pages/MyPageCompany';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NameCardList from './Pages/NameCardList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/mypagefreelancer" element={<MyPageFreelancer />}></Route>
        <Route path="/namecardlist" element={<NameCardList />}></Route>
        <Route path="/mypagecompany" element={<MyPageCompany />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
