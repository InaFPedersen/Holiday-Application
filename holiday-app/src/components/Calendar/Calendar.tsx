import { useState } from 'react';
import './Calendar.css';
import YearView from '../YearView/YearView';
import CalendarEvent from '../../interfaces/CalendarEvents';

type Props = {
  lightModeActive: boolean,
  activelanguage: string,
  events: CalendarEvent[]
}

const Calendar = ({lightModeActive, activelanguage, events} : Props) => {

  const [view, setView] = useState<'year' | 'month' | 'week' | 'day'>('year');

  const today = new Date();

  const getYear = today.getFullYear();
  const getMonth = today.getMonth();
  const getWeek = today.getDate();
  const getDay = today.getDate();

  const renderView = () => {
    switch (view) {
      case 'year':
        return (
          <div className='view'>
            <YearView events={events} activelanguage={activelanguage} lightModeActive={lightModeActive} />
          </div>
        )
      case 'month':
        return (
          <div className='view'>
            Month View
          </div>
        )
      case 'week':
        return (
          <div className='view'>
            Week View
          </div>
        )
      case 'day':
        return (
          <div className='view'>
            Day View
          </div>
        )
    }
  }
  

  return (
    <div className={`calendar-container ${lightModeActive ? 'component-light-mode' : 'component-dark-mode'}`}>
      <div className='calendar-view'>
        <button className='view-btn' onClick={() => setView('year') }> {activelanguage === 'norwegian' ? 'ÅR' : 'YEAR' }</button>
        <button className='view-btn' onClick={() => setView('month') }>{activelanguage === 'norwegian' ? 'MÅNED' : 'MONTH' }</button>
        <button className='view-btn' onClick={() => setView('week') }>{activelanguage === 'norwegian' ? 'UKE' : 'WEEK' }</button>
        <button className='view-btn' onClick={() => setView('day') }>{activelanguage === 'norwegian' ? 'DAG' : 'DAY' }</button>
      </div>
      <div className={`${lightModeActive ? 'calendar-border-light' : 'calendar-border-dark'}`}>
        <div className='calendar-header'>
          {lightModeActive ? 
            <div className='calendar-navigation'>
              <div className='arrow-btn'>
                <img className='arrow-btn-img' src='./icons/arrow-left-icon-light.svg' alt='Light mode Arrow left icon, for going backwards in the calendar' />
              </div>

              <h2 className='calendar-navigation-text'>
                {view === 'year' && `${getYear}`}
                {view === 'month' && `${getMonth}`}
                {view === 'week' && `${getWeek}`}
                {view === 'day' && `${getDay}`}
              </h2>

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
        <div className={`calendar ${lightModeActive ? 'component-light-mode' : 'component-dark-mode'}`}>
          {renderView()}
        </div>
      </div>
    </div>
  )
}

export default Calendar;