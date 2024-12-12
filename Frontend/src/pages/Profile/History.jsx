import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  FormLabel,
  Grid2,
  IconButton,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router";
import { Edit, Delete } from "@mui/icons-material";

export default function History() {
  const userInformation = {
    pfp: logo,
    lastName: "Nguyễn Văn",
    firstName: "An",
    phone: "0123456789",
    gender: "Nam",
    email: "placeholder@gmail.com",
    birthday: {
      day: "01",
      month: "01",
      year: "2000",
    },
  };

  return (
    <Box
      sx={{
        alignSelf: "center",
        alignContent: "center",
        width: "90vw",
        minHeight: "100%", // Ensure the content takes the required space
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "row",
        gap: 2,
        py: 3,
      }}>
      <Paper
        elevation={8}
        sx={{
          position: "sticky",
          top: "80px",
          width: "25%",
          height: "100%",
          flex: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "20px",
          p: 3,
        }}>
        <UserProfileNav {...userInformation} />
      </Paper>
      <Paper
        elevation={8}
        sx={{
          width: "75%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "20px",
          gap: 2,
          p: 3,
          // overflowY: "auto",
          // hide scrollbar
          // "&::-webkit-scrollbar": {
          //   display: "none",
          // },
        }}>
        NOTHING YET
      </Paper>
    </Box>
  );
}

const UserProfileNav = (userInformation) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}>
      {/* User profile picture */}
      <Box>
        <img
          src={userInformation.pfp}
          alt="Ảnh đại diện"
          style={{
            height: "8vw",
            objectFit: "cover",
            boxShadow: "5px 5px 10px rgba(0,0,0,0.5)",
            borderRadius: "888px",
          }}
        />
      </Box>
      <Typography fontWeight="Bold" fontSize="1.2rem" color="primary.main">
        Xin chào, {userInformation.firstName}!
      </Typography>
      <Divider sx={{ width: "100%" }} />
      {/* Navigation buttons */}
      <Link
        to="/customer/profile"
        style={{ textDecoration: "none", width: "100%" }}>
        <Typography
          fontWeight="Bold"
          fontSize="1rem"
          sx={{
            color: "text.disabled",
            transition: "transform 0.2s, color 0.2s", // Smooth transition for hover effects
            "&:hover": {
              transform: "translateX(10px)", // Offset to the right by 10px
              color: "primary.dark",
            }, // Change color on hover
          }}>
          Hồ sơ cá nhân
        </Typography>
      </Link>
      <Link
        to="/customer/addresses"
        style={{ textDecoration: "none", width: "100%" }}>
        <Typography
          fontWeight="Bold"
          fontSize="1rem"
          sx={{
            color: "text.disabled",
            transition: "transform 0.2s, color 0.2s", // Smooth transition for hover effects
            "&:hover": {
              transform: "translateX(10px)", // Offset to the right by 10px
              color: "primary.dark",
            }, // Change color on hover
          }}>
          Địa chỉ nhận hàng
        </Typography>
      </Link>
      <Link
        to="/customer/history"
        style={{ textDecoration: "none", width: "100%" }}>
        <Typography
          fontWeight="Bold"
          fontSize="1rem"
          sx={{
            color: "primary.dark",
            transition: "transform 0.2s, color 0.2s", // Smooth transition for hover effects
            "&:hover": {
              transform: "translateX(10px)", // Offset to the right by 10px
              color: "primary.dark",
            }, // Change color on hover
          }}>
          Lịch sử mua hàng
        </Typography>
      </Link>
    </Box>
  );
};
