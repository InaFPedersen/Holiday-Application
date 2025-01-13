import CalendarEvent from "../../interfaces/CalendarEvents";
import Divider from "../Divider"
import './YearView.css'

type Props = {
  lightModeActive: boolean,
  activelanguage: string
  events: CalendarEvent[];
}



const YearView = ({activelanguage, events, lightModeActive}: Props) => {
  const englishMonths = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const norwegianMonths = [
    'Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'
  ];
  const getEventsForMonth = (month: number): CalendarEvent[] => {
    return events.filter(event => event.date.getMonth() === month)
  }

  return (
    <>
      {activelanguage === 'norwegian' ? 
        <div className="year-view">
          {norwegianMonths.map((month, index) => (
          <div className="year-view-month" key={month}>
            <h2 className="year-view-month-text">{month}</h2>
            <Divider />
            <ul className="year-view-month-content">
              {getEventsForMonth(index).map(event => (
                <li key={event.id}>
                  {event.title} - {event.date.toDateString()}
                </li>
              ))}
            </ul>
          </div>
        ))}</div> 
        : 
        <div>{englishMonths.map(month => (
          <div key={month}>{month}</div>
        ))}</div> 
      }
    </>
  )
}

export default YearView;