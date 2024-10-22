import {
  Button,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useState } from "react";

const From = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    courses: "",
    terms: false,
  });

  // Input Change From

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: [e.target.value],
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inputs :", inputs);
  };

  return (
    <>
      <Typography variant="h4" color={"red"}>
        React Material UI | Input
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          color="warning"
          value={inputs.name}
          name="name"
          type="text"
          variant="outlined"
          label="Enter your Name"
          sx={{ margin: "20px" }}
          onChange={handleChange}
        />
        <TextField
          color="warning"
          value={inputs.email}
          name="email"
          type="email"
          variant="outlined"
          label="Enter your Email"
          sx={{ margin: "20px" }}
          onChange={handleChange}
        />
        <TextField
          color="warning"
          value={inputs.password}
          name="password"
          type="password"
          variant="outlined"
          label="Enter your Password"
          sx={{ margin: "20px" }}
          onChange={handleChange}
        />
        <br />

        <FormGroup sx={{ m: "20px" }}>
          <FormControlLabel
            label="I Agree T&C"
            control={
              <Checkbox
                onChange={() =>
                  setInputs((prev) => ({
                    ...prev,
                    terms: !inputs.terms,
                  }))
                }
              />
            }
          ></FormControlLabel>
        </FormGroup>

        <br />
        <FormControl
          sx={{ width: "300px", m: "20px" }}
          variant="standard"
          color="warning"
        >
          <InputLabel id="menu">Course</InputLabel>
          <Select
            label="courses"
            name="courses"
            value={inputs.courses}
            onChange={handleChange}
          >
            <MenuItem value="mongodb">Mongodb</MenuItem>
            <MenuItem value="express">Express</MenuItem>
            <MenuItem value="node">Node</MenuItem>
            <MenuItem value="react">React</MenuItem>
          </Select>
        </FormControl>

        <br />
        <Button
          type="submit"
          color="warning"
          sx={{
            margin: "20px",
          }}
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default From;
