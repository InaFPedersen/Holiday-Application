type Props = {
  mode: string
}

const Logo = ({mode}: Props) => {
  return (
    <div className="logo">
      <img className="topbar-img" src={`./icons/logo-fictional-icon-${mode}.svg`} alt={`Image of the Holiday application's logo in ${mode} version.`}  />
    </div>
    
  )
}

export default Logo;