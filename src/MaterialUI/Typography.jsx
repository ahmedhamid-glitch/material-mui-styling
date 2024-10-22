import { Typography, Button } from "@mui/material";

const TypoGraphy = () => {
  return (
    <div className="App">
      <Typography variant="h3" component={"h5"} sx={{ color: "red", mt: 4 }}>
        React Material UI | Typography
      </Typography>
      <h1>React Material UI</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
        adipisci.
      </p>

      <Button variant="contained" color="secondary" sx={{ m: "30px" }}>
        Click Me
      </Button>
      <Button variant="text" color="success" sx={{ m: "30px" }}>
        Click Me
      </Button>
      <Button
        variant="outlined"
        color="warning"
        sx={{ m: "30px" }}
        onClick={() => alert("You Clicked")}
      >
        Click Me for action
      </Button>
    </div>
  );
};

export default TypoGraphy;
