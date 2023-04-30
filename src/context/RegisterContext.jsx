import { createContext, useState } from "react";

const FORM_STATE = {
  selectedIndex: 0,
  steps: {
    details: {
      valid: false,
      dirty: false,
      value: {
        name: "",
        username: "",
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

const FORM_STEPS = [
  {
    label: `Details`,
  },
  {
    label: `Data`,
  },
];

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
