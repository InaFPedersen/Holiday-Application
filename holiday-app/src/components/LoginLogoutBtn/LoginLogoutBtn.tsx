type Props = {
  language: string,
  mode: string,
  setProfileOpen: any,
  setUser: any
  setUserLoggedIn: any,
  status: string,
}

const LoginLogoutBtn = ({language, mode, status, setProfileOpen, setUser, setUserLoggedIn }: Props) => {

  const HandleAction = (action: string) => {

    if (action === 'login') {
      // Send a login request
      // send Get request to get the person's userName and set userName to the logged in persons.
      // UserName = getUserName(); fetch()
      // setUser(user = `${userName}`);
      setUser('Nora Normann');
      setUserLoggedIn(true);
    }
    else {
      // Send logout request
      setUser('');
      setUserLoggedIn(false);
    }

    // Do something norwegian
    //./icons/login-btn-norwegian-light
    setProfileOpen(false)
  }


  return (
    <div className='action-btn' onClick={() => HandleAction(`${status}`)}>
      <img className={`${status}-img`} src={`./icons/${status}-btn-${language}-${mode}.svg`} alt={`The ${mode} version of the ${language} ${status} button.`} />
    </div>
  )
}

export default LoginLogoutBtn;