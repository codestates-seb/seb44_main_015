import "./App.css";
import MainPage from "./Pages/Main";
import EmploymentDetail from "./Pages/EmploymentDetail";
import EmploymentList from "./Pages/EmploymentList";
import MyPageFreelancer from "./Pages/MyPageFreelancer";
import MyPageCompany from "./Pages/MyPageCompany";
import Login from "./Pages/LogIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NameCardList from "./Pages/NameCardList";
import Profile from "./Pages/Profile";
import Maker from "./Pages/Maker";
import Signup from "./Pages/SignUp";
import Surfing from "./Pages/Surfing";
import TestModal from "./Pages/TestModal";
import PostEmployment from "./Pages/PostEmployment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<TestModal />}></Route> */}
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/employmentlist" element={<EmploymentList />}></Route>
        <Route
          path="/employmentdetail/:noticeId"
          element={<EmploymentDetail />}
        ></Route>
        <Route path="mypageuser/:userId" element={<MyPageFreelancer />}></Route>
        <Route path="notice/card/:noticeId" element={<NameCardList />}></Route>
        <Route path="mypagecompany/:userId" element={<MyPageCompany />}></Route>
        <Route path="user/:userId" element={<Profile />}></Route>
        <Route path="maker" element={<Maker />}></Route>
        <Route path="/surfing" element={<Surfing />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/post/notice" element={<PostEmployment />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
