import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
function createHandler() {
  alert("안녕!");
}
export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button
        component={Link}
        to="create"
        variant="text"
        onClick={createHandler}
      >
        Text
      </Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined" onClick={() => {}}>
        삭제버튼
      </Button>
    </Stack>
  );
}
