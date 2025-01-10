import Divider from "../Divider";
import './Navigation.css';
import IconButton from "../IconButton/IconButton";

type Props = {
  lightModeActive: boolean, 
  isAdmin : boolean,
  isLeader : boolean,
}

const Navigation = ({lightModeActive, isAdmin, isLeader} : Props) => {

  return (
    <div className={`navigational-container ${lightModeActive ? 'component-light-mode' : 'component-dark-mode'}`}>
            {isAdmin ? (
              <>
              {lightModeActive ? 
                <>
                  <IconButton pageName={"information"} mode={"light"} nameText={"Information"} />
                  <IconButton pageName={"user-guide"} mode={"light"} nameText={"User Guide"}  />
                  <IconButton pageName={"calendars"} mode={"light"} nameText={"Calendars"} />
                  <IconButton pageName={"holiday-request"} mode={"light"} nameText={"Holiday Request"} />
                  <IconButton pageName={"add-group"} mode={"light"} nameText={"Add Group"} />
                  <IconButton pageName={"add-event"} mode={"light"} nameText={"Add Event"} />
                  <IconButton pageName={"submit-feedback"} mode={"light"} nameText={"Submit Feedback"} />
                  <IconButton pageName={"holiday-request-status"} mode={"light"} nameText={"Holiday Request Status"} />

                  <Divider  />

                  <IconButton pageName={"admin"} mode={"light"} nameText={"Admin"} />
                  <IconButton pageName={"view-feedback"} mode={"light"} nameText={"View Feedback"} />
                  <IconButton pageName={"add-user"} mode={"light"} nameText={"Add User"} />
                  <IconButton pageName={"edit-user"} mode={"light"} nameText={"Edit User"} />
                  <IconButton pageName={"view-holiday-request"} mode={"light"} nameText={"View Holiday Request"} />
                </> 
                : 
                <>
                  <IconButton pageName={"information"} mode={"dark"} nameText={"Information"} />
                  <IconButton pageName={"user-guide"} mode={"dark"} nameText={"User Guide"}  />
                  <IconButton pageName={"calendars"} mode={"dark"} nameText={"Calendars"} />
                  <IconButton pageName={"holiday-request"} mode={"dark"} nameText={"Holiday Request"} />
                  <IconButton pageName={"add-group"} mode={"dark"} nameText={"Add Group"} />
                  <IconButton pageName={"add-event"} mode={"dark"} nameText={"Add Event"} />
                  <IconButton pageName={"submit-feedback"} mode={"dark"} nameText={"Submit Feedback"} />
                  <IconButton pageName={"holiday-request-status"} mode={"dark"} nameText={"Holiday Request Status"} />

                  <Divider  />

                  <IconButton pageName={"admin"} mode={"dark"} nameText={"Admin"} />
                  <IconButton pageName={"view-feedback"} mode={"dark"} nameText={"View Feedback"} />
                  <IconButton pageName={"add-user"} mode={"dark"} nameText={"Add User"} />
                  <IconButton pageName={"edit-user"} mode={"dark"} nameText={"Edit User"} />
                  <IconButton pageName={"view-holiday-request"} mode={"dark"} nameText={"View Holiday Request"} />
                </>
              }
              </>
            ) : (
              <>
              {lightModeActive ? 
                <>
                  <IconButton pageName={"information"} mode={"light"} nameText={"Information"} />
                  <IconButton pageName={"user-guide"} mode={"light"} nameText={"User Guide"}  />
                  <IconButton pageName={"calendars"} mode={"light"} nameText={"Calendars"} />
                  <IconButton pageName={"holiday-request"} mode={"light"} nameText={"Holiday Request"} />
                  <IconButton pageName={"add-group"} mode={"light"} nameText={"Add Group"} />
                  <IconButton pageName={"add-event"} mode={"light"} nameText={"Add Event"} />
                  <IconButton pageName={"submit-feedback"} mode={"light"} nameText={"Submit Feedback"} />
                  <IconButton pageName={"holiday-request-status"} mode={"light"} nameText={"Holiday Request Status"} />

                  {isLeader && 
                    <>
                      <Divider />

                      <IconButton pageName={"add-user"} mode={"light"} nameText={"Add User"} />
                      <IconButton pageName={"edit-user"} mode={"light"} nameText={"Edit User"} />
                      <IconButton pageName={"view-holiday-request"} mode={"light"} nameText={"View Holiday Request"} />
                    </>
                  }
                </> 
                : 
                <>
                  <IconButton pageName={"information"} mode={"dark"} nameText={"Information"} />
                  <IconButton pageName={"user-guide"} mode={"dark"} nameText={"User Guide"}  />
                  <IconButton pageName={"calendars"} mode={"dark"} nameText={"Calendars"} />
                  <IconButton pageName={"holiday-request"} mode={"dark"} nameText={"Holiday Request"} />
                  <IconButton pageName={"add-group"} mode={"dark"} nameText={"Add Group"} />
                  <IconButton pageName={"add-event"} mode={"dark"} nameText={"Add Event"} />
                  <IconButton pageName={"submit-feedback"} mode={"dark"} nameText={"Submit Feedback"} />
                  <IconButton pageName={"holiday-request-status"} mode={"dark"} nameText={"Holiday Request Status"} />

                  {isLeader && 
                    <>
                      <Divider />

                      <IconButton pageName={"add-user"} mode={"dark"} nameText={"Add User"} />
                      <IconButton pageName={"edit-user"} mode={"dark"} nameText={"Edit User"} />
                      <IconButton pageName={"view-holiday-request"} mode={"dark"} nameText={"View Holiday Request"} />
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