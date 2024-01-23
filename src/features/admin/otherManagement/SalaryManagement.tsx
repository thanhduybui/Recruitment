import { MainSectionContainer } from "@components/ui";
import { DataGrid, GridColDef, viVN } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "name",
    headerName: "Tên mức lương",
    width: 200,
    sortable: false,
  },
  {
    field: "status",
    headerName: "Trạng thái",
    width: 130,
    sortable: false,
  },
  {
    field: "createBy",
    headerName: "Người tạo",
    width: 160,
    sortable: false,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function SalaryManagement() {
  return (
    <MainSectionContainer heading="Quản lý mức lương">
      <div style={{ height: 400, width: "100%", marginTop: "1rem" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          disableColumnMenu
          checkboxSelection
          localeText={viVN.components.MuiDataGrid.defaultProps.localeText}
        />
      </div>
    </MainSectionContainer>
  );
}
