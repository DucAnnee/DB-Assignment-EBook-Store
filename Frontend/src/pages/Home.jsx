import { Box, Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container
      sx={{
        display: "flex",
        height: "80vh",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
      <Box sx={{ color: "primary.main" }}>
        <Typography variant="h1" sx={{ fontWeight: "500" }}>
          Chào mừng!
        </Typography>
        <Typography variant="h3">Đến với trang chủ</Typography>
      </Box>
    </Container>
  );
}
