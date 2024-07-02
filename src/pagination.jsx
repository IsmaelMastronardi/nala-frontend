import { Button, Typography } from "@mui/material";

export const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </Button>
      <Typography variant="h7">{currentPage} of {totalPages}</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </Button>
    </div>
  )
};