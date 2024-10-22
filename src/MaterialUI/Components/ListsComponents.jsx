import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

const ListsComponents = () => {
  const courses = ["react", "nodejs", "javaScript"];
  return (
    <>
      <div>
        <List sx={{ width: 250, bgcolor: "gray" }} >
          {courses.map((curElem) => (
            <ListItem>
              <ListItemButton>%</ListItemButton>
              <ListItemText>{curElem}</ListItemText>
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
};

export default ListsComponents;
