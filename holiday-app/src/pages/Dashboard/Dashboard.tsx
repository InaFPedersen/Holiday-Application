import Topbar from '../../components/Topbar/Topbar'
import './Dashboard.css'
import Navigation from '../../components/Navigation/Navigation';
import Calendar from '../../components/Calendar/Calendar';

type Props = {
  lightModeActive: boolean, 
  setLightModeActive: any,
  isAdmin: boolean,
  isLeader: boolean,
  user: string,
  setUser: any,
  userLoggedIn: boolean,
  setUserLoggedIn: any,
  activeLanguage: string,
  setActiveLanguage: any
}

const Dashboard = ({lightModeActive, isAdmin, isLeader, user, setUser, setLightModeActive, userLoggedIn, setUserLoggedIn, activeLanguage, setActiveLanguage} : Props) => {
  
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