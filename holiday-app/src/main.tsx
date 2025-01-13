import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, data } from "react-router-dom";
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
  const [activeLanguage, setActiveLanguage] = useState<'norwegian' | 'british' | 'american' | 'english'>('norwegian'); 
  const [isAdmin, setIsAdmin] = useState(true);
  const [isLeader, setIsLeader] = useState(true);
  const events = [
    { id: 1, title: 'New Years’s Day', date: new Date(2025, 0 , 1) },
    { id: 2, title: 'Valentine’s Day', date: new Date(2025, 1, 14) },
    { id: 1, title: 'Palm Sunday', date: new Date(2025, 3 , 13) },
    { id: 2, title: 'Holy Thursday', date: new Date(2025, 3, 17) },
    { id: 2, title: 'Good Friday', date: new Date(2025, 3, 18) },
    { id: 2, title: 'Easter Day', date: new Date(2025, 3, 20) },
    { id: 2, title: 'Second Easter Day', date: new Date(2025, 3, 21) },
    { id: 2, title: 'Arbeidernes dag', date: new Date(2025, 4, 1) },
    { id: 2, title: 'Grunnlovsdag', date: new Date(2025, 4, 17) },
    { id: 1, title: 'Christmas Eve', date: new Date(2025, 11 , 24) },
    { id: 2, title: 'Christmas Day', date: new Date(2025, 11, 25) },
    { id: 2, title: 'Second Day of Christmas', date: new Date(2025, 11, 26) },
    { id: 2, title: 'New Years’s Eve', date: new Date(2025, 11, 31) },
  ]

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard events={events} lightModeActive={lightModeActive}  isAdmin={isAdmin} isLeader={isLeader} user={user} setUser={setUser} setLightModeActive={setLightModeActive} userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage}/>} />

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
