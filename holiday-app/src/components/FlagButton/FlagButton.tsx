
type Props = {
  activeLanguage: string, 
  setActiveLanguage: any,
  setFlagOpen: any,
  country: string,
  countryLanguage: string,
  countryName: string,
  mode: string
}

const FlagButton = ({activeLanguage, setActiveLanguage, setFlagOpen, country, countryLanguage, countryName, mode}: Props) => {

  const ChangeLanguage = (language: string) => {
    setActiveLanguage(activeLanguage = language);
    setFlagOpen(false);
  }

  return (
    <div className={country} onClick={() => ChangeLanguage(countryLanguage)}>
      <img className="topbar-img" src={`./icons/${country}-icon-${mode}.svg`} alt={`Flag of ${countryName}`} />
    </div>
  )
}

export default FlagButton;