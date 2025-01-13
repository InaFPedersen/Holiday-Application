type Props = {
  mode: string,
  name: string
  coloring: string,
  status: string
}

const ProfileIcon = ({mode, name, coloring, status}: Props) => {
  return (
   <img className="topbar-img" src={`./icons/${name}-icon-${mode}.svg`} alt={`Profile icon, with ${coloring} color symbolising that the user is ${status}`} />   
  )
}

export default ProfileIcon;