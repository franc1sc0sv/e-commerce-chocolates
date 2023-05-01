import { useContext } from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";
import { AlertsContext } from "../context/AlertsContext";

export default function CustomizedSnackbars() {
  const { open, setOpen, message, severity } = useContext(AlertsContext);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        variant="outlined"
        onClose={handleClose}
        severity={severity}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
