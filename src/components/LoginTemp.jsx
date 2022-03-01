import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function LoginTemp() {
  return (
    <div className="flex justify-center align-center mt-56 w-screen h-screen ">
      <div className="w-1/2 h-1/2 bg-white rounded-lg justify-center align-center">
        <div className="mt-8">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </div>
        <div className="mt-8">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </div>
        <div className="mt-8">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </div>
        <div className="mt-8">
          <Button variant="outlined">Outlined</Button>
        </div>
      </div>
    </div>
  );
}

export default LoginTemp;
