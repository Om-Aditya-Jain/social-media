import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const AlertComponent = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Alert = ({ open, setOpen, message }) => {
  const vertical = "top";
  const horizontal = "center";

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      key={vertical + horizontal}
    >
      <AlertComponent
        onClose={handleClose}
        severity="success"
        sx={{ width: "100%" }}
      >
        {message}
      </AlertComponent>
    </Snackbar>
  );
};

export default Alert;
