import { Box, Paper, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import lambanvoibautroi from "../assets/nna-lambanvoibautroi.jpg";
import ngoikhoctrencay from "../assets/nna-ngoikhoctrencay.jpg";
import quangodilen from "../assets/nna-quangodilen.jpg";

export default function Home() {
  return (
    <Box
      sx={{
        alignSelf: "center",
        width: "90vw",
        height: "100vh",
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
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "20px",
          width: "100%",
        }}>
        {/* Trending text */}
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Typography fontWeight="bold" fontSize="2rem" color="primary.main">
            New release and Trending
          </Typography>
        </Box>

        {/* Book Carousel */}
        <Box
          sx={{
            width: "50%",
            height: "80%",
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
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "20px",
          width: "100%",
        }}>
        EHEHEEEHEHE
      </Paper>
    </Box>
  );
}

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

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}>
      <Carousel
        infiniteLoop
        interval={5000}
        showStatus={false}
        showThumbs={false}
        showArrows={true}
        stopOnHover
        swipeable
        dynamicHeight={false}
        emulateTouch
        style={{
          width: "100%",
        }}>
        {books.map((book, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              flexDirection: "row",
              height: "100%",
            }}>
            {/* Book Image */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                marginRight: "2vw",
                height: "80%",
              }}>
              <img
                src={book.image}
                alt={book.title}
                style={{
                  height: "100%",
                  objectFit: "contain",
                  boxShadow: "5px 5px 10px 0px rgba(0,0,0,0.5)",
                  borderRadius: 8,
                }}
              />
            </Box>

            {/* Book Details */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start", // Keep details left-aligned
              }}>
              <Typography
                fontWeight="bold"
                fontSize="1rem"
                color="primary.dark">
                {book.title}
              </Typography>
              <Typography color="text.secondary" fontSize="1rem" mt={1}>
                Author: {book.author}
              </Typography>
              <Typography
                color="primary"
                fontSize="1rem"
                fontWeight="bold"
                mt={1}>
                Price: {book.price}
              </Typography>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};
