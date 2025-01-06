import { useState } from "react";
import "./Topbar.css";
import Divider from "../Divider";

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

  const ChangeLanguageToNorwegian = () => {
    setActiveLanguage(activeLanguage = "Norwegian");
    setFlagOpen(false);
  }

  const ChangeLanguageToBritish = () => {
    setActiveLanguage(activeLanguage = "British");
    setFlagOpen(false);
  }

  const ChangeLanguageToAmerican = () => {
    setActiveLanguage(activeLanguage = "American");
    setFlagOpen(false);
  }

  const ToggleLightAndDarkMode = () => {
    setLightModeActive(!lightModeActive)
  }

  return (
    <div className="container">
      <div className="topbar">
        <div className="left-container">
          {lightModeActive ? 
            <div className="logo">
              <img src="./icons/logo-fictional-icon-light.svg" alt="Image of the holiday application's logo." />
            </div> : 
            <div className="logo">
              <img src="./icons/logo-fictional-icon-dark.svg" alt="Image of the holiday application's logo." />
            </div> 
          }
        
        <div className="app-title">
          {activeLanguage === 'Norwegian' ? <h1>Ferie applikasjonen</h1> : <h1>The Holiday application</h1>}
        </div>
        </div>
        <div className="right-container">
          <div className="light-dark-mode" onClick={ToggleLightAndDarkMode}>
            {lightModeActive ?
              <img src="./icons/dark-light-icon-light.svg" alt="Light/dark mode icon for switching between light and dark mode." /> : <img src="./icons/dark-light-icon-dark.svg" alt="Light/dark mode icon for switching between light and dark mode." /> }
          </div>
          <div className="language-flag" onClick={() => setFlagOpen(!flagOpen)}>
            {lightModeActive ? <>
              {activeLanguage === "Norwegian" && 
              <img src="./icons/Norway-icon-light.svg" alt="Norwegian Flag icon for switching language." />}
              {activeLanguage === "British" && 
              <img src="./icons/UK-icon-light.svg" alt="British Flag icon for switching language." />}
              {activeLanguage === "American" && 
              <img src="./icons/USA-icon-light.svg" alt="American Flag icon for switching language." />}
            </> : <>
              {activeLanguage === "Norwegian" && 
              <img src="./icons/Norway-icon-dark.svg" alt="Norwegian Flag icon for switching language." />}
              {activeLanguage === "British" && 
              <img src="./icons/UK-icon-dark.svg" alt="British Flag icon for switching language." />}
              {activeLanguage === "American" && 
              <img src="./icons/USA-icon-dark.svg" alt="American Flag icon for switching language." />}
            </>}
          </div>

          {lightModeActive ? 
            <div className="profile" onClick={() => setProfileOpen(!profileOpen)}>
            {userLoggedIn ? 
            <img src="./icons/logged-in-profile-icon-light.svg" alt="Profile icon, with green color symbolising logged in" /> : 
            <img src="./icons/profile-icon-light.svg" alt="Profile icon, with black and white symbolising noone is logged in" />}
          </div> :
          <div className="profile" onClick={() => setProfileOpen(!profileOpen)}>
            {userLoggedIn ? 
            <img src="./icons/logged-in-profile-icon-dark.svg" alt="Profile icon, with green color symbolising logged in" /> : 
            <img src="./icons/profile-icon-dark.svg" alt="Profile icon, with black and white symbolising noone is logged in" />}
          </div>}
        </div>
      </div>
      
      {flagOpen ? (
        <div className="flag-dropdown">
          {lightModeActive ? <>
            <div className="norway" onClick={ChangeLanguageToNorwegian}>
              <img src="./icons/Norway-icon-light.svg" alt="Flag of Norway." />
            </div>

            <Divider />

            <div className="united-kingdom" onClick={ChangeLanguageToBritish}>
              <img src="./icons/UK-icon-light.svg" alt="Flag of United Kingdom." />
            </div>
              
            <Divider />
                
            <div className="united-states" onClick={ChangeLanguageToAmerican}>
              <img src="./icons/USA-icon-light.svg" alt="Flag of United States of America." />
            </div>
          </> : <>
            <div className="norway" onClick={ChangeLanguageToNorwegian}>
              <img src="./icons/Norway-icon-dark.svg" alt="Flag of Norway." />
            </div>

            <Divider />

            <div className="united-kingdom" onClick={ChangeLanguageToBritish}>
              <img src="./icons/UK-icon-dark.svg" alt="Flag of United Kingdom." />
            </div>
              
            <Divider />
                
            <div className="united-states" onClick={ChangeLanguageToAmerican}>
              <img src="./icons/USA-icon-dark.svg" alt="Flag of United States of America." />
            </div>
          </>}
          
        </div>
      ) : <></>}

      {profileOpen ? (
        <div className="profile-dropdown">
            {userLoggedIn ? (
              <>
                <div className="user">{user}</div>
          
                <Divider />

                <div className="logout">
                  {activeLanguage === "Norwegian" ? 
                  <button className="btn" onClick={Logout}>
                    LOGG UT
                  </button> : 
                  <button className="btn" onClick={Logout}>
                    LOGOUT
                  </button>}
                </div>
              </>
              
            ) : (
            <div className="login">
              {activeLanguage === "Norwegian" ? 
              <button className="btn" onClick={Login}>LOGG INN</button> : 
              <button className="btn" onClick={Login}>LOGIN</button>}
            </div>
            )}
        </div>
      ) : <></>}
      
    </div>
  )
}

export default Topbar;