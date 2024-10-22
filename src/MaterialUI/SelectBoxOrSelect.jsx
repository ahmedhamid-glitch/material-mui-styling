import { MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

const SelectBoxOrSelect = () => {
  const [course, setCourse] = useState("");
  const updateValue = (e) => {
    setCourse(e.target.value);
  };

  return (
    <div className="App">
      <h1>React Material UI | Select Box or Select</h1>

      <Select value={course} displayEmpty onChange={updateValue}>
        <MenuItem value="">Select Course</MenuItem>
        <MenuItem value={1}>Node</MenuItem>
        <MenuItem value={2}>PHP</MenuItem>
        <MenuItem value={3}>Java</MenuItem>
        <MenuItem value={4}>JavaScript</MenuItem>
      </Select>
    </div>
  );
};

export default SelectBoxOrSelect;
