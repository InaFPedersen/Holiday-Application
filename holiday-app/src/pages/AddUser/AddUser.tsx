import Form from "../../components/Form/Form";

type Props = {
  isAdmin: boolean,
  setIsAdmin: any,
  isLeader: boolean,
  setIsLeader: any,
  user: string,
  setUser: any,
}

const AddUser = ({isAdmin, setIsAdmin, isLeader, setIsLeader, user, setUser} : Props) => {
  //code here

  return (
    <div className="container">
      <h1>Add User</h1>
      <Form isAdmin={isAdmin} setIsAdmin={setIsAdmin} isLeader={isLeader} setIsLeader={setIsLeader} user={user} setUser={setUser} />
    </div>
  )
}

export default AddUser;