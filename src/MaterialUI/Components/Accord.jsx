import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  TextField,
  Typography,
} from "@mui/material";

const Accord = () => {
  const courses = ["react", "nodejs", "javaScript", "nextJs", "UI"];
  return (
    <>
      <div>
        <Accordion>
          <AccordionSummary expandIcon="<">
            <Typography variant="h6">What is mern Stack?</Typography>
            <hr />
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, voluptatem?
            </Typography>{" "}
          </AccordionDetails>
          
        </Accordion>
        <br />
        {/* Auto Complete */}

        <Autocomplete
          sx={{ width: 200 }}
          options={courses}
          renderInput={(params) => (
            <TextField {...params} label="Select a course" />
          )}
        />
      </div>
    </>
  );
};

export default Accord;
