import { Backdrop, Box, CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <Box>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
}
