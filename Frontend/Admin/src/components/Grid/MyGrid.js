import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const MyGrid = ({
  completeData,
  searchFood,
  foodCategory,
  setSelectedStudentInfo,
  setAllowAction,
}) => {
  const [isEditRecord, setIsEditRecord] = React.useState(false);

  const columns = [
    {
      field: "image",
      headerName: "Image",
      width: 100,
      renderCell: (row) => (
        <div>
          <img
            src={row.value}
            alt="Profile"
            style={{
              marginTop: "5%",
              heigth: "50%",
              width: "50%",
              alignItems: "center",
              borderRadius: "100%",
            }}
          />
        </div>
      ),
      editable: true,
    },
    {
      field: "foodName",
      headerName: "Food name",
      width: 150,
      editable: true,
    },
    {
      field: "category",
      headerName: "Category",
      width: 150,
      editable: true,
    },
    {
      field: "ingredients",
      headerName: "Ingredients",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "calories",
      headerName: "Calories",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "price",
      headerName: "Price",
      width: 150,
      editable: true,
    },
    {
      field: "description",
      headerName: "Description",
      width: 530,
      editable: true,
    },
  ];

  //filtring data
  const filtered = completeData?.filter((val) =>
    val.foodName?.toLowerCase()?.includes(searchFood?.toLowerCase())
  );
  // filtered data
  const finalRow = !filtered.length ? completeData : filtered;

  // check box filter
  const completefiltered = finalRow?.filter((val) =>
    val?.category?.toLowerCase()?.includes(foodCategory?.toLowerCase())
  );
  const row = !completefiltered.length ? finalRow : completefiltered;

  // get single data with id
  function fetchStudentData(id) {
    // console.log(id[0]);
    const selectedStudentData = row?.filter((val) => val._id === id[0]);
    setSelectedStudentInfo(selectedStudentData);
    setAllowAction(isEditRecord);
  }
  return (
    <Box sx={{ height: 371, width: "100%" }}>
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={5}
        getRowId={(row) => row._id}
        checkboxSelection
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        onSelectionModelChange={(ids) => {
          setIsEditRecord(!isEditRecord);
          fetchStudentData(ids);
        }}
      />
    </Box>
  );
};
export default MyGrid;
