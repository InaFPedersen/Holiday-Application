type Props = {
  country: string,
  countryLanguage: string,
  mode: string
}

const FlagIcon = ({ country, countryLanguage, mode}: Props) => {
  return (
    <img className="topbar-img" src={`./icons/${country}-icon-${mode}.svg`} alt={`The ${countryLanguage} flag icon, used for switching lanuage.`} />
  )
}

export default FlagIcon;