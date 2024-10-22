import { Radio } from "@mui/material";
import { useState } from "react";

const RadioButton = () => {
  const [gender, setGender] = useState("male");

  const testFunction = (e) => {
    setGender(e.target.value);

    console.warn(e.target.value);
  };

  return (
    <div className="App">
      <h1>React Material UI | Radio Button</h1>
      <div>
        <Radio
          sx={{ color: "#ff5252", "&.Mui-checked": { color: "#ff5252" } }}
          checked={gender === "male"}
          value="male"
          onChange={testFunction}
        />
        <span>Male</span>
      </div>
      <div>
        <Radio
          sx={{ color: "#ff5252", "&.Mui-checked": { color: "#ff5252" } }}
          checked={gender === "female"}
          value="female"
          onChange={testFunction}
        />
        <span>FemMale</span>
      </div>
      <div>
        <Radio
          sx={{ color: "#ff5252", "&.Mui-checked": { color: "#ff5252" } }}
          checked={gender === "other"}
          value="other"
          onChange={testFunction}
        />
        <span>other</span>
      </div>
    </div>
  );
};

export default RadioButton;
