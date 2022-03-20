import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Register from './pages/Register'
import Home from './pages/home'
import Course from './pages/course'
import Cooperate from './pages/Cooperate'
import CourseDetail from './pages/CourseDetail'
import Payment from './pages/Payment'
import Profile from './pages/Profile/Index'
import Team from './pages/Team'
import Info from './pages/Profile/Info'
import ProfileCourse  from './pages/Profile/ProfileCourse'
import ProfileProject from './pages/Profile/ProfileProject'
import ProfilePayment from './pages/Profile/ProfilePayment'
import ProfileCoin   from './pages/Profile/ProfileCoin'
import Page404 from './pages/Page404'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route element={<MainLayout/>}>
        <Route path="/" element={<Home />}/>
        <Route path="/khoa-hoc" element={<Course />}/>
        <Route path="/hop-tac" element={<Cooperate />}/>
        <Route path="/khoa-hoc/:slug" element={<CourseDetail />}/>
        <Route path="/ca-nhan" element={<Profile />}>
           <Route index element={<Info />}/>
           <Route path="khoa-hoc-cua-ban" element={<ProfileCourse />}/>
           <Route path="du-an-da-lam" element={<ProfileProject />}/>
           <Route path="lich-su-thanh-toan" element={<ProfilePayment />}/>  
           <Route path="quan-ly-coin" element={<ProfileCoin />}/>  
        </Route> 
        <Route path="/thanh-vien" element={<Team />}/>
        <Route path="/huon-dan-thanh-toan" element={<Payment />}/>
        <Route path="*" element={<Page404 />}/>
        </Route>
      </Routes>
      {/* <MainLayout>
        <Register/>
      </MainLayout> */}
    </div>
  )
}

export default App
