import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  IconButton,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Edit, Delete } from "@mui/icons-material";

const UserAddress = (address) => {
  const { fullName, phone, province, city, district, ward, detailAddress, id } =
    address; // Ensure `id` is part of the address object
  const navigate = useNavigate();

  const handleDelete = () => {
    // Add database deletion logic here
    console.log(`Deleting address with ID: ${id}`);
    // Example: call API to delete address
  };

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
      {/* Full Name, Phone, and Action Buttons */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 1,
        }}>
        {/* Full Name and Phone */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1,
          }}>
          <Typography variant="h6" fontWeight="bold" color="primary">
            {fullName}
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Typography variant="body1" color="text.secondary">
            SĐT: {phone}
          </Typography>
        </Box>

        {/* Action Buttons */}
        <Box>
          {/* Edit Button */}
          <IconButton
            color="primary"
            onClick={() => navigate(`/customer/addresses/${id}`)}>
            <Edit />
          </IconButton>
          {/* Delete Button */}
          <IconButton color="error" onClick={handleDelete}>
            <Delete />
          </IconButton>
        </Box>
      </Box>

      <Divider />

      {/* Address */}
      <Typography variant="body1">
        {`${detailAddress}, ${ward}, ${district}, ${city}, ${province}`}
      </Typography>
    </Box>
  );
};

export default function Checkout() {
  const navigate = useNavigate();
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      fullName: "John Doe",
      phone: "123456789",
      province: "Province A",
      city: "City B",
      district: "District C",
      ward: "Ward D",
      detailAddress: "123 Main St",
    },
    {
      id: 2,
      fullName: "Jane Smith",
      phone: "987654321",
      province: "Province X",
      city: "City Y",
      district: "District Z",
      ward: "Ward W",
      detailAddress: "456 Elm St",
    },
  ]);
  const [selectedAddress, setSelectedAddress] = useState(addresses[0]);
  const [showAllAddresses, setShowAllAddresses] = useState(false);

  return (
    <Box
      sx={{
        alignSelf: "center",
        alignContent: "center",
        width: "90vw",
        minHeight: "100%",
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        gap: 2,
        py: 3,
      }}>
      {/* Delivery Address Section */}
      <Paper
        elevation={8}
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          padding: 3,
          gap: 2,
          borderRadius: "20px",
        }}>
        <Typography variant="h6" fontWeight="bold">
          Địa chỉ giao hàng
        </Typography>

        {!showAllAddresses && selectedAddress && (
          <Button
            variant="outlined"
            fullWidth
            onClick={() => setShowAllAddresses(true)}
            sx={{ justifyContent: "flex-start", textTransform: "none" }}>
            {`${selectedAddress.detailAddress}, ${selectedAddress.ward}, ${selectedAddress.district}, ${selectedAddress.city}, ${selectedAddress.province}`}
          </Button>
        )}

        {showAllAddresses && (
          <Paper
            elevation={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              padding: 2,
              borderRadius: "10px",
            }}>
            {addresses.map((address) => (
              <Button
                key={address.id}
                variant="outlined"
                fullWidth
                onClick={() => {
                  setSelectedAddress(address);
                  setShowAllAddresses(false);
                }}
                sx={{ justifyContent: "flex-start", textTransform: "none" }}>
                {`${address.detailAddress}, ${address.ward}, ${address.district}, ${address.city}, ${address.province}`}
              </Button>
            ))}

            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/customer/addresses/new")}
              sx={{ mt: 2 }}>
              Thêm địa chỉ
            </Button>
          </Paper>
        )}
      </Paper>

      {/* Payment Options Section */}
      <Paper
        elevation={8}
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          padding: 3,
          gap: 2,
          borderRadius: "20px",
        }}>
        <Typography variant="h6" fontWeight="bold">
          Payment Options
        </Typography>
        <RadioGroup>
          {/* Payment options */}
          {/* Add relevant logic here */}
        </RadioGroup>
      </Paper>

      {/* Action Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          mt: 2,
        }}>
        <Button variant="outlined" onClick={() => navigate(-1)}>
          Return
        </Button>
        <Button variant="contained" color="primary">
          Proceed
        </Button>
      </Box>
    </Box>
  );
}
