import React, { createContext, useState } from "react";

export const Alerts = createContext();

const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState([]);

  return (
    <Alerts.Provider value={[alert, setAlert]}>{children}</Alerts.Provider>
  );
};

export default AlertProvider;
