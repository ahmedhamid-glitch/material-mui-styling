import { Switch } from "@mui/material";

const SwitchBtn = () => {
  const getValue = (e,val) => {
    console.log(val);
  };
  return (
    <div className="App">
      <h1>React Material UI | Switch</h1>
      <Switch size="small" onChange={getValue} />
    </div>
  );
};

export default SwitchBtn;
