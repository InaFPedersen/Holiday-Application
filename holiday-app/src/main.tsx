import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './index.css'
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
import AddEvent from "./pages/AddEvent/AddEvent.tsx";
import AddGroup from "./pages/AddGroup/AddGroup.tsx";
import AddUser from "./pages/AddUser/AddUser.tsx";
import ViewHolidayRequest from "./pages/ViewHolidayRequest/ViewHolidayRequest.tsx";
import ViewFeedback from "./pages/ViewFeedback/ViewFeedback.tsx";
import UserGuide from "./pages/UserGuide/UserGuide.tsx";
import SubmitFeedback from "./pages/SubmitFeedback/SubmitFeedback.tsx";
import Information from "./pages/Informaton/Information.tsx";
import HolidayRequestStatus from "./pages/HolidayRequestStatus/HolidayRequestStatus.tsx";
import HolidayRequest from "./pages/HolidayRequest/HolidayRequest.tsx";
import Calendars from "./pages/Calendars/Calendars.tsx";
import Admin from "./pages/Admin/Admin.tsx";


export default function Main () {
  const [user, setUser] = useState('');
  const [lightModeActive, setLightModeActive] = useState(true);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState('Norwegian');
  const [isAdmin, setIsAdmin] = useState(true);
  const [isLeader, setIsLeader] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard lightModeActive={lightModeActive}  isAdmin={isAdmin} isLeader={isLeader} user={user} setUser={setUser} setLightModeActive={setLightModeActive} userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage}/>} />
        <Route path='/add-event' element={<AddEvent />} />
        <Route path='/add-group' element={<AddGroup />} />
        <Route path='/add-user' element={<AddUser isAdmin={isAdmin} setIsAdmin={setIsAdmin} isLeader={isLeader} setIsLeader={setIsLeader} user={user} setUser={setUser} />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/calendars' element={<Calendars />} />
        <Route path='/holiday-request' element={<HolidayRequest />} />
        <Route path='/holiday-request-status' element={<HolidayRequestStatus />} />
        <Route path='/information' element={<Information />} />
        <Route path='/submit-feedback' element={<SubmitFeedback />} />
        <Route path='/user-guide' element={<UserGuide />} />
        <Route path='/view-feedback' element={<ViewFeedback />} />
        <Route path='/view-holiday-request' element={<ViewHolidayRequest />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<Main />);
