import AddReactionIcon from "@mui/icons-material/AddReaction";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript, TbBrandNodejs } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";

import {
  Alert,
  Button,
  CircularProgress,
  Drawer,
  IconButton,
  LinearProgress,
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Rating,
  Snackbar,
  Typography,
} from "@mui/material";

import { useState } from "react";

const DrawerMenu = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState();
  console.log(value);
  const courses = [
    {
      name: "ReactJs",
      Icon: <FaReact />,
      href: "https://legacy.reactjs.org/docs/create-a-new-react-app.html",
    },
    {
      name: "JavaScript",
      Icon: <TbBrandJavascript />,
      href: "https://www.javascript.com/",
    },
    {
      name: "NextJs",
      Icon: <RiNextjsFill />,
      href: "https://nextjs.org/",
    },
    {
      name: "Css",
      Icon: <FaCss3Alt />,
      href: "https://elements.envato.com/web-templates/css?adposition=&gad_source=1&gclid=Cj0KCQjwh7K1BhCZARIsAKOrVqEx2gUeOWjoAZd-WbR6_Q7-KRVTB7btz54vqGaz0J2H6eAdl92sz9gaArlEEALw_wcB",
    },
    {
      name: "Nodejs",
      Icon: <TbBrandNodejs />,
      href: "https://nodejs.org/en",
    },
  ];
  return (
    <>
      <div>
        <Button
          variant="contained"
          onClick={() => setOpen(true)}
          startIcon={<OpenInBrowserIcon />}
        >
          Open
        </Button>
        <Drawer anchor="top-button" open={open} onClose={() => setOpen(false)}>
          <List sx={{ width: "300px" }}>
            {courses.map((course, index) => (
              <ListItemButton key={index}>
                <ListItemText
                  onClick={() => setOpen(false)}
                  startIcon={course.Icon}
                >
                  <Link
                    variant="h6"
                    sx={{ color: "#969692" }}
                    href={course.href}
                    underline="none"
                  >
                    {course.Icon}
                    &nbsp; &nbsp; &nbsp;
                    {course.name}
                  </Link>
                </ListItemText>
              </ListItemButton>
            ))}
          </List>
        </Drawer>
        <br />
        <Snackbar open={true} autoHideDuration={4000}>
          <Alert severity="success">This is Alert Snackbar</Alert>
        </Snackbar>
        <br />
        <CircularProgress variant="determinate" value={75} color="secondary" />
        <br />
        <LinearProgress variant="determinate" color="secondary" value={75} />
        <br />
        <Rating
          value={value}
          onChange={(e, val) => setValue(val)}
          size="large"
          precision={0.5}
        />

        <Typography>Rated: {value !== undefined ? value : 0} stars </Typography>

        <br />
        <br />

        <IconButton onClick={() => alert("Icon BTN")}>
          <AddReactionIcon color="warning" />
        </IconButton>
      </div>
    </>
  );
};

export default DrawerMenu;
