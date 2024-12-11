import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    console.log(username, password);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}>
      <Box
        sx={{
          position: "relative",
          width: {
            xs: "90vw",
            sm: "80vw",
            md: "50vw",
            lg: "30vw",
            xl: "30vw",
          },
          height: "80vh",
          backgroundColor: "#fff",
          padding: "30px",
          boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.15)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "22px",
        }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "20%",
            flexGrow: 1,
          }}>
          <img src={logo} alt="HCMUT LOGO" style={{ height: "100%" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            flexGrow: 2,
          }}>
          <Typography
            color="primary.dark"
            textAlign="center"
            fontSize="1.8rem"
            fontWeight="bold">
            Đăng ký
          </Typography>
        </Box>
        <Divider sx={{ width: "100%" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            flexGrow: 3,
            flexWrap: "wrap",
          }}>
          <TextField
            label="Tài khoản"
            variant="outlined"
            fullWidth
            value={username}
            sx={{
              // marginBottom: "2%",
              borderRadius: "20px",
              "& .MuiOutlinedInput-root": {
                // height: "3.5vw",
                borderRadius: "10px",
              },
              "& .MuiInputLabel-root": {
                // fontSize: "1vw",
                alignItems: "center",
              },
            }}
            onChange={handleUsernameChange}
          />
          <TextField
            label="Mật khẩu"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            sx={{
              borderRadius: "20px",
              "& .MuiOutlinedInput-root": {
                // height: "3.5vw",
                borderRadius: "10px",
              },
              "& .MuiInputLabel-root": {
                // fontSize: "1vw",
                alignItems: "center",
              },
            }}
            onChange={handlePasswordChange}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexFlow: "row wrap",
            flexGrow: 4,
          }}>
          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              //   backgroundColor: "primary.main",
              color: "primary.main",
              borderColor: "primary.main",
              borderRadius: "12px",
              width: "48%",
              height: "50%",
              fontSize: "14px", //14px
              fontWeight: "bold",
              boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)",
            }}
            onClick={() => {
              navigate("/");
            }}>
            Trở về
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary.main"
            sx={{
              textTransform: "none",
              backgroundColor: "primary.main",
              borderRadius: "12px",
              color: "white",
              width: "48%",
              height: "50%",
              fontSize: "14px",
              fontWeight: "bold",
              boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)",
            }}>
            Đăng ký
          </Button>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "5%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexFlow: "row wrap",
            p: 0,
            m: 0,
            gap: 1,
          }}>
          <Typography fontSize="0.8rem">Bạn đã có tài khoản? </Typography>
          <Button
            sx={{
              p: 0,
              m: 0,
            }}
            onClick={() => {
              navigate("/login");
            }}>
            <Typography fontSize="0.8rem" color="primary.main">
              Đăng nhập
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
