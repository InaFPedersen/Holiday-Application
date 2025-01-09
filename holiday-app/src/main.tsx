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
import EditUser from "./pages/EditUser/EditUser.tsx";


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

        <Route path='/add-event' element={<AddEvent lightModeActive={lightModeActive} setLightModeActive={setLightModeActive} user={user} setUser={setUser} userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage} />} />

        <Route path='/add-group' element={<AddGroup lightModeActive={lightModeActive} setLightModeActive={setLightModeActive} user={user} setUser={setUser} userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage} />} />

        <Route path='/add-user' element={<AddUser isAdmin={isAdmin} setIsAdmin={setIsAdmin} isLeader={isLeader} setIsLeader={setIsLeader} user={user} setUser={setUser} lightModeActive={lightModeActive} setLightModeActive={setLightModeActive} userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage} />} />

        <Route path='/admin' element={<Admin isAdmin={isAdmin} setIsAdmin={setIsAdmin} isLeader={isLeader} setIsLeader={setIsLeader} user={user} setUser={setUser} lightModeActive={lightModeActive} setLightModeActive={setLightModeActive} userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage} />} />

        <Route path='/calendars' element={<Calendars lightModeActive={lightModeActive} setLightModeActive={setLightModeActive} user={user} setUser={setUser} userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage} />} />

        <Route path='/edit-user' element={<EditUser isAdmin={isAdmin} setIsAdmin={setIsAdmin} isLeader={isLeader} setIsLeader={setIsLeader} user={user} setUser={setUser} lightModeActive={lightModeActive} setLightModeActive={setLightModeActive} userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage} />} />

        <Route path='/holiday-request' element={<HolidayRequest lightModeActive={lightModeActive} setLightModeActive={setLightModeActive} user={user} setUser={setUser} userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage} />} />

        <Route path='/holiday-request-status' element={<HolidayRequestStatus lightModeActive={lightModeActive} setLightModeActive={setLightModeActive} user={user} setUser={setUser} userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage} />} />

        <Route path='/information' element={<Information lightModeActive={lightModeActive} setLightModeActive={setLightModeActive} user={user} setUser={setUser} userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage} />} />

        <Route path='/submit-feedback' element={<SubmitFeedback lightModeActive={lightModeActive} setLightModeActive={setLightModeActive} user={user} setUser={setUser} userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage} />} />

        <Route path='/user-guide' element={<UserGuide lightModeActive={lightModeActive} setLightModeActive={setLightModeActive} user={user} setUser={setUser} userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage} />} />

        <Route path='/view-feedback' element={<ViewFeedback isAdmin={isAdmin} setIsAdmin={setIsAdmin} isLeader={isLeader} setIsLeader={setIsLeader} user={user} setUser={setUser} lightModeActive={lightModeActive} setLightModeActive={setLightModeActive} userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage} />} />

        <Route path='/view-holiday-request' element={<ViewHolidayRequest isAdmin={isAdmin} setIsAdmin={setIsAdmin} isLeader={isLeader} setIsLeader={setIsLeader} user={user} setUser={setUser} lightModeActive={lightModeActive} setLightModeActive={setLightModeActive} userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage} />} />

      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<Main />);
