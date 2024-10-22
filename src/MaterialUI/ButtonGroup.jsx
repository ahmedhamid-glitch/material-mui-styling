import { ButtonGroup, Button } from "@mui/material";

const ButtonGroup = () => {
  return (
    <div className="App">
      <h1>React Material Ui | ButtonGroup</h1>
      <ButtonGroup color="warning" variant="outlined" orientation="vertical">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  );
};

export default ButtonGroup;
