import { Slider } from "@mui/material";
const MainSlider = () => {
  const marks = [
    {
      value: 0,
      label: "start",
    },
    {
      value: 25,
      label: "custom 25",
    },
    {
      value: 50,
      label: "medium",
    },

    {
      value: 75,
      label: "custom 75",
    },
    {
      value: 100,
      label: "Stop",
    },
  ];
  const getValue = (e, val) => {
    console.warn(val);
  };
  return (
    <div className="App">
      <h1>React Material UI | Slider</h1>
      <div style={{ height: 300, margin: 40 }}>
        <Slider
          color="secondary"
          step={25}
          max={100}
          defaultValue={100}
          valueLabelDisplay="auto"
          marks={marks}
          onChange={getValue}
          orientation="vertical"
        />
      </div>
    </div>
  );
};

export default MainSlider;
