import './Calendar.css';

type Props = {
  lightModeActive: boolean,
}

const Calendar = ({lightModeActive} : Props) => {

  

  return (
    <div className={`calendar-container ${lightModeActive ? 'component-light-mode' : 'component-dark-mode'}`}>
      <div className='calendar-container'>
      <h1>HERE PERSONAL CALENDAR WILL COME</h1>
      </div>
    </div>
  )
}

export default Calendar;