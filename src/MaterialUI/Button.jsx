import React, { useState } from "react";
import { Button } from "@mui/material";
import { Delete } from "@mui/icons-material";

const Button = () => {
  const [color, setColor] = useState("primary");
  const [disableBtn, setDisableBtn] = useState(false);

  const customMe = () => {
    setColor("secondary");
    // setDisableBtn(true);
    // alert("Button Clicked");
  };

  return (
    <div className="App">
      <h1>React MUI</h1>
      <Button
        // disabled={disableBtn}
        color={color}
        variant="outlined"
        onClick={() => {
          customMe();
        }}
        endIcon={<Delete />}
      >
        Click Me
      </Button>
    </div>
  );
};

export default Button;
