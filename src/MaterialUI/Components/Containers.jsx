import { Container, Typography } from "@mui/material";

const Containers = () => {
  return (
    <>
      <div>
        <Container sx={{ bgcolor: "yellow" }} maxWidth="xs">
          <Typography variant="body2">This is Xs</Typography>
        </Container>
        <br />
        <Container sx={{ bgcolor: "yellow" }} maxWidth="sm">
          <Typography variant="body2">This is Small</Typography>
        </Container>
        <br />
        <Container sx={{ bgcolor: "yellow" }} maxWidth="md">
          <Typography variant="body2">This is Medium</Typography>
        </Container>
        <br />
        <Container sx={{ bgcolor: "yellow" }} maxWidth="lg">
          <Typography variant="body2">This is Large</Typography>
        </Container>
        <br />
        <Container sx={{ bgcolor: "yellow" }} maxWidth="xl">
          <Typography variant="body2">This is Xl</Typography>
        </Container>
      </div>
    </>
  );
};

export default Containers;
