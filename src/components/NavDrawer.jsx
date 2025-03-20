import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { NavLink } from "react-router-dom";

const list = [
  { text: "Input Form", route: "form" },
  { text: "Contact Card Grid", route: "grid" },
  { text: "Contact Table", route: "table" },
  { text: "Contact Data Grid", route: "datagrid" },
];

export default function NavDrawer({ sxNavDrawer, open }) {
  return (
    <>
      <Drawer
        disableEnforceFocus
        variant="temporary"
        open={open}
        sx={sxNavDrawer.drawer}
        slotProps={{
          paper: {
            sx: sxNavDrawer.drawerPaper,
            elevation: 9,
          },
        }}
      >
        <Toolbar />
        <List>
          {list.map((item, index) => (
            <ListItem sx={{ borderBottom: "1px solid black", borderBottomColor: "primary.main" }} key={index}>
              <NavLink to={item.route}>{item.text}</NavLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
