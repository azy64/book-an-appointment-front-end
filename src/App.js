import { Route, Routes, Outlet } from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

import Home from './components/dashboard/Home';
import SideBar from './components/dashboard/SideBar';
import Reservations from './components/dashboard/Reservations';
import DoctorList from './components/dashboard/DoctorList';
import BookAppointment from './components/dashboard/BookAppointment';
import DoctorDetail from './components/dashboard/DoctorDetail';

import './app.css';

const SidebarLayout = () => (
  <>
    <SideBar />
    <Outlet />
  </>
);

function App() {
  return (
    <div className="body-style">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<SidebarLayout />}>
          <Route path="/user/dashboard" element={<Home />} />
          <Route path="/user/reservation" element={<Reservations />} />
          <Route path="/user/doctors" element={<DoctorList />} />
          <Route path="/user/doctors/:id" element={<DoctorDetail />} />
          <Route path="/user/appointments" element={<BookAppointment />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
