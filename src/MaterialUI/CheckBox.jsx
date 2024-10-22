import { Checkbox } from "@mui/material";
import { useState } from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const CheckBox = () => {
  const [name, setName] = useState([]);

  function getValue(e) {
    const data = name;
    data.push(e.target.value);
    console.warn(data);
  }
  return (
    <div className="App">
      <h1>React Material UI | CheckBox</h1>

      <Checkbox
        color="primary"
        value="ahmed"
        onChange={(e) => {
          getValue(e);
        }}
      />
      <Checkbox
        color="primary"
        value="anns"
        onChange={(e) => {
          getValue(e);
        }}
      />
      <Checkbox
        color="primary"
        value="afan"
        onChange={(e) => {
          getValue(e);
        }}
      />
      <Checkbox
        color="primary"
        value="xyz"
        indeterminate
        onChange={(e) => {
          getValue(e);
        }}
      />
      <Checkbox
        color="secondary"
        value="xyz"
        icon={<FavoriteBorder />}
        onChange={(e) => {
          getValue(e);
        }}
        checkedIcon={<Favorite />}
      />
    </div>
  );
};

export default CheckBox;
