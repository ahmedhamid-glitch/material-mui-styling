import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Cards = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        <Card style={{ maxWidth: 300 }}>
          <CardMedia
            component="img"
            height={"180"}
            image="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*92EtfQXxrWp8Pk_a"
            alt="Test Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component={"div"}>
              Web Design
            </Typography>

            <Typography variant="body2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In,
              aliquid.
            </Typography>

            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button
                size="small"
                color="warning"
                onClick={() => setOpen(true)}
              >
                Delete
              </Button>
            </CardActions>
          </CardContent>
        </Card>

          <Dialog sx={{ padding: "40px" }} open={open}>
            <DialogTitle>Are You Sure</DialogTitle>
            <DialogContentText>
              are you sure to delete this product
            </DialogContentText>

            <DialogActions>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button>Delete</Button>
            </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default Cards;
