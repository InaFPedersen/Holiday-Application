import { useState } from "react";
import "./Topbar.css";
import Divider from "../Divider";
import FlagIcon from "../FlagIcon/FlagIcon";
import FlagDropdown from "../FlagDropdown/FlagDropdown";
import Logo from "../Logo/Logo";
import LightDarkModeIcon from "../LightDarkModeIcon/LightDarkModeIcon";

type Props = {
  user: string, 
  setUser: any, 
  lightModeActive: boolean, 
  setLightModeActive: any, 
  userLoggedIn: boolean, 
  setUserLoggedIn: any, 
  activeLanguage: string, 
  setActiveLanguage: any
}

const Topbar = ({user, setUser, lightModeActive, setLightModeActive, userLoggedIn, setUserLoggedIn, activeLanguage, setActiveLanguage} : Props) => {
  // Variables
  // const userName = "";

  // State
  const [profileOpen, setProfileOpen] = useState(false);
  const [flagOpen, setFlagOpen] = useState(false);

  const Logout = () => {
    // Send logout request
    
    setUserLoggedIn(userLoggedIn = false);
    setUser(user = "");
    setProfileOpen(false)
  }

  const Login = () => {
    // Send a login request
    // send Get request to get the person's userName and set userName to the logged in persons.
    // UserName = getUserName(); fetch()
    // setUser(user = `${userName}`);
    setUser(user = "Nora Norman")
    setUserLoggedIn(true);
    setProfileOpen(false)
  }

  const ToggleLightAndDarkMode = () => {
    setLightModeActive(!lightModeActive);
  }

  return (
    <div className={`${lightModeActive ? 'topbar-container-light' : 'topbar-container-dark'} ${lightModeActive ? 'component-light-mode' : 'component-dark-mode'}`}>
      <div className="topbar">
        <div className="left-container">
          {lightModeActive ? 
            <Logo mode="light"/>
            : 
            <Logo mode="light"/>
          }
        
        <div className="app-title">
          {activeLanguage === 'norwegian' ? <h1>Ferie applikasjonen</h1> : <h1>The Holiday application</h1>}
        </div>
        </div>
        <div className="right-container">
          <div className="light-dark-mode" onClick={ToggleLightAndDarkMode}>
            {lightModeActive ?
              <LightDarkModeIcon mode="light" />
              : 
              <LightDarkModeIcon mode="dark" /> 
            }
          </div>
          <div className="language-flag" onClick={() => setFlagOpen(!flagOpen)}>
            {lightModeActive ? 
            <>
              {activeLanguage === "norwegian" && 
                <FlagIcon country={"norway"} countryLanguage={"norwegian"} mode={"light"} />
              }
              {activeLanguage === "british" && 
                <FlagIcon country={"united-kingdom"} countryLanguage={"british"} mode={"light"} />
              }
              {activeLanguage === "american" && 
                <FlagIcon country={"united-states"} countryLanguage={"american"} mode={"light"} />
              }
            </> : <>
              {activeLanguage === "norwegian" && 
                <FlagIcon country={"norway"} countryLanguage={"norwegian"} mode={"dark"} />
              }
              {activeLanguage === "british" && 
                <FlagIcon country={"united-kingdom"} countryLanguage={"british"} mode={"dark"} />
              }
              {activeLanguage === "american" && 
                <FlagIcon country={"united-states"} countryLanguage={"american"} mode={"dark"} />
              }
            </>}
          </div>

          {lightModeActive ? 
            <div className="profile" onClick={() => setProfileOpen(!profileOpen)}>
            {userLoggedIn ? 
              <img className="topbar-img" src="./icons/logged-in-profile-icon-light.svg" alt="Profile icon, with green color symbolising logged in" /> 
              : 
              <img className="topbar-img" src="./icons/profile-icon-light.svg" alt="Profile icon, with black and white symbolising noone is logged in" />
            }
          </div> 
          :
          <div className="profile" onClick={() => setProfileOpen(!profileOpen)}>
            {userLoggedIn ? 
              <img className="topbar-img" src="./icons/logged-in-profile-icon-dark.svg" alt="Profile icon, with green color symbolising logged in" /> 
              : 
              <img className="topbar-img" src="./icons/profile-icon-dark.svg" alt="Profile icon, with black and white symbolising noone is logged in" />
            }
          </div>}
        </div>
      </div>
      
      {flagOpen ? (
        <FlagDropdown lightModeActive={lightModeActive} activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage} setFlagOpen={setFlagOpen} />
      ) : <></>}

      {profileOpen ? (
        <div className="profile-dropdown">
            {userLoggedIn ? (
              <>
                <div className="user">{user}</div>
          
                <Divider />

                {lightModeActive ? 
                  <div className="logout">
                    {activeLanguage === "Norwegian" ? 
                      <button className="btn" onClick={Logout}>
                        <img className="topbar-img" src="./icons/logout-btn-norwegian-light.svg" alt="Lys utgave av den norske logg ut knappen" />
                      </button> 
                      : 
                      <button className="btn" onClick={Logout}>
                        <img className="topbar-img" src="./icons/logout-btn-english-light.svg" alt="Light mode version of the english logout button" />
                      </button>
                    }
                  </div> 
                  : 
                  <div className="logout">
                    {activeLanguage === "Norwegian" ? 
                      <button className="btn" onClick={Logout}>
                        <img className="topbar-img" src="./icons/logout-btn-norwegian-dark.svg" alt="Mørk utgave av den norske logg ut knappen" />
                      </button> : 
                      <button className="btn" onClick={Logout}>
                        <img className="topbar-img" src="./icons/logout-btn-english-dark.svg" alt="Dark mode version of the english logout button" />
                      </button>
                    }
                  </div>
                }
              </>
              
            ) : (
              <>
              {lightModeActive ?
                <div className="login">
                  {activeLanguage === "Norwegian" ? 
                    <button className="btn" onClick={Login}>
                      <img className="topbar-img" src="./icons/login-btn-norwegian-light.svg" alt="Lys utgave av den norske logg inn knappen" />
                    </button> 
                    : 
                    <button className="btn" onClick={Login}>
                      <img className="topbar-img" src="./icons/login-btn-english-light.svg" alt="Light mode version of the english login button" />
                    </button>
                  }
                </div> 
                : 
                <div className="login">
                  {activeLanguage === "Norwegian" ? 
                    <button className="btn" onClick={Login}>
                      <img className="topbar-img" src="./icons/login-btn-norwegian-dark.svg" alt="Mørk utgave av den norske logg inn knappen" />
                    </button> 
                    : 
                    <button className="btn" onClick={Login}>
                      <img className="topbar-img" src="./icons/login-btn-english-dark.svg" alt="Dark mode version of the english login button" />
                    </button>
                  }
                </div> 
              }
              </>
            )}
        </div>
      ) : <></>}
      
    </div>
  )
}

export default Topbar;