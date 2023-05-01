import { createContext } from "react";
import { useState } from "react";
import CustomizedSnackbars from "../Components/Alert";

export const AlertsContext = createContext();

export const AlertsProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");

  return (
    <AlertsContext.Provider
      value={{ open, setOpen, message, setMessage, severity, setSeverity }}
    >
      {children}
      <CustomizedSnackbars />
    </AlertsContext.Provider>
  );
};
