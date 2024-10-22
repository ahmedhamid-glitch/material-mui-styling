import { Slider } from "@mui/material";
import { useState } from "react";

const RangeSlider = () => {
  const [val, setVal] = useState([40, 80]);
  const updateVal = (e, item) => {
    setVal(item);
  };
  return (
    <div className="App">
      <h1>React Material UI | Range Slider</h1>
      <div style={{ width: 300, margin: 40 }}>
        <Slider color="secondary" value={val} max={200} onChange={updateVal} />
      </div>
    </div>
  );
};

export default RangeSlider;
