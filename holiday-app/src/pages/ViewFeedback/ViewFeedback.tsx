import { useNavigate } from "react-router";
import Topbar from "../../components/Topbar/Topbar";
import Divider from "../../components/Divider";

type Props = {
  isAdmin: boolean,
  setIsAdmin: any,
  isLeader: boolean,
  setIsLeader: any,
  lightModeActive: boolean, 
  setLightModeActive: any,
  user: string,
  setUser: any,
  userLoggedIn: boolean,
  setUserLoggedIn: any,
  activeLanguage: string,
  setActiveLanguage: any
}

const ViewFeedback = ({isAdmin, setIsAdmin, isLeader, setIsLeader, user, setUser, activeLanguage, setActiveLanguage, lightModeActive, setLightModeActive, userLoggedIn, setUserLoggedIn, } : Props) => {
  const navigate = useNavigate();

  const HandleBackBtnClick = () => {
    navigate('/');
  }

  return (

    <div className={lightModeActive ? 'page-light-mode' : 'page-dark-mode'}>
      <div className='container'>
        <div className='container-header'>
          <Topbar user={user} setUser={setUser} lightModeActive={lightModeActive} setLightModeActive={setLightModeActive} userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage} />
        </div>
        <div className='container-body '>
          {lightModeActive ? 
            <header className="page-header">
              {activeLanguage === 'Norwegian' ?
                <div className="flex-container">
                  <div className="back-btn" onClick={HandleBackBtnClick}>
                    <img className="back-btn-img-light" src="./icons/back-btn-norwegian-light.svg" alt="Lys tilbake knapp norsk utgave" max-width={550} max-height={550} />
                  </div>
                  <h1>Se Tilbakemeldinger</h1>
                </div>
                :
                <div className="flex-container">
                  <div className="back-btn" onClick={HandleBackBtnClick}>
                    <img className="back-btn-img-light" src="./icons/back-btn-english-light.svg" alt="Light back button english version" />
                  </div>
                  <h1>View Feedback</h1>
                </div>
              }
              <Divider />
            </header>
            :
            <header className="page-header">
              {activeLanguage === 'Norwegian' ?
                <div className="flex-container">
                  <div className="back-btn" onClick={HandleBackBtnClick}>
                    <img className="back-btn-img-dark" src="./icons/back-btn-norwegian-dark.svg" alt="Mørk tilbake knapp norsk utgave" />
                  </div>
                  <h1>Se Tilbakemeldinger</h1>
                </div>
                :
                <div className="flex-container">
                  <div className="back-btn" onClick={HandleBackBtnClick}>
                    <img className="back-btn-img-dark" src="./icons/back-btn-english-dark.svg" alt="Dark back button english version" />
                  </div>
                  <h1>View Feedback</h1>
                </div>
              }
              <Divider />
            </header>
          }
          
        </div>
      </div>
    </div>
    
  )
}

export default ViewFeedback;