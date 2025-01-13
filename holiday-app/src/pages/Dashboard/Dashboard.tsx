import Topbar from '../../components/Topbar/Topbar'
import './Dashboard.css'
import Navigation from '../../components/Navigation/Navigation';
import Calendar from '../../components/Calendar/Calendar';
import CalendarEvent from '../../interfaces/CalendarEvents';

type Props = {
  events: CalendarEvent[]
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

const Dashboard = ({events, lightModeActive, isAdmin, isLeader, user, setUser, setLightModeActive, userLoggedIn, setUserLoggedIn, activeLanguage, setActiveLanguage} : Props) => {
  
  return (
    <div className={lightModeActive ? 'page-light-mode' : 'page-dark-mode'}>
      <div className='container'>
        <div className='container-header'>
          <Topbar user={user} setUser={setUser} lightModeActive={lightModeActive} setLightModeActive={setLightModeActive} userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage} />
        </div>
        <div className='container-body grid-container'>
          <h1 className='welcome-message'>Hello {user}!</h1>

          <div className='navigation-container'>
            <Navigation lightModeActive={lightModeActive}  isAdmin={isAdmin} isLeader={isLeader}/>
          </div>

          <div className='personal-container'>
            <Calendar events={events} lightModeActive={lightModeActive} activelanguage={activeLanguage}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard