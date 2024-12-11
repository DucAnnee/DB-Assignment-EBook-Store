import {
  Box,
  Checkbox,
  IconButton,
  Typography,
  TextField,
  Paper,
  Button,
} from "@mui/material";
import { Add, Remove, Delete, BorderLeft } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import empty_cart from "../assets/empty_cart.jpg";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Harry Potter and the Philosopher's Stone",
      price: 150000,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51UoqRAxwEL._SX331_BO1,204,203,200_.jpg",
      quantity: 1,
      selected: true,
    },
    {
      id: 2,
      name: "Harry Potter and the Chamber of Secrets",
      price: 150000,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51UoqRAxwEL._SX331_BO1,204,203,200_.jpg",
      quantity: 1,
      selected: false,
    },
  ]);

  const navigate = useNavigate();

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const handleSelectionChange = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const handleSelectAll = (checked) => {
    setCartItems((items) =>
      items.map((item) => ({ ...item, selected: checked }))
    );
  };

  const allSelected = cartItems.every((item) => item.selected);
  const selectedItems = cartItems.filter((item) => item.selected);
  const totalSum = selectedItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return cartItems.length === 0 ? (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        minHeight: "80vh", // Center the paper when no items
      }}>
      <Paper
        elevation={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          textAlign: "center",
          gap: "1rem",
        }}>
        <Box
          component="img"
          src={empty_cart}
          alt="Empty Cart"
          sx={{
            width: "150px",
            height: "auto",
            objectFit: "contain",
          }}
        />
        <Typography variant="h6" fontWeight="bold">
          Chưa có sản phẩm trong giỏ hàng của bạn
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/products")}>
          Mua sắm ngay
        </Button>
      </Paper>
    </Box>
  ) : (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "1rem",
        gap: "2rem",
      }}>
      {/* Left: Cart Items */}
      <Box
        sx={{
          flex: 2,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          maxHeight: "500px",
        }}>
        {/* Fixed Header */}
        <Box
          sx={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #ccc",
            textAlign: "center",
          }}>
          <Checkbox
            checked={allSelected}
            onChange={(e) => handleSelectAll(e.target.checked)}
            sx={{ pr: 15 }}
          />
          <Typography sx={{ flex: 2, fontWeight: "bold", pr: 14 }}>
            Tên sản phẩm
          </Typography>
          <Typography sx={{ flex: 1, fontWeight: "bold", pr: 3 }}>
            Số lượng
          </Typography>
          <Typography sx={{ flex: 1, fontWeight: "bold", pr: 3 }}>
            Đơn giá
          </Typography>
          <Typography sx={{ flex: 1, fontWeight: "bold" }}>Xoá</Typography>
        </Box>

        {/* Cart Items */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            scrollbarWidth: "none", // Hide scrollbar for Firefox
            "&::-webkit-scrollbar": {
              display: "none", // Hide scrollbar for Webkit-based browsers
            },
          }}>
          {cartItems.map((item) => (
            <Box key={item.id} sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                checked={item.selected}
                onChange={() => handleSelectionChange(item.id)}
              />
              <CartItem
                item={item}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemove}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Right: Payment Widget */}
      <Box
        sx={{
          flex: 1,
          maxWidth: "300px",
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
          border: "1px solid #ddd",
          borderRadius: "8px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Tổng cộng
        </Typography>
        <Typography variant="body1" mb={2}>
          Tổng tiền: {totalSum.toLocaleString()} VND
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            borderRadius: "12px",
          }}
          fullWidth
          disabled={selectedItems.length === 0}
          onClick={() => navigate("/checkout")}>
          Thanh toán
        </Button>
      </Box>
    </Box>
  );
}

const CartItem = ({ item, onQuantityChange, onRemove }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) return; // Prevent negative or zero quantity
    setQuantity(newQuantity);
    onQuantityChange(item.id, newQuantity);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem",
        borderBottom: "1px solid #ccc",
        gap: "1rem",
      }}>
      {/* Image */}
      <Box
        sx={{
          width: "80px",
          height: "80px",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "8px",
          border: "1px solid #ddd",
        }}>
        <img
          src={item.image}
          alt={item.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </Box>

      {/* Name and Price */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="body1" fontWeight="bold">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.price.toLocaleString()} VND
        </Typography>
      </Box>

      {/* Quantity */}
      <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <TextField
          type="number"
          value={quantity}
          onChange={(e) => handleQuantityChange(Number(e.target.value))}
          inputProps={{
            min: 1,
            style: { textAlign: "center", width: "50px" },
          }}
          sx={{ maxWidth: "60px" }}
        />
      </Box>

      {/* Total Price */}
      <Box>
        <Typography color="alert.main" fontWeight="bold">
          {(item.price * quantity).toLocaleString()} VND
        </Typography>
      </Box>

      {/* Remove Item */}
      <Box>
        <IconButton onClick={() => onRemove(item.id)}>
          <Delete />
        </IconButton>
      </Box>
    </Box>
  );
};
