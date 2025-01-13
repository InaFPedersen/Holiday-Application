import Divider from "../Divider"
import FlagButton from "../FlagButton/FlagButton"

type Props = {
  lightModeActive: boolean,
  activeLanguage: string, 
  setActiveLanguage: any,
  setFlagOpen: any,
}

const FlagDropdown = ({lightModeActive, activeLanguage, setActiveLanguage, setFlagOpen}: Props) => {
  return (
    <div className={`flag-dropdown ${lightModeActive ? 'component-light-mode' : 'component-dark-mode' }`}>
      {lightModeActive ? 
        <>
          <FlagButton activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage} setFlagOpen={setFlagOpen} country={"norway"} countryLanguage={"norwegian"} countryName={"Norway"} mode={"light"} />

          <Divider />

          <FlagButton activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage} setFlagOpen={setFlagOpen} country={"united-kingdom"} countryLanguage={"british"} countryName={"United Kingdom"} mode={"light"} />

          <Divider />

          <FlagButton activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage} setFlagOpen={setFlagOpen} country={"united-states"} countryLanguage={"american"} countryName={"United States"} mode={"light"} />
        </>
        :
        <>
          <FlagButton activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage} setFlagOpen={setFlagOpen} country={"norway"} countryLanguage={"norwegian"} countryName={"Norway"} mode={"dark"} />

          <Divider />

          <FlagButton activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage} setFlagOpen={setFlagOpen} country={"united-kingdom"} countryLanguage={"british"} countryName={"United Kingdom"} mode={"dark"} />

          <Divider />

          <FlagButton activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage} setFlagOpen={setFlagOpen} country={"united-states"} countryLanguage={"american"} countryName={"United States"} mode={"dark"} />
        </>
      }
    </div>
  )
}

export default FlagDropdown