import { Typography, AppBar, Tabs, Toolbar, Tab } from "@mui/material";
import { useState } from "react";
import ResponsiveGrid from "./ResponsiveGrid";
// import DrawerMenu from "./DrawerMenu";
// import Accord from "./Accord";
// import Containers from "./Containers";
// import ListsComponents from "./ListsComponents";
// import Cards from "./Cards";
// import Modals from "./Modals";

const AppBarMenu = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">LOGO</Typography>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab label="Home" />
            <Tab label="About" />
            <Tab label="Contact" />
          </Tabs>
        </Toolbar>
      </AppBar>

      <div style={{ marginTop: 100, marginLeft: 40 }}>
        {/* <Cards /> */}
        {/* <Modals /> */}
        {/* <Containers /> */}
        {/* <ListsComponents /> */}
        {/* <Accord /> */}
        {/* <DrawerMenu /> */}

        <ResponsiveGrid />
      </div>
    </div>
  );
};

export default AppBarMenu;
