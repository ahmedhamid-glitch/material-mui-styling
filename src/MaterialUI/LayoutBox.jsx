import { Button, Box } from "@mui/material";

const LayoutBox = () => {
  return (
    <div className="App">
      <h1>React Material UI | Layout | Out</h1>

      <Box
        a="span"
        sx={{
          margin: "20px",
          padding: "10px",
        }}
        
      >
        <Button sx={{}}>Hello</Button>
      </Box>
    </div>
  );
};

export default LayoutBox;
