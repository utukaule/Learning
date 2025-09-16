import { createContext, useState } from "react";
import data from "../data/data";

export const AlertsContext = createContext();

export const AlertsProvider = ({ children }) => {
  const [alerts, setAlerts] = useState(data);
  const [loading, setLoading] = useState(true);
  

  return (
    <AlertsContext.Provider value={{ alerts }}>
      {children}
    </AlertsContext.Provider>
  );
};
