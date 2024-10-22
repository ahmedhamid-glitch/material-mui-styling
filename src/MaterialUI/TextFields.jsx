import { TextField } from "@mui/material";

const TextFields = () => {
  const getdata = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="App">
      <h1>React Material UI | TextField</h1>
      <TextField
        color="secondary"
        label="Enter Name"
        onChange={getdata}
        variant="standard"
      />
    </div>
  );
};

export default TextFields;
