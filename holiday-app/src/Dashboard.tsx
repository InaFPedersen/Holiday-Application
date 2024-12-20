import { useState } from 'react';
import Topbar from './components/Topbar/Topbar'
import './Dashboard.css'

const Dashboard = () => {
  // Global states
  const [user, setUser] = useState('');
  const [lightModeActive, setLightModeActive] = useState(true);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState('Norwegian');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLeader, setIsLeader] = useState(false);

  return (
    <div className='grid-container'>
      <div className='header'>
        <Topbar user={user} setUser={setUser} lightModeActive={lightModeActive} setLightModeActive={setLightModeActive} userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage} />
      </div>

      <h1 className='welcome-message'>Hello {user}!</h1>

      <div className='navigation-container'>
        <div className='box'>
          {isAdmin ? (
            <>
              <button className='icon-button information'>Information</button>
              <button className='icon-button user-guide'>user-guide</button>
              <button className='icon-button calendars'>calendars</button>
              <button className='icon-button holiday-request'>holiday-request</button>
              <button className='icon-button requests-status'>requests-status</button>
              <button className='icon-button add-group'>add-group</button>
              <button className='icon-button submit-feedback'>submit-feedback</button>

              <button className='icon-button admin-page'>Admin page</button>
              <button className='icon-button view-feedback'>View feedback</button>
              {isLeader && <button className='icon-button view-holiday-requests'>View holiday request</button>}
            </>
          ) : (
            <>
              <button className='icon-button information'>Information</button>
              <button className='icon-button user-guide'>user-guide</button>
              <button className='icon-button calendars'>calendars</button>
              <button className='icon-button holiday-request'>holiday-request</button>
              <button className='icon-button requests-status'>requests-status</button>
              <button className='icon-button add-group'>add-group</button>
              <button className='icon-button submit-feedback'>submit-feedback</button>
            </>
          )}
        </div>
      </div>

      <div className='personal-container'>
        <div className='calendar'>Personal calendar here</div>
      </div>
    </div>
  )
}

export default Dashboard