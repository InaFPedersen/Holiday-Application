import Divider from "../Divider"
import LoginLogoutBtn from "../LoginLogoutBtn/LoginLogoutBtn"

type Props = {
  activeLanguage: string,
  lightModeActive: boolean,
  setProfileOpen: any,
  setUser: any,
  setUserLoggedIn: any,
  user: string,
  userLoggedIn: boolean
}

const ProfileDropdown = ({activeLanguage, lightModeActive, setProfileOpen, setUser, setUserLoggedIn, user, userLoggedIn}: Props) => {

  return (
    <div className={`profile-dropdown ${lightModeActive ? 'component-light-mode' : 'component-dark-mode' }`}>
      {userLoggedIn ?
        <>
          <div className="user">{user}</div>

          <Divider />

          <div className="logout">
            {lightModeActive ?
              <>
                {activeLanguage === 'norwegian' ?
                  <>
                      <LoginLogoutBtn language={"norwegian"} mode={"light"} setProfileOpen={setProfileOpen} setUser={setUser} setUserLoggedIn={setUserLoggedIn} status={"logout"} />
                  </> 
                  : 
                  <>
                    <LoginLogoutBtn language={"english"} mode={"light"} setProfileOpen={setProfileOpen} setUser={setUser} setUserLoggedIn={setUserLoggedIn} status={"logout"} />
                  </>
                }
              </> 
              : 
              <>
              {activeLanguage === 'norwegian' ?
                  <>
                      <LoginLogoutBtn language={"norwegian"} mode={"dark"} setProfileOpen={setProfileOpen} setUser={setUser} setUserLoggedIn={setUserLoggedIn} status={"logout"} />
                  </> 
                  : 
                  <>
                    <LoginLogoutBtn language={"english"} mode={"dark"} setProfileOpen={setProfileOpen} setUser={setUser} setUserLoggedIn={setUserLoggedIn} status={"logout"} />
                  </>
                }
              </>
            }
          </div>
        </> 
        : 
        <>
          <div className="user"></div>

          <Divider />

          <div className="login">
              {lightModeActive ?
              <>
                {activeLanguage === 'norwegian' ?
                  <>
                      <LoginLogoutBtn language={"norwegian"} mode={"light"} setProfileOpen={setProfileOpen} setUser={setUser} setUserLoggedIn={setUserLoggedIn} status={"login"} />
                  </> 
                  : 
                  <>
                    <LoginLogoutBtn language={"english"} mode={"light"} setProfileOpen={setProfileOpen} setUser={setUser} setUserLoggedIn={setUserLoggedIn} status={"login"} />
                  </>
                }
              </> 
              : 
              <>
              {activeLanguage === 'norwegian' ?
                  <>
                      <LoginLogoutBtn language={"norwegian"} mode={"dark"} setProfileOpen={setProfileOpen} setUser={setUser} setUserLoggedIn={setUserLoggedIn} status={"login"} />
                  </> 
                  : 
                  <>
                    <LoginLogoutBtn language={"english"} mode={"dark"} setProfileOpen={setProfileOpen} setUser={setUser} setUserLoggedIn={setUserLoggedIn} status={"login"} />
                  </>
                }
              </>
            }
          </div>
        </> 
      }
    </div>
  )

}

export default ProfileDropdown;