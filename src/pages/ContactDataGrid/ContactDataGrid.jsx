import { DataGrid, GridToolbar  } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

import { contacts } from "../../data/ContactData.js";

const columns = (theme) => [
  {
    field: "name",
    headerName: "Name",
    headerClassName: "super-app-theme--header",
    //headerAlign: "center",
    flex: 1,
    width: 150,
    renderCell: (cellValues) => {
      return (
        <Box sx={{ color: "primary.main", fontSize: 18, fontWeight: "bold" }}>
          {cellValues.value}
        </Box>
      );
    },
  },
  {
    field: "role",
    headerName: "Role",
    headerClassName: "super-app-theme--header",
    //headerAlign: "center",
    width: 150,
  },
  {
    field: "skills",
    headerName: "Skills",
    headerClassName: "super-app-theme--header",
    //headerAlign: "center",
    width: 300,
    renderCell: (cellValues) => {
      //   debugger;
      return (
        <div style={{ color: theme.palette.primary.main }}>
          {cellValues.value ? cellValues.value.join(", ") : ""}
        </div>
      );
    },
  },
  {
    field: "startDate",
    headerName: "Start Date",
    headerClassName: "super-app-theme--header",
    //headerAlign: "center",
    width: 150,
  },
  {
    field: "preference",
    headerName: "Work Preference",
    headerClassName: "super-app-theme--header",
    //headerAlign: "center",
    width: 150,
  },
  {
    field: "Print",
    headerClassName: "super-app-theme--header",
    //headerAlign: "center",
    width: 150,
    renderCell: (params) => {
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={() => alert(`Print ${params.row.name}`)}
        >
          Print
        </Button>
      );
    },
  },
];

export default function ContactDataGrid() {
  const rows = () => [...contacts];
  const theme = useTheme();
  return (
    <Box
      sx={{
        "& .super-app-theme--header": {
          backgroundColor: "primary.main",
          color: "white",
        },
      }}
    >
      <DataGrid
        rows={rows()}
        columns={columns(theme)}
        HeaderHight={60}
        rowHeight={100}
        pagination={true}
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
}
