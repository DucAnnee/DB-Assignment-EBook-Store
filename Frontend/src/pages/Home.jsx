import {
  Box,
  Button,
  Grid2,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import lambanvoibautroi from "../assets/nna-lambanvoibautroi.jpg";
import ngoikhoctrencay from "../assets/nna-ngoikhoctrencay.jpg";
import quangodilen from "../assets/nna-quangodilen.jpg";
import hondaphuthuy from "../assets/hp-hondaphuthuy.jpg";
import hoangtulai from "../assets/hp-hoangtulai.jpg";
import baoboituthan from "../assets/hp-baoboituthan.jpg";
import phongchuabimat from "../assets/hp-phongchuabimat.jpg";
import chieccoclua from "../assets/hp-chieccoclua.jpg";

import { useState } from "react";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

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
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        gap: 2,
        py: 3,
      }}>
      <Paper
        elevation={8}
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "20px",
          py: 2,
        }}>
        {/* Trending text */}
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            // justifyContent: "space-between",
            alignContent: "space-between",
            // alignItems: "flex-start",
            px: 10,
            gap: 4,
            flexGrow: 1,
          }}>
          <Box>
            <Typography fontWeight="bold" fontSize="3rem" color="primary.main">
              Sách mới xuất bản
            </Typography>
            <Typography fontSize="1.3rem" color="primary.dark">
              Cùng khám phá những cuốn sách mới nhất từ các tác giả nổi tiếng
            </Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "primary.main",
                color: "white",
                fontWeight: "bold",
                fontSize: "1.2rem",
                borderRadius: "12px",
              }}
              onClick={() => navigate("/products")}>
              Khám phá thêm
            </Button>
          </Box>
        </Box>

        {/* Book Carousel */}
        <Box
          sx={{
            width: "60%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <TrendingBookSlider />
        </Box>
      </Paper>

      <Paper
        elevation={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "20px",
          width: "100%",
          py: 2,
        }}>
        <Box
          sx={{
            display: "flex",
            alignContent: "flex-start",
          }}>
          <Typography fontWeight="bold" fontSize="2rem" color="primary.dark">
            Bộ sưu tập bán chạy
          </Typography>
        </Box>
        <FeaturedBooks />
      </Paper>
    </Box>
  );
}

const FeaturedBooks = () => {
  const featured = [
    {
      image: hondaphuthuy,
      title: "Hòn Đá Phù Thủy",
      author: "J.K. Rowling",
    },
    {
      image: hoangtulai,
      title: "Hoàng Tử Lai",
      author: "J.K. Rowling",
    },
    {
      image: baoboituthan,
      title: "Bảo Bối Tử Thần",
      author: "J.K. Rowling",
    },
    {
      image: phongchuabimat,
      title: "Phòng Chứa Bí Mật",
      author: "J.K. Rowling",
    },
    {
      image: chieccoclua,
      title: "Chiếc Cốc Lửa",
      author: "J.K. Rowling",
    },
  ];

  return (
    <Box sx={{ overflowX: "auto", px: 3, py: 3 }}>
      <Grid2 container spacing={8} sx={{ display: "flex", flexWrap: "nowrap" }}>
        {featured.map((book, index) => (
          <Grid2 key={index} item sx={{ height: "30vh", flexShrink: 0 }}>
            <Box
              sx={{
                height: "80%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}>
              {/* Book Image */}
              <img
                src={book.image}
                alt={book.title}
                style={{
                  height: "100%",
                  width: "auto",
                  objectFit: "contain",
                  boxShadow: "5px 5px 10px rgba(0,0,0,0.5)",
                  borderRadius: "8px",
                }}
              />
              {/* Book Title */}
              <Typography
                fontSize="1rem"
                color="primary.dark"
                mt={1}
                align="center"
                fontWeight="bold">
                {book.title}
              </Typography>
              {/* Author */}
              <Typography fontSize="0.8rem" color="primary.dark" align="center">
                {book.author}
              </Typography>
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

const TrendingBookSlider = () => {
  const books = [
    {
      image: lambanvoibautroi,
      title: "Làm Bạn Với Bầu Trời",
      author: "Nguyễn Nhật Ánh",
      price: "120,000 VND",
    },
    {
      image: ngoikhoctrencay,
      title: "Ngồi Khóc Trên Cây",
      author: "Nguyễn Nhật Ánh",
      price: "110,000 VND",
    },
    {
      image: quangodilen,
      title: "Quán Gò Đi Lên",
      author: "Nguyễn Nhật Ánh",
      price: "130,000 VND",
    },
  ];

  const flickityOptions = {
    initialIndex: 0,
    wrapAround: true, // Loop through the items
    autoPlay: true, // Enable autopla
    pauseAutoPlayOnHover: true,
    prevNextButtons: true, // Show previous/next buttons
    pageDots: false, // Hide dots indicator
    draggable: true, // Allow dragging of slides
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}>
      <Flickity options={flickityOptions} style={{}}>
        {books.map((book, index) => (
          <Box
            key={index}
            sx={{
              width: "100%",
              height: "50vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 3,
            }}>
            {/* Book Image */}
            {/* <Box
              sx={{
                justifyContent: "center",
                height: "90%",
              }}> */}
            <img
              src={book.image}
              alt={book.title}
              style={{
                height: "80%",
                width: "auto",
                objectFit: "cover",
                boxShadow: "5px 5px 10px rgba(0,0,0,0.5)",
                borderRadius: 8,
              }}
            />
            {/* </Box> */}

            {/* Book Details */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}>
              <Typography
                fontWeight="bold"
                fontSize="1.8rem"
                color="primary.dark">
                {book.title}
              </Typography>
              <Typography color="text.secondary" fontSize="1rem" mt={1}>
                Tác giả: {book.author}
              </Typography>
              <Typography
                color="primary"
                fontSize="1.2rem"
                fontWeight="bold"
                mt={1}>
                Giá: {book.price}
              </Typography>
            </Box>
          </Box>
        ))}
      </Flickity>
    </Box>
  );
};
