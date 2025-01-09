import { createBrowserRouter } from "react-router";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddEvent from "../pages/AddEvent/AddEvent";
import AddGroup from "../pages/AddGroup/AddGroup";
import AddUser from "../pages/AddUser/AddUser";
import Admin from "../pages/Admin/Admin";
import Calendars from "../pages/Calendars/Calendars";
import HolidayRequest from "../pages/HolidayRequest/HolidayRequest";
import HolidayRequestStatus from "../pages/HolidayRequestStatus/HolidayRequestStatus";
import Information from "../pages/Informaton/Information";
import SubmitFeedback from "../pages/SubmitFeedback/SubmitFeedback";
import UserGuide from "../pages/UserGuide/UserGuide";
import ViewFeedback from "../pages/ViewFeedback/ViewFeedback";
import ViewHolidayRequest from "../pages/ViewHolidayRequest/ViewHolidayRequest";
import { useState } from "react";

const [user, setUser] = useState('');
const [lightModeActive, setLightModeActive] = useState(true);
const [userLoggedIn, setUserLoggedIn] = useState(false);
const [activeLanguage, setActiveLanguage] = useState('Norwegian');
const [isAdmin, setIsAdmin] = useState(true);
const [isLeader, setIsLeader] = useState(true);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard lightModeActive={lightModeActive}  isAdmin={isAdmin} isLeader={isLeader} user={user} setUser={setUser} setLightModeActive={setLightModeActive} userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage} />,
    children: [
      {path: 'add-event', element: <AddEvent /> },
      {path: 'add-group', element: <AddGroup /> },
      {path: 'add-user', element: <AddUser isAdmin={isAdmin} setIsAdmin={setIsAdmin} isLeader={isLeader} setIsLeader={setIsLeader} user={user} setUser={setUser} /> },
      {path: 'admin', element: <Admin /> },
      {path: 'calendars', element: <Calendars /> },
      {path: 'holiday-request', element: <HolidayRequest /> },
      {path: 'holiday-request-status', element: <HolidayRequestStatus />},
      {path: 'information', element: <Information />},
      {path: 'submit-feedback', element: <SubmitFeedback />},
      {path: 'user-guide', element: <UserGuide />},
      {path: 'view-feedback', element: <ViewFeedback />},
      {path: 'view-holiday-request', element: <ViewHolidayRequest />},
    ]
  }
])