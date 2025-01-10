import { useNavigate } from "react-router";
import './IconButton.css';

type Props = {
  pageName: string,
  mode: string,
  nameText: string,
}

const IconButton = ({pageName, mode, nameText} : Props) => {
  const navigate = useNavigate();

  const RedirectToPage = (page : string) => {
    navigate(page);
  }

  return (
    <div className={`icon-button ${pageName}`} onClick={() => RedirectToPage(`/${pageName}`)}>
      <img src={`./icons/${pageName}-icon-${mode}.svg`} alt={`This is the ${mode} mode version of the ${nameText} icon button`} />
    </div>
  )
}

export default IconButton;

<IconButton pageName={""} mode={""} nameText={""} />