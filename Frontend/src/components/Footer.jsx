import React from "react";
import { Box, Typography, Link, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "white",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0px -10px 30px rgba(0, 0, 0, 0.35)",
      }}>
      <Grid
        container
        sx={{
          maxWidth: "1200px",
          width: "100%",
        }}
        spacing={2}>
        {/* Left Section */}
        <Grid item xs={12} md={5}>
          <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
            {/* Logo */}
            <Box sx={{ mr: 2 }}>
              <img
                src={logo}
                alt="KAN E-Book Logo"
                style={{ width: "100px" }}
              />
            </Box>
            {/* Address */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}>
              <Typography variant="body2" color="text.secondary">
                468 Ly Thuong Kiet, Q.10, TP.HCM
              </Typography>
              {/* Social Media Icons */}
              <Box sx={{ display: "flex", gap: 1 }}>
                <Link href="https://facebook.com" target="_blank">
                  <FacebookIcon fontSize="large" color="primary" />
                </Link>
                <Link href="https://instagram.com" target="_blank">
                  <InstagramIcon fontSize="large" color="primary" />
                </Link>
                <Link href="https://twitter.com" target="_blank">
                  <TwitterIcon fontSize="large" color="primary" />
                </Link>
              </Box>
              {/* Phone */}
              <Typography variant="body2" color="text.secondary">
                Phone: (+84)12 345 6789
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Right Section: 2 Columns */}
        <Grid item xs={12} md={7}>
          <Grid container spacing={3}>
            {/* Column 1 */}
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Dịch vụ
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Điều khoản sử dụng
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Chính sách bảo hành sản phẩm
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Giới thiệu nhà sách KAN E-Book
              </Typography>
            </Grid>

            {/* Column 2 */}
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Hỗ trợ
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Chính sách đổi - trả - hoàn tiền
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Chính sách bảo hành - bồi hoàn
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Chính sách vận chuyển
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Bottom Text */}
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ textAlign: "center", marginTop: "1rem" }}>
        © 2024 KAN E-Book. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
