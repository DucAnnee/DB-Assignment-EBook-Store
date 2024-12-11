import {
  AppBar,
  Box,
  Toolbar,
  TextField,
  IconButton,
  InputAdornment,
  Avatar,
  Typography,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlined from "@mui/icons-material/NotificationsNoneOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Appbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Track login status
  const [anchorEl, setAnchorEl] = useState(null); // Track menu anchor
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget); // Open menu at button location
  };

  const handleMenuClose = () => {
    setAnchorEl(null); // Close menu
  };

  const handleMenuOptionClick = (option) => {
    handleMenuClose();
    if (!isLoggedIn) {
      if (option === "login") navigate("/login");
      if (option === "signup") navigate("/signup");
    } else {
      if (option === "logout") {
        console.log("Logging out...");
        setIsLoggedIn(false);
      } else {
        navigate(`/${option}`);
      }
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "rgba(255,255,255,1.0)",
        backdropFilter: "blur(10px)",
      }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: 2,
        }}>
        {/* Logo */}
        <Box
          sx={{
            width: "5vw",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Box
            component="img"
            src={logo}
            alt="KAN E-Book LOGO"
            sx={{
              height: "10%",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          />
        </Box>

        {/* Search bar */}
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            mx: 3,
          }}>
          <TextField
            label="Tìm kiếm..."
            variant="outlined"
            fullWidth
            sx={{
              flex: 1,
              borderRadius: "50px",
              backgroundColor: "#f0f0f0",
              border: "none",
              "& .MuiOutlinedInput-root": {
                "& fieldset": { border: "none" },
              },
              "& .MuiInputBase-input": { py: 2, height: "100%" },
              "& .MuiFormLabel-root": {
                fontSize: "0.9rem",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Icon Buttons */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mx: 3,
          }}>
          <IconButton>
            <NotificationsNoneOutlined sx={{ width: 30, height: 30 }} />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("/cart");
            }}>
            <ShoppingCartOutlinedIcon sx={{ width: 30, height: 30 }} />
          </IconButton>
        </Box>

        {/* User Button with Dropdown Menu */}
        <Box>
          <Button
            onClick={handleMenuOpen}
            sx={{
              borderRadius: "50px",
              backgroundColor: "#f0f0f0",
              padding: "0.5rem 1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              textTransform: "none",
            }}>
            <Avatar sx={{ width: 30, height: 30 }} />
            <Typography color="primary.dark" fontWeight="bold">
              {isLoggedIn ? "Người dùng" : "Tài khoản"}
            </Typography>
          </Button>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            MenuListProps={{
              "aria-labelledby": "account-button",
              width: "100%",
            }}
            sx={{
              "& .MuiPaper-root": {
                minWidth: anchorEl ? anchorEl.offsetWidth : "auto", // Set menu width equal to button width
              },
            }}>
            {!isLoggedIn ? (
              <>
                <MenuItem
                  onClick={() => handleMenuOptionClick("login")}
                  sx={{ width: "100%" }}>
                  Đăng nhập
                </MenuItem>
                <MenuItem
                  onClick={() => handleMenuOptionClick("signup")}
                  sx={{ width: "100%" }}>
                  Đăng ký
                </MenuItem>
              </>
            ) : (
              <>
                <MenuItem
                  onClick={() => handleMenuOptionClick("trang-ca-nhan")}>
                  Trang cá nhân
                </MenuItem>
                <MenuItem onClick={() => handleMenuOptionClick("lich-su")}>
                  Lịch sử mua hàng
                </MenuItem>
                <MenuItem onClick={() => handleMenuOptionClick("logout")}>
                  Đăng xuất
                </MenuItem>
              </>
            )}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
