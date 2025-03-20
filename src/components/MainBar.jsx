import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";

import NavDrawer from "./NavDrawer";



export default function MainBar({sxMainBar, open, setOpen}) {

  return (
    <>
      <AppBar position="fixed" sx={sxMainBar.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => {setOpen(!open)}}
            sx={{...sxMainBar.menuButton}}
          ><MenuIcon /></IconButton>
          <Typography variant="h6" noWrap>
            Advanced Material UI Styling
          </Typography>
        </Toolbar>
      </AppBar>
      <NavDrawer sxNavDrawer={sxMainBar} open={open} />
    </>
  );
}
