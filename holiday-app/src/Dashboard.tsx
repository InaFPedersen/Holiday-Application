import { useState } from 'react';
import Topbar from './components/Topbar/Topbar'
import './Dashboard.css'
import Divider from './components/Divider';

const Dashboard = () => {
  // Global states
  const [user, setUser] = useState('');
  const [lightModeActive, setLightModeActive] = useState(true);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState('Norwegian');
  const [isAdmin, setIsAdmin] = useState(true);
  const [isLeader, setIsLeader] = useState(true);

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
            {lightModeActive ? 
              <>
                <button className='icon-button information'>
                  <img src="./icons/information-icon-light.svg" alt="Light mode version of the Information icon button" />
                </button>
                <button className='icon-button user-guide'>
                  <img src="./icons/user-guide-icon-light.svg" alt="Light mode version of the User Guide icon button" />
                </button>
                <button className='icon-button calendars'>
                  <img src="./icons/calendar-icon-light.svg" alt="Light mode version of the Calendars icon button" />
                </button>
                <button className='icon-button holiday-request'>
                  <img src="./icons/holiday-request-icon-light.svg" alt="Light mode version of the Holiday Request icon button" />
                </button>
                <button className='icon-button add-group'>
                  <img src="./icons/add-group-icon-light.svg" alt="Light mode version of the Add Group icon button" />
                </button>
                <button className='icon-button submit-feedback'>
                  <img src="./icons/submit-feedback-icon-light.svg" alt="Light mode version of the Submit Feedback icon button" />
                </button>
                <button className='icon-button holiday-request-status'>
                  <img src="./icons/holiday-request-status-icon-light.svg" alt="Light mode version of the Holiday Request Status icon button" />
                </button>

                <Divider />

                <button className='icon-button admin-page'>
                  <img src="./icons/admin-page-icon-light.svg" alt="Light mode version of the Admin Page icon button" />
                </button>
                <button className='icon-button view-feedback'>
                  <img src="./icons/view-feedback-icon-light.svg" alt="Light mode version of the View Feedback icon button" />
                </button>
                <button className='icon-button add-user'>
                  <img src="./icons/add-user-icon-light.svg" alt="Light mode version of the Add User icon button" />
                </button>
                <button className='icon-button view-holiday-request'>
                  <img src="./icons/view-holiday-request-icon-light.svg" alt="Light mode version of the View Holiday Request icon button" />
                </button>
              </> 
              : 
              <>
                <button className='icon-button information'>
                  <img src="./icons/information-icon-dark.svg" alt="Dark mode version of the Information icon button" />
                </button>
                <button className='icon-button user-guide'>
                  <img src="./icons/user-guide-icon-dark.svg" alt="Dark mode version of the User Guide icon button" />
                </button>
                <button className='icon-button calendars'>
                  <img src="./icons/calendar-icon-dark.svg" alt="Dark mode version of the Calendars icon button" />
                </button>
                <button className='icon-button holiday-request'>
                  <img src="./icons/holiday-request-icon-dark.svg" alt="Dark mode version of the Holiday Request icon button" />
                </button>
                <button className='icon-button add-group'>
                  <img src="./icons/add-group-icon-dark.svg" alt="Dark mode version of the Add Group icon button" />
                </button>
                <button className='icon-button submit-feedback'>
                  <img src="./icons/submit-feedback-icon-dark.svg" alt="Dark mode version of the Submit Feedback icon button" />
                </button>
                <button className='icon-button holiday-request-status'>
                  <img src="./icons/holiday-request-status-icon-dark.svg" alt="Dark mode version of the Holiday Request Status icon button" />
                </button>

                <Divider />

                <button className='icon-button admin-page'>
                  <img src="./icons/admin-page-icon-dark.svg" alt="Dark mode version of the Admin Page icon button" />
                </button>
                <button className='icon-button view-feedback'>
                  <img src="./icons/view-feedback-icon-dark.svg" alt="Dark mode version of the View Feedback icon button" />
                </button>
                <button className='icon-button add-user'>
                  <img src="./icons/add-user-icon-dark.svg" alt="Dark mode version of the Add User icon button" />
                </button>
                <button className='icon-button view-holiday-request'>
                  <img src="./icons/view-holiday-request-icon-dark.svg" alt="Dark mode version of the View Holiday Request icon button" />
                </button>
              </>
            }
            </>
          ) : (
            <>
            {lightModeActive ? 
              <>
                <button className='icon-button information'>
                  <img src="./icons/information-icon-light.svg" alt="Light mode version of the Information icon button" />
                </button>
                <button className='icon-button user-guide'>
                  <img src="./icons/user-guide-icon-light.svg" alt="Light mode version of the User Guide icon button" />
                </button>
                <button className='icon-button calendars'>
                  <img src="./icons/calendar-icon-light.svg" alt="Light mode version of the Calendars icon button" />
                </button>
                <button className='icon-button holiday-request'>
                  <img src="./icons/holiday-request-icon-light.svg" alt="Light mode version of the Holiday Request icon button" />
                </button>
                <button className='icon-button add-group'>
                  <img src="./icons/add-group-icon-light.svg" alt="Light mode version of the Add Group icon button" />
                </button>
                <button className='icon-button submit-feedback'>
                  <img src="./icons/submit-feedback-icon-light.svg" alt="Light mode version of the Submit Feedback icon button" />
                </button>
                <button className='icon-button holiday-request-status'>
                  <img src="./icons/holiday-request-status-icon-light.svg" alt="Light mode version of the Holiday Request Status icon button" />
                </button>

                {isLeader && 
                  <>
                  <Divider />

                    <button className='icon-button add-user'>
                      <img src="./icons/add-user-icon-light.svg" alt="Light mode version of the Add User icon button" />
                    </button>
                    <button className='icon-button view-holiday-request'>
                      <img src="./icons/view-holiday-request-icon-light.svg" alt="Light mode version of the View Holiday Request icon button" />
                    </button>
                  </>
                }
              </> 
              : 
              <>
                <button className='icon-button information'>
                  <img src="./icons/information-icon-dark.svg" alt="Dark mode version of the Information icon button" />
                </button>
                <button className='icon-button user-guide'>
                  <img src="./icons/user-guide-icon-dark.svg" alt="Dark mode version of the User Guide icon button" />
                </button>
                <button className='icon-button calendars'>
                  <img src="./icons/calendar-icon-dark.svg" alt="Dark mode version of the Calendars icon button" />
                </button>
                <button className='icon-button holiday-request'>
                  <img src="./icons/holiday-request-icon-dark.svg" alt="Dark mode version of the Holiday Request icon button" />
                </button>
                <button className='icon-button add-group'>
                  <img src="./icons/add-group-icon-dark.svg" alt="Dark mode version of the Add Group icon button" />
                </button>
                <button className='icon-button submit-feedback'>
                  <img src="./icons/submit-feedback-icon-dark.svg" alt="Dark mode version of the Submit Feedback icon button" />
                </button>
                <button className='icon-button holiday-request-status'>
                  <img src="./icons/holiday-request-status-icon-dark.svg" alt="Dark mode version of the Holiday Request Status icon button" />
                </button>

                {isLeader && 
                  <>
                    <Divider />
                
                    <button className='icon-button add-user'>
                      <img src="./icons/add-user-icon-dark.svg" alt="Dark mode version of the Add User icon button" />
                    </button>
                    <button className='icon-button view-holiday-request'>
                      <img src="./icons/view-holiday-request-icon-dark.svg" alt="Dark mode version of the View Holiday Request icon button" />
                    </button>
                  </>
                }
              </>
            }
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