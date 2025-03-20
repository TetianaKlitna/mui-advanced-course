import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import { contacts } from "../../data/ContactData.js";

const contactLIHeight = 24;
let maxSkills = 1;

const ContactCard = ({ contact, open }) => {
  console.log(maxSkills, 104 + maxSkills * contactLIHeight);

  return (
    <Grid item key={contact.id} xs={12} sm={6} >
      <Card sx={{ width: 300, boxShadow: 6 }}>
        <CardHeader
          sx={{
            borderBottom: "1px solid",
            borderBottomColor: "primary.main",
          }}
          title={contact.name}
          subheader={contact.role}
          avatar={
            <Avatar sx={{ backgroundColor: "primary.main" }}>
              {contact.name?.substring(0, 1).toUpperCase() || "A"}
            </Avatar>
          }
        />
        <Collapse in={open} timeout={2000} orientation="vertical">
          <CardContent>
            <Typography>
              <b>Start Date:</b> {contact.startDate}
            </Typography>
            <Typography>
              <b>Work Preference:</b> {contact.preference}
            </Typography>
            <SkillsList skills={contact.skills} />
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
};

const SkillsList = ({ skills }) => {
  if (skills) {
    maxSkills = maxSkills < skills.length ? skills.length : maxSkills;
  }
  console.log(maxSkills);

  return (
    <List
      sx={{
        listStyle: "list-item",
        listStyleType: "circle",
        paddingLeft: 2,
        height: maxSkills * contactLIHeight,
      }}
      subheader={
        <ListSubheader
          sx={{
            fontSize: "1.25rem",
            color: "black",
            paddingLeft: 0,
          }}
        >
          Skills:
        </ListSubheader>
      }
    >
      {skills?.map((skill, index) => (
        <li key={index} style={{ paddingBottom: "2px" }}>
          {skill}
        </li>
      ))}
    </List>
  );
};

export default function ContactCardGrid() {
  const [open, setOpen] = useState(true);

  return (
    <Box m={3}>
      <Button
        sx={{ marginBottom: 3 }}
        variant="contained"
        onClick={() => setOpen(!open)}
      >
        Collapse
      </Button>

      <Grid
        container
        spacing={3}
        flex justifyContent='center' alignItems='center'
        sx={{ backgroundColor: "grid.main", width:700}}
      >
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} open={open} />
        ))}
      </Grid>
    </Box>
  );
}
