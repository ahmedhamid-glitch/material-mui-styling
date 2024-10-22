import { Grid } from "@mui/material";

const ResponsiveGrid = () => {
  return (
    <>
      <div>
        <Grid container>
          <Grid
            item
            spacing={2}
            xs={6}
            sm={6}
            medium={9}
            lg={3}
            xl={2}
            sx={{ bgcolor: "red", color: "#fff" }}
          >
            Content A
          </Grid>
          <Grid
            item
            xs={6}
            sm={6}
            medium={3}
            lg={9}
            xl={6}
            sx={{ bgcolor: "yellow", color: "#fff" }}
          >
            Content b
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default ResponsiveGrid;
