import { useNavigate } from "react-router";
import Divider from "../Divider";
import './Navigation.css';

type Props = {
  lightModeActive: boolean, 
  isAdmin : boolean,
  isLeader : boolean,
}

const Navigation = ({lightModeActive, isAdmin, isLeader} : Props) => {

  let navigate = useNavigate();
  
  const InformationBtnClicked = () => {
    // Direct user to information page
    navigate('/information');
  }

  const UserGuideBtnClicked = () => {
    // Direct user to User Guide page
    navigate('/user-guide');
  }

  const CalendarsBtnClicked = () => {
    // Direct user to Calendars page
    navigate('/calendars');
  }

  const HolidayRequestBtnClicked = () => {
    // Direct user to Holiday Request page
    navigate('/holiday-request');
  }

  const AddGroupBtnClicked = () => {
    // Direct user to Add Group page
    navigate('/add-group');
  }

  const AddEventBtnClicked = () => {
    // Direct user to Add Event page
    navigate('/add-event');
  }

  const SubmitFeedbackBtnClicked = () => {
    // Direct user to Submit Feedback page
    navigate('/submit-feedback');
  }

  const HolidayRequestStatusBtnClicked = () => {
    // Direct user to Holiday Request Status page
    navigate('/holiday-request-status');
  }

  const AdminBtnClicked = () => {
    // Direct user to Admin page
    navigate('/admin');
  }

  const ViewFeedbackBtnClicked = () => {
    // Direct user to View Feedback page
    navigate('/view-feedback');
  }

  const AddUserBtnClicked = () => {
    // Direct user to Add User page
    navigate('/add-user');
  }

  const EditUserBtnClicked = () => {
    // Direct user to Add User page
    navigate('/edit-user');
  }

  const ViewHolidayRequestBtnClicked = () => {
    // Direct user to ViewHolidayRequest page
    navigate('/view-holiday-request');
  }

  return (
    <div className={`navigational-container ${lightModeActive ? 'component-light-mode' : 'component-dark-mode'}`}>
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

                  <div className='icon-button admin' onClick={AdminBtnClicked}>
                    <img src="./icons/admin-icon-light.svg" alt="Light mode version of the Admin icon button" />
                  </div>
                  <div className='icon-button view-feedback' onClick={ViewFeedbackBtnClicked}>
                    <img src="./icons/view-feedback-icon-light.svg" alt="Light mode version of the View Feedback icon button" />
                  </div>
                  <div className='icon-button add-user' onClick={AddUserBtnClicked}>
                    <img src="./icons/add-user-icon-light.svg" alt="Light mode version of the Add User icon button" />
                  </div>
                  <div className='icon-button edit-user' onClick={EditUserBtnClicked}>
                    <img src="./icons/edit-user-icon-light.svg" alt="Light mode version of the Edit User icon button" />
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

                  <div className='icon-button admin' onClick={AdminBtnClicked}>
                    <img src="./icons/admin-icon-dark.svg" alt="Dark mode version of the Admin icon button" />
                  </div>
                  <div className='icon-button view-feedback' onClick={ViewFeedbackBtnClicked}>
                    <img src="./icons/view-feedback-icon-dark.svg" alt="Dark mode version of the View Feedback icon button" />
                  </div>
                  <div className='icon-button add-user' onClick={AddUserBtnClicked}>
                    <img src="./icons/add-user-icon-dark.svg" alt="Dark mode version of the Add User icon button" />
                  </div>
                  <div className='icon-button edit-user' onClick={EditUserBtnClicked}>
                    <img src="./icons/edit-user-icon-dark.svg" alt="Dark mode version of the Edit User icon button" />
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
                      <div className='icon-button edit-user' onClick={EditUserBtnClicked}>
                        <img src="./icons/edit-user-icon-light.svg" alt="Light mode version of the Edit User icon button" />
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
                      <div className='icon-button edit-user' onClick={EditUserBtnClicked}>
                        <img src="./icons/edit-user-icon-dark.svg" alt="Dark mode version of the Edit User icon button" />
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