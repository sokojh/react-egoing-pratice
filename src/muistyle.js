import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
function createHandler() {
  alert("안녕!");
}
export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text" onClick={createHandler}>
        Text
      </Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}
