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
  }

  const Login = () => {
    // Send a login request
    // send Get request to get the person's userName and set userName to the logged in persons.
    // UserName = getUserName(); fetch()
    // setUser(user = `${userName}`);
    setUser(user = "Nora Norman")
    setUserLoggedIn(true);
  }

  const ChangeLanguageToNorwegian = () => {
    setActiveLanguage(activeLanguage = "Norwegian");
  }

  const ChangeLanguageToBritish = () => {
    setActiveLanguage(activeLanguage = "British");
  }

  const ChangeLanguageToAmerican = () => {
    setActiveLanguage(activeLanguage = "American");
  }

  return (
    <div className="container">
      <div className="topbar">
        <div className="left-container">
        <div className="logo"><img src="./images/Logo.png" alt="Image of the holiday application's logo." /></div>
        <div className="app-title"><h1>The Holiday application</h1></div>
        </div>
        <div className="right-container">
          <div className="light-dark-mode" onClick={() => setLightModeActive(!lightModeActive)}>
            <img src="./images/Light-Dark.png" alt="Light/dark mode icon for switching between light and dark mode." /> 
          </div>
          <div className="language-flag" onClick={() => setFlagOpen(!flagOpen)}>
            {activeLanguage === "Norwegian" && <img src="./images/Icon-flag.png" alt="Norwegian Flag icon for switching language." />}
            {activeLanguage === "British" && <img src="./images/Icon-flag.png" alt="British Flag icon for switching language." />}
            {activeLanguage === "American" && <img src="./images/Icon-flag.png" alt="American Flag icon for switching language." />}
          </div>
          <div className="profile" onClick={() => setProfileOpen(!profileOpen)}>
            <img src="./images/Profile-not-logged-in.png" alt="Profile icon." />
          </div>
        </div>
      </div>
      
      {flagOpen ? (
        <div className="flag-dropdown">
          <div className="norway" onClick={ChangeLanguageToNorwegian}>
            <img src="./images/Icon-flag.png" alt="Flag of Norway." />
          </div>

          <Divider />

          <div className="united-kingdom" onClick={ChangeLanguageToBritish}>
            <img src="./images/Icon-flag.png" alt="Flag of United Kingdom." />
          </div>
            
          <Divider />
              
          <div className="united-states" onClick={ChangeLanguageToAmerican}>
            <img src="./images/Icon-flag.png" alt="Flag of United States of America." />
          </div>

        </div>
      ) : <></>}

      {profileOpen ? (
        <div className="profile-dropdown">
         

            {userLoggedIn ? (
              <>
                <div className="user">{user}</div>
          
                <Divider />

                <div className="logout"><button className="btn" onClick={Logout}>LOGOUT</button></div>
              </>
              
            ) : (
            <div className="login"><button className="btn" onClick={Login}>LOGIN</button></div>
            )}
        </div>
      ) : <></>}
      
    </div>
  )
}

export default Topbar;