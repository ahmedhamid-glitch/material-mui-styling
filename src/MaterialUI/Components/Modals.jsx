import { Box, Button, Link, Modal, Typography } from "@mui/material";
import { useState } from "react";

const Modals = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open}>
          <Box position={"absolute"} top={"50%"} left={"50%"}>
            <Typography>This is Modal</Typography>
            <Button variant="contained" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </Box>
        </Modal>

        <Link
          variant="h4"
          color="secondary"
          href="https://www.youtube.com/shorts/0HKzEuyxX1s"
          underline="always"
        >Nav Link</Link>
      </div>
    </>
  );
};

export default Modals;
