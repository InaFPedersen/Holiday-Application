import { useState } from "react";

type Props = {
  isAdmin: boolean,
  setIsAdmin: any,
  isLeader: boolean,
  setIsLeader: any,
  user: string,
  setUser: any,
}

const Form = ({isAdmin, setIsAdmin, isLeader, setIsLeader, user, setUser} : Props) => {
  //code here
  const [adminChecked, setAdminChecked] = useState(false);
  const [leaderChecked, setLeaderChecked] = useState(false);

  const SetAsAdmin = () => {
    setAdminChecked(!adminChecked);

    if(adminChecked){
      setIsAdmin(true);
    }
  }

  const SetAsLeader = () => {
    setLeaderChecked(!leaderChecked);

    if(leaderChecked){
      setIsLeader(true);
    }
  }

  return (
    <div className="container">
      <h1>Form</h1>
      <label>
        Is a Admin
        <input id='admin-checkbox' className='admin-checkbox' type='checkbox' checked={adminChecked} onChange={SetAsAdmin} />
      </label>
      <label>
        Is a Leader
        <input id='leader-checkbox' className='leader-checkbox' type='checkbox' checked={leaderChecked} onChange={SetAsLeader} />
      </label>
    </div>
  )
}

export default Form;