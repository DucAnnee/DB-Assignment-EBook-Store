import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";
import { Visibility } from "@mui/icons-material";

export default function OrderHistory() {
  const sampleOrders = [
    {
      id: 1,
      items: [
        { name: "Book 1", price: 100, quantity: 2 },
        { name: "Book 2", price: 150, quantity: 1 },
      ],
      date: "2023-12-01",
    },
    {
      id: 2,
      items: [
        { name: "Toy 1", price: 200, quantity: 3 },
        { name: "Toy 2", price: 250, quantity: 1 },
      ],
      date: "2023-12-02",
    },
    {
      id: 3,
      items: [{ name: "Book 3", price: 300, quantity: 1 }],
      date: "2023-12-03",
    },
  ];

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
        }}>
        {sampleOrders.map((order, index) => (
          <UserHistory key={index} order={order} />
        ))}
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
const UserHistory = ({ order }) => {
  const [showMore, setShowMore] = useState(false);
  const totalQuantity = order.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  const totalSum = order.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
        padding: 2,
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
      }}>
      {/* Order Date and Total */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <Typography variant="h6" fontWeight="bold" color="primary">
          Ngày đặt: {order.date}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Tổng: {totalSum.toLocaleString()} VNĐ
        </Typography>
      </Box>

      <Divider />

      {/* Items in Order */}
      <Box sx={{ width: "100%", display:"flex", justifyContent:"center", alignItems:"center" }}>
        {(showMore ? order.items : [order.items[0]]).map((item, index) => (
          <Grid
            container
            spacing={3}
            key={index}
            sx={{
              width: "90%",
              backgroundColor: "#fff",
              display: "flex",
              flexFlow: "row nowrap",
              alignItems: "center",
              borderBottom:
                index !== order.items.length - 1 ? "1px solid #ccc" : "none",
              textAlign: "center",
            }}>
            {/* Item Image and Name */}
            <Grid item xs={1} md={8}>
              <Box
                sx={{
                  display: "flex",
                  flexFlow: "row nowrap",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "1rem",
                  justifyContent: "flex-start",
                }}>
                <img
                  src={item.image || "https://via.placeholder.com/150"} // Replace with item.image if available
                  alt={item.name}
                  style={{
                    width: "15%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
                <Typography variant="body2" fontWeight="bold" textAlign="left">
                  {item.name}
                </Typography>
              </Box>
            </Grid>

            {/* Item Quantity */}
            <Grid item xs={1} md={2}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  justifyContent: "center",
                }}>
                <Typography>{item.quantity}</Typography>
              </Box>
            </Grid>

            {/* Item Price */}
            <Grid item xs={1} md={2}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <Typography
                  color="alert.main"
                  fontWeight="bold"
                  fontSize="1rem">
                  {(item.price * item.quantity).toLocaleString()} VNĐ
                </Typography>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Box>

      {/* Show More Button */}
      {order.items.length > 1 && (
        <Button
          variant="text"
          color="primary"
          onClick={() => setShowMore(!showMore)}>
          {showMore ? "Ẩn bớt" : "Hiển thị thêm"}
        </Button>
      )}

      {/* Total Quantity */}
      <Divider />
      <Typography variant="body2" color="text.secondary">
        Tổng số lượng: {totalQuantity}
      </Typography>
    </Box>
  );
};
