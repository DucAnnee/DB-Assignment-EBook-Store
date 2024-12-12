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
import { Link } from "react-router";
import { ArrowRightAlt, ChevronRight } from "@mui/icons-material";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("profile");

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
          p: 3,
        }}>
        <UserProfileForm {...userInformation} />
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
            color: "primary.dark",
            transition: "transform 0.2s, color 0.2s", // Smooth transition for hover effects
            "&:hover": {
              transform: "translateX(10px)", // Offset to the right by 10px
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
            color: "text.disabled",
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
const UserProfileForm = (userInformation) => {
  const [isLocked, setIsLocked] = useState(!!userInformation);

  const [userInfo, setFormData] = useState(
    isLocked
      ? userInformation
      : {
          lastName: "",
          firstName: "",
          phone: "",
          email: "",
          gender: "",
          birthday: {
            day: "",
            month: "",
            year: "",
          },
        }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["day", "month", "year"].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        birthday: {
          ...prev.birthday,
          [name]: value,
        },
      }));
    } else {
      setFormData({ ...userInformation, [name]: value });
    }
  };

  const handleSubmit = () => {
    if (!isLocked) {
      setIsLocked(true);
      console.log("Submitting form data:", userInformation);
      // Add database submission logic here
    } else {
      setIsLocked(false);
      console.log("Unlock the form for editing.");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={(e) => e.preventDefault()}
      display="flex"
      width="100%"
      flexDirection="column"
      gap={2}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography>Họ</Typography>
        <TextField
          required
          name="lastName"
          value={userInformation.lastName}
          onChange={handleChange}
          placeholder="Nhập họ"
          fullWidth
          disabled={isLocked}
          sx={{ maxWidth: "70%" }}
          slotProps={{
            input: {
              sx: {
                borderRadius: "12px",
              },
            },
          }}
        />
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography>Tên</Typography>
        <TextField
          required
          name="firstName"
          value={userInformation.firstName}
          onChange={handleChange}
          placeholder="Nhập tên"
          fullWidth
          disabled={isLocked}
          sx={{ maxWidth: "70%" }}
          // Make the border radius of the input box 12px
          slotProps={{
            input: {
              sx: {
                borderRadius: "12px",
              },
            },
          }}
        />
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography>Số điện thoại</Typography>
        <TextField
          required
          name="phone"
          value={userInformation.phone}
          onChange={handleChange}
          placeholder="0385959265"
          fullWidth
          disabled={isLocked}
          sx={{ maxWidth: "70%" }}
          slotProps={{
            input: {
              sx: {
                borderRadius: "12px",
              },
            },
          }}
        />
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography>Email</Typography>
        <TextField
          name="email"
          value={userInformation.email}
          onChange={handleChange}
          placeholder="Thêm mới"
          fullWidth
          disabled={isLocked}
          sx={{ maxWidth: "70%" }}
          slotProps={{
            input: {
              sx: {
                borderRadius: "12px",
              },
            },
          }}
        />
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography>Giới tính</Typography>
        <RadioGroup
          row
          name="gender"
          value={userInformation.gender || ""}
          onChange={handleChange}
          sx={{ display: "flex", flex: 1, justifyContent: "right" }}>
          <FormControlLabel
            value="Nam"
            control={<Radio />}
            label="Nam"
            disabled={isLocked}
          />
          <FormControlLabel
            value="Nữ"
            control={<Radio />}
            label="Nữ"
            disabled={isLocked}
          />
        </RadioGroup>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography>Sinh nhật</Typography>
        <Box display="flex" gap={1} sx={{ flex: 1, maxWidth: "70%" }}>
          <TextField
            required
            name="day"
            value={userInformation.birthday.day}
            onChange={handleChange}
            placeholder="DD"
            disabled={isLocked}
            sx={{ flex: 1 }}
            slotProps={{
              input: {
                sx: {
                  borderRadius: "12px",
                },
              },
            }}
          />
          <TextField
            required
            name="month"
            value={userInformation.birthday.month}
            onChange={handleChange}
            placeholder="MM"
            disabled={isLocked}
            sx={{ flex: 1 }}
            slotProps={{
              input: {
                sx: {
                  borderRadius: "12px",
                },
              },
            }}
          />
          <TextField
            required
            name="year"
            value={userInformation.birthday.year}
            onChange={handleChange}
            placeholder="YYYY"
            disabled={isLocked}
            sx={{ flex: 2 }}
            slotProps={{
              input: {
                sx: {
                  borderRadius: "12px",
                },
              },
            }}
          />
        </Box>
      </Box>
      <Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            fontWeight: "bold",
            fontSize: "1rem",
            borderRadius: "12px",
          }}
          fullWidth
          onClick={handleSubmit}>
          {isLocked ? "Thay đổi" : "Lưu thay đổi"}
        </Button>
      </Box>
    </Box>
  );
};
