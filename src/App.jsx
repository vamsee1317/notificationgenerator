import React from "react";
import Notifications from "./components/Notification/Notifications";

function App(){

  const notifications = [
    {
      type: "info",
      message: "Your profile has been updated successfully.",
      timestamp: "2025-04-10T10:30:00Z",
      isRead: false
    },
    {
      type: "warning",
      message: "Your subscription will expire in 3 days.",
      timestamp: "2025-04-10T09:15:00Z",
      isRead: false
    },
    {
      type: "error",
      message: "Failed to load data from the server.",
      timestamp: "2025-04-09T22:45:00Z",
      isRead: true
    },
    {
      type: "error",
      message: "Failed to load data from the server 404 occured.",
      timestamp: "2025-04-10T20:10:00Z",
      isRead: true
    },

    {
      type: "success",
      message: "Failed to load data from the server 404 occured.",
      timestamp: "2025-04-10T20:10:00Z",
      isRead: true
    }
  ];
  


  return(
    <div>
        {/* {
          notifications.map((note, i)=>(
            <Notifications key={i} {...note}/>
          ))
        } */}
        <Notifications note={notifications} />
    </div>
  )
}

export default App