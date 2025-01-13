import { useState } from "react";
import FlagDropdown from "../FlagDropdown/FlagDropdown";
import FlagIcon from "../FlagIcon/FlagIcon";
import LightDarkModeIcon from "../LightDarkModeIcon/LightDarkModeIcon";
import Logo from "../Logo/Logo";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import "./Topbar.css";

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
  const [profileOpen, setProfileOpen] = useState(false);
  const [flagOpen, setFlagOpen] = useState(false);

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
            {activeLanguage === 'norwegian' ? 
              <h1>Ferie applikasjonen</h1> 
              : 
              <h1>The Holiday application</h1>}
          </div>
        </div>

        <div className="right-container">
          <div className="light-dark-mode" onClick={() => setLightModeActive(!lightModeActive)}>
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
              </> 
              : 
              <>
                {activeLanguage === "norwegian" && 
                  <FlagIcon country={"norway"} countryLanguage={"norwegian"} mode={"dark"} />
                }
                {activeLanguage === "british" && 
                  <FlagIcon country={"united-kingdom"} countryLanguage={"british"} mode={"dark"} />
                }
                {activeLanguage === "american" && 
                  <FlagIcon country={"united-states"} countryLanguage={"american"} mode={"dark"} />
                }
              </>
            }
          </div>

          <div className="profile" onClick={() => setProfileOpen(!profileOpen)}>
            {lightModeActive ? 
              <>
                {userLoggedIn ? 
                  <ProfileIcon mode={'light'} name={'logged-in-profile'} coloring={"green"} status={"logged in"} /> 
                  : 
                  <ProfileIcon mode={'light'} name={'profile'} coloring={"black and white"} status={"not logged in"} /> 
                }
              </> 
              :
              <>
                {userLoggedIn ? 
                  <ProfileIcon mode={'dark'} name={'logged-in-profile'} coloring={"green"} status={"logged in"} />
                  : 
                  <ProfileIcon mode={'dark'} name={'profile'} coloring={"black and white"} status={"not logged in"} />
                }
              </>
            }
          </div>
        </div>
      </div>
      
      {flagOpen ? (
        <FlagDropdown lightModeActive={lightModeActive} activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage} setFlagOpen={setFlagOpen} />
      ) : <></>}

      {profileOpen ? (
        <ProfileDropdown activeLanguage={activeLanguage} lightModeActive={lightModeActive} setProfileOpen={setProfileOpen} setUser={setUser} setUserLoggedIn={setUserLoggedIn} user={user} userLoggedIn={userLoggedIn} />
      ) : <></>}
    </div>
  )
}

export default Topbar;