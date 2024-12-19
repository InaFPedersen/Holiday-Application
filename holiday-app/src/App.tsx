
import { useState } from 'react';
import Topbar from './components/Topbar/Topbar'

function App() {

  // Global states
  const [user, setUser] = useState("");
  const [lightModeActive, setLightModeActive] = useState(true);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState("Norwegian")

  return (
    <div>
      <Topbar user={user} setUser={setUser} lightModeActive={lightModeActive} setLightModeActive={setLightModeActive} userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage} />
      <h1>Hello {user}!</h1>
    </div>
  )
}

export default App
