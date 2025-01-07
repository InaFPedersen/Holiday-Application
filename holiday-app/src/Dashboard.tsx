import { useState } from 'react';
import Topbar from './components/Topbar/Topbar'
import './Dashboard.css'
import Divider from './components/Divider';
import Navigation from './components/Navigation/Navigation';
import Calendar from './components/Calendar/Calendar';

const Dashboard = () => {
  // Global states
  const [user, setUser] = useState('');
  const [lightModeActive, setLightModeActive] = useState(true);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState('Norwegian');
  const [isAdmin, setIsAdmin] = useState(true);
  const [isLeader, setIsLeader] = useState(true);

  return (
    <div className={lightModeActive ? 'light-mode' : 'dark-mode'}>
      <div className='grid-container'>
        <div className='header'>
          <Topbar user={user} setUser={setUser} lightModeActive={lightModeActive} setLightModeActive={setLightModeActive} userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage} />
        </div>

        <h1 className='welcome-message'>Hello {user}!</h1>

        <div className='navigation-container'>
          <Navigation lightModeActive={lightModeActive}  isAdmin={isAdmin} isLeader={isLeader}/>
        </div>

        <div className='personal-container'>
          <Calendar lightModeActive={lightModeActive} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard