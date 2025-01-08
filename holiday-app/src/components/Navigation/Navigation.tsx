import Divider from "../Divider";
import './Navigation.css';

type Props = {
  lightModeActive: boolean, 
  isAdmin : boolean,
  isLeader : boolean,
}

const Navigation = ({lightModeActive, isAdmin, isLeader} : Props) => {

  const InformationBtnClicked = () => {
    // Direct user to information page
  }

  const UserGuideBtnClicked = () => {
    // Direct user to User Guide page
  }

  const CalendarsBtnClicked = () => {
    // Direct user to Calendars page
  }

  const HolidayRequestBtnClicked = () => {
    // Direct user to Holiday Request page
  }

  const AddGroupBtnClicked = () => {
    // Direct user to Add Group page
  }

  const AddEventBtnClicked = () => {
    // Direct user to Add Event page
  }

  const SubmitFeedbackBtnClicked = () => {
    // Direct user to Submit Feedback page
  }

  const HolidayRequestStatusBtnClicked = () => {
    // Direct user to Holiday Request Status page
  }

  const AdminPageBtnClicked = () => {
    // Direct user to Admin page
  }

  const ViewFeedbackBtnClicked = () => {
    // Direct user to View Feedback page
  }

  const AddUserBtnClicked = () => {
    // Direct user to Add User page
  }

  const ViewHolidayRequestBtnClicked = () => {
    // Direct user to ViewHolidayRequest page
  }

  return (
    <div className={lightModeActive ? 'navigation-light-mode' : 'navigation-dark-mode'}>
            {isAdmin ? (
              <>
              {lightModeActive ? 
                <>
                  <div className='icon-button information' onClick={InformationBtnClicked}>
                    <img src="./icons/information-icon-light.svg" alt="Light mode version of the Information icon button" />
                  </div>
                  <div className='icon-button user-guide' onClick={UserGuideBtnClicked}>
                    <img src="./icons/user-guide-icon-light.svg" alt="Light mode version of the User Guide icon button" />
                  </div>
                  <div className='icon-button calendars' onClick={CalendarsBtnClicked}>
                    <img src="./icons/calendar-icon-light.svg" alt="Light mode version of the Calendars icon button" />
                  </div>
                  <div className='icon-button holiday-request' onClick={HolidayRequestBtnClicked}>
                    <img src="./icons/holiday-request-icon-light.svg" alt="Light mode version of the Holiday Request icon button" />
                  </div>
                  <div className='icon-button add-group' onClick={AddGroupBtnClicked}>
                    <img src="./icons/add-group-icon-light.svg" alt="Light mode version of the Add Group icon button" />
                  </div>
                  <div className='icon-button add-event' onClick={AddEventBtnClicked}>
                    <img src="./icons/add-event-icon-light.svg" alt="Light mode version of the Add Event icon button" />
                  </div>
                  <div className='icon-button submit-feedback' onClick={SubmitFeedbackBtnClicked}>
                    <img src="./icons/submit-feedback-icon-light.svg" alt="Light mode version of the Submit Feedback icon button" />
                  </div>
                  <div className='icon-button holiday-request-status' onClick={HolidayRequestStatusBtnClicked}>
                    <img src="./icons/holiday-request-status-icon-light.svg" alt="Light mode version of the Holiday Request Status icon button" />
                  </div>

                  <Divider  />

                  <div className='icon-button admin-page' onClick={AdminPageBtnClicked}>
                    <img src="./icons/admin-page-icon-light.svg" alt="Light mode version of the Admin Page icon button" />
                  </div>
                  <div className='icon-button view-feedback' onClick={ViewFeedbackBtnClicked}>
                    <img src="./icons/view-feedback-icon-light.svg" alt="Light mode version of the View Feedback icon button" />
                  </div>
                  <div className='icon-button add-user' onClick={AddUserBtnClicked}>
                    <img src="./icons/add-user-icon-light.svg" alt="Light mode version of the Add User icon button" />
                  </div>
                  <div className='icon-button view-holiday-request' onClick={ViewHolidayRequestBtnClicked}>
                    <img src="./icons/view-holiday-request-icon-light.svg" alt="Light mode version of the View Holiday Request icon button" />
                  </div>
                </> 
                : 
                <>
                  <div className='icon-button information' onClick={InformationBtnClicked}>
                    <img src="./icons/information-icon-dark.svg" alt="Dark mode version of the Information icon button" />
                  </div>
                  <div className='icon-button user-guide' onClick={UserGuideBtnClicked}>
                    <img src="./icons/user-guide-icon-dark.svg" alt="Dark mode version of the User Guide icon button" />
                  </div>
                  <div className='icon-button calendars' onClick={CalendarsBtnClicked}>
                    <img src="./icons/calendar-icon-dark.svg" alt="Dark mode version of the Calendars icon button" />
                  </div>
                  <div className='icon-button holiday-request' onClick={HolidayRequestBtnClicked}>
                    <img src="./icons/holiday-request-icon-dark.svg" alt="Dark mode version of the Holiday Request icon button" />
                  </div>
                  <div className='icon-button add-group' onClick={AddGroupBtnClicked}>
                    <img src="./icons/add-group-icon-dark.svg" alt="Dark mode version of the Add Group icon button" />
                  </div>
                  <div className='icon-button add-event' onClick={AddEventBtnClicked}>
                    <img src="./icons/add-event-icon-dark.svg" alt="Dark mode version of the Add Event icon button" />
                  </div>
                  <div className='icon-button submit-feedback' onClick={SubmitFeedbackBtnClicked}>
                    <img src="./icons/submit-feedback-icon-dark.svg" alt="Dark mode version of the Submit Feedback icon button" />
                  </div>
                  <div className='icon-button holiday-request-status' onClick={HolidayRequestStatusBtnClicked}>
                    <img src="./icons/holiday-request-status-icon-dark.svg" alt="Dark mode version of the Holiday Request Status icon button" />
                  </div>

                  <Divider />

                  <div className='icon-button admin-page' onClick={AdminPageBtnClicked}>
                    <img src="./icons/admin-page-icon-dark.svg" alt="Dark mode version of the Admin Page icon button" />
                  </div>
                  <div className='icon-button view-feedback' onClick={ViewFeedbackBtnClicked}>
                    <img src="./icons/view-feedback-icon-dark.svg" alt="Dark mode version of the View Feedback icon button" />
                  </div>
                  <div className='icon-button add-user' onClick={AddUserBtnClicked}>
                    <img src="./icons/add-user-icon-dark.svg" alt="Dark mode version of the Add User icon button" />
                  </div>
                  <div className='icon-button view-holiday-request' onClick={ViewHolidayRequestBtnClicked}>
                    <img src="./icons/view-holiday-request-icon-dark.svg" alt="Dark mode version of the View Holiday Request icon button" />
                  </div>
                </>
              }
              </>
            ) : (
              <>
              {lightModeActive ? 
                <>
                  <div className='icon-button information' onClick={InformationBtnClicked}>
                    <img src="./icons/information-icon-light.svg" alt="Light mode version of the Information icon button" />
                  </div>
                  <div className='icon-button user-guide' onClick={UserGuideBtnClicked}>
                    <img src="./icons/user-guide-icon-light.svg" alt="Light mode version of the User Guide icon button" />
                  </div>
                  <div className='icon-button calendars' onClick={CalendarsBtnClicked}>
                    <img src="./icons/calendar-icon-light.svg" alt="Light mode version of the Calendars icon button" />
                  </div>
                  <div className='icon-button holiday-request' onClick={HolidayRequestBtnClicked}>
                    <img src="./icons/holiday-request-icon-light.svg" alt="Light mode version of the Holiday Request icon button" />
                  </div>
                  <div className='icon-button add-group' onClick={AddGroupBtnClicked}>
                    <img src="./icons/add-group-icon-light.svg" alt="Light mode version of the Add Group icon button" />
                  </div>
                  <div className='icon-button add-event' onClick={AddEventBtnClicked}>
                    <img src="./icons/add-event-icon-light.svg" alt="Light mode version of the Add Event icon button" />
                  </div>
                  <div className='icon-button submit-feedback' onClick={SubmitFeedbackBtnClicked}>
                    <img src="./icons/submit-feedback-icon-light.svg" alt="Light mode version of the Submit Feedback icon button" />
                  </div>
                  <div className='icon-button holiday-request-status' onClick={HolidayRequestStatusBtnClicked}>
                    <img src="./icons/holiday-request-status-icon-light.svg" alt="Light mode version of the Holiday Request Status icon button" />
                  </div>

                  {isLeader && 
                    <>
                    <Divider />

                      <div className='icon-button add-user' onClick={AddUserBtnClicked}>
                        <img src="./icons/add-user-icon-light.svg" alt="Light mode version of the Add User icon button" />
                      </div>
                      <div className='icon-button view-holiday-request' onClick={ViewHolidayRequestBtnClicked}>
                        <img src="./icons/view-holiday-request-icon-light.svg" alt="Light mode version of the View Holiday Request icon button" />
                      </div>
                    </>
                  }
                </> 
                : 
                <>
                  <div className='icon-button information' onClick={InformationBtnClicked}>
                    <img src="./icons/information-icon-dark.svg" alt="Dark mode version of the Information icon button" />
                  </div>
                  <div className='icon-button user-guide' onClick={UserGuideBtnClicked}>
                    <img src="./icons/user-guide-icon-dark.svg" alt="Dark mode version of the User Guide icon button" />
                  </div>
                  <div className='icon-button calendars' onClick={CalendarsBtnClicked}>
                    <img src="./icons/calendar-icon-dark.svg" alt="Dark mode version of the Calendars icon button" />
                  </div>
                  <div className='icon-button holiday-request' onClick={HolidayRequestBtnClicked}>
                    <img src="./icons/holiday-request-icon-dark.svg" alt="Dark mode version of the Holiday Request icon button" />
                  </div>
                  <div className='icon-button add-group' onClick={AddGroupBtnClicked}>
                    <img src="./icons/add-group-icon-dark.svg" alt="Dark mode version of the Add Group icon button" />
                  </div>
                  <div className='icon-button add-event' onClick={AddEventBtnClicked}>
                    <img src="./icons/add-event-icon-dark.svg" alt="Dark mode version of the Add Event icon button" />
                  </div>
                  <div className='icon-button submit-feedback' onClick={SubmitFeedbackBtnClicked}>
                    <img src="./icons/submit-feedback-icon-dark.svg" alt="Dark mode version of the Submit Feedback icon button" />
                  </div>
                  <div className='icon-button holiday-request-status' onClick={HolidayRequestStatusBtnClicked}>
                    <img src="./icons/holiday-request-status-icon-dark.svg" alt="Dark mode version of the Holiday Request Status icon button" />
                  </div>

                  {isLeader && 
                    <>
                      <Divider />
                  
                      <div className='icon-button add-user' onClick={AddUserBtnClicked}>
                        <img src="./icons/add-user-icon-dark.svg" alt="Dark mode version of the Add User icon button" />
                      </div>
                      <div className='icon-button view-holiday-request' onClick={ViewHolidayRequestBtnClicked}>
                        <img src="./icons/view-holiday-request-icon-dark.svg" alt="Dark mode version of the View Holiday Request icon button" />
                      </div>
                    </>
                  }
                </>
              }
              </>
            )}
    
    </div>
  )
}

export default Navigation