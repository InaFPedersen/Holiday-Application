import './Calendar.css';

type Props = {
  lightModeActive: boolean,
}

const Calendar = ({lightModeActive} : Props) => {

  
  

  return (
    <div className={`calendar-container ${lightModeActive ? 'component-light-mode' : 'component-dark-mode'}`}>
      <div className='calender-header'>
        {lightModeActive ? 
          <div className='calendar-navigation'>
            <div className='arrow-btn'>
              <img className='arrow-btn-img' src='./icons/arrow-left-icon-light.svg' alt='Light mode Arrow left icon, for going backwards in the calendar' />
            </div>

            <h2 className='calendar-navigation-text'>JANUARY</h2>

            <div className='arrow-btn'>
              <img className='arrow-btn-img' src='./icons/arrow-right-icon-light.svg' alt='Light mode Arrow left icon, for going backwards in the calendar' />
            </div>
          </div> 
          : 
          <div className='calendar-navigation'>
            <div className='arrow-btn'>
              <img className='arrow-btn-img' src='./icons/arrow-left-icon-dark.svg' alt='Dark mode Arrow left icon, for going backwards in the calendar' />
            </div>

            <h2 className='calendar-navigation-text'>JANUARY</h2>

            <div className='arrow-btn'>
              <img className='arrow-btn-img' src='./icons/arrow-right-icon-dark.svg' alt='Dark mode Arrow left icon, for going backwards in the calendar' />
            </div>
          </div>
        }
        

      </div>
      <div className='calendar-container'>
      <h1>HERE PERSONAL CALENDAR WILL COME</h1>
      </div>
    </div>
  )
}

export default Calendar;