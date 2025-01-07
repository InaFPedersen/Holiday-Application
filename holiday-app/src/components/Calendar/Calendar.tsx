import './Calendar.css';

type Props = {
  lightModeActive: boolean,
}

const Calendar = ({lightModeActive} : Props) => {

  

  return (
    <div className={lightModeActive ? 'calendar-light-mode' : 'calendar-dark-mode'}>
      <h1>HERE PERSONAL CALENDAR WILL COME</h1>
    </div>
  )
}

export default Calendar;