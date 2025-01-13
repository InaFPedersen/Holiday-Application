type Props = {
  mode: string
}

const LightDarkModeIcon = ({mode}: Props) => {
  return (
    <img className="topbar-img" src={`./icons/dark-light-icon-${mode}.svg`} alt={`Light and dark mode icon, used for switching between light and dark mode on the application.`} />
  )
}

export default LightDarkModeIcon