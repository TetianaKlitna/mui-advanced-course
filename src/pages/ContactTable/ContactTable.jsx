import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

import { contacts } from "../../data/ContactData.js";
const borderColor = { borderBottomColor: "primary.main" };

export default function ContactTable() {
  return (
    <TableContainer
      sx={{
        borderRadius: 1,
        boxShadow: 4,
        margin: 1,
        width: "calc(100% - 16px)",
      }}
    >
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "grid.main" }}>
            <TableCell sx={{ ...borderColor, width: "30%" }}>Name</TableCell>
            <TableCell sx={{ ...borderColor, width: "17%" }}>Role</TableCell>
            <TableCell sx={{ ...borderColor, width: "17%" }}>Skills</TableCell>
            <TableCell sx={{ ...borderColor, width: "17%" }}>
              Start Date
            </TableCell>
            <TableCell sx={{ ...borderColor, width: "19%" }}>
              Preference
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map((contact) => (
            <TableRow key={contact.id}>
              {Object.entries(contact).map(([key, value]) => {
                if (key === "id") {
                  return "";
                } else if (key === "skills") {
                  return (
                    <TableCell key={key} sx={{ ...borderColor }}>
                      {value.join(", ")}
                    </TableCell>
                  );
                } else if (key === "name") {
                  return (
                    <TableCell
                      key={key}
                      sx={{ ...borderColor, backgroundColor: "primary.light" }}
                      onClick = { event => {
                        console.log(event.target.innerHTML);
                      }}
                    >{`${value}`}</TableCell>
                  );
                }
                return (
                  <TableCell
                    key={key}
                    sx={{ ...borderColor }}
                  >{`${value}`}</TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
