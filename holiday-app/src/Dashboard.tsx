import { useState } from 'react';
import Topbar from './components/Topbar/Topbar'
import './Dashboard.css'

const Dashboard = () => {
  // Global states
  const [user, setUser] = useState('');
  const [lightModeActive, setLightModeActive] = useState(true);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState('Norwegian')

  return (
    <div className='grid-container'>
      <div className='header'>
        <Topbar user={user} setUser={setUser} lightModeActive={lightModeActive} setLightModeActive={setLightModeActive} userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage} />
      </div>
      <h1 className='welcome-message'>Hello {user}!</h1>
      <div className='navigation-container'>Test</div>
      <div className='personal-container'>Test</div>
    </div>
  )
}

export default Dashboard