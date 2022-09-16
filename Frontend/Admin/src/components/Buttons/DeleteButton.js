import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
const DeleteButton = ({ selectedStudentInfo, setCompleteData }) => {
  // updated information
  const getStudents = () => {
    fetch("/getFood").then((result) => {
      result.json().then((resp) => {
        setCompleteData(resp);
      });
    });
  };
  React.useEffect(() => {
    getStudents();
  }, []);
  // console.log(selectedStudentInfo);
  const deleteStudentInfo = async () => {
    await fetch(`/delete/${selectedStudentInfo[0]._id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    await getStudents();
  };
  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        color="error"
        onClick={deleteStudentInfo}
      >
        Delete
      </Button>
    </div>
  );
};

export default DeleteButton;
