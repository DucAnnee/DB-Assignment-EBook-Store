import {
  AppBar,
  Box,
  Toolbar,
  TextField,
  IconButton,
  Select,
  MenuItem,
  InputAdornment,
  Avatar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Appbar() {
  const [userOption, setUserOption] = useState("");
  const navigate = useNavigate();

  const handleUserOptionChange = (event) => {
    setUserOption(event.target.value);
    if (event.target.value === "logout") {
      // Perform logout logic here
      console.log("Logging out...");
    } else {
      navigate(`/${event.target.value}`);
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "rgba(255,255,255,0.2)",
        backdropFilter: "blur(10px)",
      }}>
      <Toolbar
        className="flex justify-between items-center px-6"
        sx={{
          display: "display",
          justifyContent: "center",
          alignItems: "center",
          paddingX: 2,
        }}>
        <Box
          sx={{
            height: "10vh",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          {/* Logo */}
          <Box
            component="img"
            src={logo} // Replace with your logo
            alt="KAN E-Book LOGO"
            sx={{
              height: "100%",
              cursor: "pointer",
              marginLeft: 3,
              marginRight: 5,
            }}
            onClick={() => navigate("/")}
          />

          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            {/* Search Bar */}
            <TextField
              label="Tìm kiếm..."
              variant="outlined"
              fullWidth
              sx={{
                flex: 1, // Makes the search bar take available space
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
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton edge="end">
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />

            {/* User Select Box */}
            <Select
              value={userOption}
              onChange={handleUserOptionChange}
              displayEmpty
              sx={{
                marginLeft: 3,
                borderRadius: "50px",
                backgroundColor: "#f0f0f0",
                height: "100%",
                flex: 1, // Makes the select box take equal width to the search bar
                paddingLeft: 1,
                "& .MuiSelect-icon": { right: 5 },
                "& .MuiInputBase-root": {
                  border: "none", // Remove the border
                },
              }}>
              <MenuItem value="" disabled>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar sx={{ width: 20, height: 20, marginRight: 1 }} />
                  <span>User</span>
                </Box>
              </MenuItem>
              <MenuItem value="trang-ca-nhan">Trang cá nhân</MenuItem>
              <MenuItem value="lich-su">Lịch sử mua hàng</MenuItem>
              <MenuItem value="logout">Đăng xuất</MenuItem>
            </Select>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
