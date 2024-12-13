import {
  Box,
  Checkbox,
  IconButton,
  Typography,
  TextField,
  Paper,
  Button,
  Grid,
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
      price: 150,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51UoqRAxwEL._SX331_BO1,204,203,200_.jpg",
      quantity: 1,
      selected: true,
    },
    {
      id: 2,
      name: "Harry Potter and the Chamber of Secrets",
      price: 150,
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
        minHeight: "80vh",
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
          borderRadius: "20px",
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
        <Typography color="primary.dark" fontSize="1.5rem" fontWeight="bold">
          Chưa có sản phẩm trong giỏ hàng của bạn
        </Typography>
        <Button
          variant="contained"
          sx={{
            color: "white",
            backgroundColor: "primary.main",
            borderRadius: "12px",
          }}
          onClick={() => navigate("/products")}>
          Mua sắm ngay
        </Button>
      </Paper>
    </Box>
  ) : (
    <Box
      sx={{
        width: "80vw",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        py: "1rem",
        gap: "2rem",
      }}>
      {/* Left: Cart Items */}
      <Box
        sx={{
          width: "70%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          alignItems: "flex-start",
          justifyContent: "center",
        }}>
        {/* Fixed Header */}
        <Grid
          container
          spacing={2}
          sx={{
            width: "100%",
            position: "sticky",
            top: 0,
            zIndex: 1,
            backgroundColor: "#fff",
            borderBottom: "1px solid #ccc",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Grid item xs={12} md={1}>
            <Checkbox
              checked={allSelected}
              onChange={(e) => handleSelectAll(e.target.checked)}
            />
          </Grid>

          <Grid item xs={12} md={6.5}>
            <Typography sx={{ fontWeight: "bold", textAlign: "center" }}>
              Sản phẩm
            </Typography>
          </Grid>
          <Grid item xs={12} md={1.5}>
            <Typography sx={{ fontWeight: "bold", textAlign: "center" }}>
              Số lượng
            </Typography>
          </Grid>
          <Grid item xs={12} md={1.5}>
            <Typography sx={{ fontWeight: "bold", textAlign: "center" }}>
              Đơn giá
            </Typography>
          </Grid>

          <Grid item xs={12} md={1.5}>
            <Typography sx={{ fontWeight: "bold", textAlign: "center" }}>
              Xoá
            </Typography>
          </Grid>
        </Grid>

        {/* Cart Items */}
        <Box
          sx={{
            overflowY: "auto",
            scrollbarWidth: "none", // Hide scrollbar for Firefox
            "&::-webkit-scrollbar": {
              display: "none", // Hide scrollbar for Webkit-based browsers
            },
          }}>
          {cartItems.map((item) => (
            <Grid
              contaniner
              key={item.id}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <Grid
                item
                md={1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <Checkbox
                  checked={item.selected}
                  onChange={() => handleSelectionChange(item.id)}
                />
              </Grid>
              <Grid
                item
                md={11}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <CartItem
                  item={item}
                  onQuantityChange={handleQuantityChange}
                  onRemove={handleRemove}
                />
              </Grid>
            </Grid>
          ))}
        </Box>
      </Box>

      {/* Right: Payment Widget */}
      <Box
        sx={{
          width: "30%",
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
          Tổng tiền: {totalSum.toLocaleString()}.000 VNĐ
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
    <Grid
      container
      spacing={3}
      columns={{
        xs: 11,
        md: 11,
      }}
      sx={{
        backgroundColor: "#fff",
        display: "flex",
        flexFlow: "row nowrap",
        alignItems: "center",
        borderBottom: "1px solid #ccc",
        textAlign: "center",
      }}>
      <Grid item xs={1} md={6.5}>
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
            src={item.image}
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

      <Grid item xs={1} md={1.5}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            justifyContent: "center",
          }}>
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
      </Grid>

      <Grid item xs={1} md={1.5}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Typography color="alert.main" fontWeight="bold" fontSize="1rem">
            {item.price * quantity}.000 VNĐ
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={1} md={1.5}>
        <IconButton onClick={() => onRemove(item.id)}>
          <Delete />
        </IconButton>
      </Grid>
    </Grid>
  );
};
