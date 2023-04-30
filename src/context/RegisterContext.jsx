import { createContext, useState } from "react";

const FORM_STATE = {
  selectedIndex: 0,
  steps: {
    details: {
      valid: false,
      dirty: false,
      value: {
        name: "",
        email: "",
        password: "",
      },
    },
    extraData: {
      valid: false,
      dirty: false,
      value: {
        adress: "",
        phone: "",
      },
    },
  },
};

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const [form, setForm] = useState(FORM_STATE);

  return (
    <RegisterContext.Provider
      value={{
        form,
        setForm,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
