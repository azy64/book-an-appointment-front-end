import { Route, Routes, Outlet } from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Home from './components/dashboard/Home';
import SideBar from './components/dashboard/SideBar';

const SidebarLayout = () => (
  <>
    <SideBar />
    <Outlet />
  </>
);

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<SidebarLayout />}>
          <Route path="/user/dashboard" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
