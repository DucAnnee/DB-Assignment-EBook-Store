import { useParams } from "react-router";
import book_cover from "../assets/hp-baoboituthan.jpg";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();

  // Fetch product information from the server
  const fetchProduct = async () => {
    const response = await fetch(`/api/products/${id}`);
    const data = await response.json();
    return data;
  };

  // productInfo = fetchProduct();
  const productInfo = {
    img: book_cover,
    name: "Harry Potter và bảo bối tử thần",
    price: 150,
    description:
      "Sau cái chết của Albus Dumbledore, Harry Potter, Ron Weasley và Hermione Granger tiếp tục sứ mệnh tìm kiếm và phá hủy những Trường Sinh Linh Giá còn lại của Voldemort trong Harry Potter và Bảo bối Tử thần. Chúa tể Voldemort và các Tử thần Thực tử nắm quyền kiểm soát Bộ Pháp thuật, áp đặt chế độ kỳ thị đối với những người không có dòng máu phép thuật. Harry trở thành 'Kẻ Phá Rối số 1 bị truy nã. Thay vì quay lại Hogwarts, Harry, Ron và Hermione quyết định dấn thân vào hành trình nguy hiểm săn lùng và phá hủy Trường Sinh Linh Giá. Họ phải đối mặt với nhiều thử thách, hiểm nguy và bí mật đen tối",
    stock: 99,
    type: "book",
    isbn: "123-456-789",
    genre: ["Fantasy", "Adventure", "Magic"],
    publicationDate: "10/10/2020",
    author: "J.K. Rowling",
    publisher: "NXB Trẻ",
  };

  const baseInfo = {
    img: productInfo.img,
    name: productInfo.name,
    price: productInfo.price,
    description: productInfo.description,
    stock: productInfo.stock,
  };

  let detailInfo;
  if (productInfo.type === "toy") {
    detailInfo = {
      ...baseInfo,
      age: productInfo.age,
      productionDate: productInfo.productionDate,
      manufacturer: productInfo.manufacturer,
    };
  } else if (productInfo.type === "book") {
    detailInfo = {
      ...baseInfo,
      isbn: productInfo.isbn,
      genre: productInfo.genre,
      publicationDate: productInfo.publicationDate,
      author: productInfo.author,
      publisher: productInfo.publisher,
    };
  }
  console.log(detailInfo);

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
        flexDirection: "row",
        gap: 2,
        py: 3,
      }}>
      <Paper
        elevation={8}
        sx={{
          position: "sticky",
          top: "80px",
          width: "40%",
          height: "100%",
          flex: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "20px",
          p: 3,
        }}>
        <ProductImagePanel {...detailInfo} />
      </Paper>
      <Box
        sx={{
          width: "60%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "20px",
          gap: 2,
        }}>
        <Paper
          elevation={8}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "20px",
            gap: 2,
            p: 3,
          }}>
          <ProductGeneralInfoPanel {...detailInfo} />
        </Paper>
        <Paper
          elevation={8}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "20px",
            gap: 2,
            p: 3,
          }}>
          <ProductDetailInfoPanel {...detailInfo} />
        </Paper>
      </Box>
    </Box>
  );
}

const ProductImagePanel = (productInfo) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        width: "100%",
      }}>
      {/* Product Image */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          overflow: "hidden",
          borderRadius: "10px",
          boxShadow: "5px 5px 10px rgba(0,0,0,0.5)",
        }}>
        <img
          src={productInfo.img}
          alt={productInfo.name}
          style={{
            height: "100%",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </Box>

      {/* Add to Cart / Buy Now Buttons */}
      <Box
        sx={{
          width: "100%",
          height: "8vh",
          display: "flex",
          flexDirection: "row",
          gap: 3,
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            textTransform: "none",
            fontSize: "1.0rem",
            height: "100%",
            fontWeight: "bold",
            borderRadius: "12px",
            "&:hover": {
              backgroundColor: "primary.dark",
            },
          }}>
          Thêm vào giỏ hàng
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "primary.dark",
            borderColor: "primary.dark",
            textTransform: "none",
            fontSize: "1.0rem",
            height: "100%",
            fontWeight: "bold",
            borderRadius: "12px",
            flex: 1,
            // transition: "color 0.2s",
            "&:hover": {
              backgroundColor: "primary.dark",
              color: "white",
              border: "none",
            },
          }}>
          Mua ngay
        </Button>
      </Box>

      {/* Delivery and Policy Information */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "left",
          textAlign: "left",
          gap: 1,
        }}>
        <Typography fontSize="0.9rem" color="primary.dark" fontWeight="bold">
          Chính sách ưu đãi của KAN Bookstore:
        </Typography>
        <Typography fontSize="0.8rem" color="text.secondary">
          Thời gian giao hàng: Giao nhanh và uy tín
        </Typography>
        <Typography fontSize="0.8rem" color="text.secondary">
          Chính sách đổi trả: Đổi trả miễn phí toàn quốc
        </Typography>
      </Box>
    </Box>
  );
};
const ProductGeneralInfoPanel = (productInfo) => {
  const field1 = productInfo.type === "toy" ? "Tuổi thích hợp" : "Tác giả";
  const value1 =
    productInfo.type === "toy" ? productInfo.age : productInfo.author;
  const field2 = productInfo.type === "toy" ? "Ngày sản xuất" : "Nhà xuất bản";
  const value2 =
    productInfo.type === "toy"
      ? productInfo.productionDate
      : productInfo.publisher;
  const field3 = productInfo.type === "toy" ? "Nhà sản xuất" : "Ngày xuất bản";
  const value3 =
    productInfo.type === "toy"
      ? productInfo.manufacturer
      : productInfo.publicationDate;
  const field4 = productInfo.type === "toy" ? "Giá" : "ISBN";
  const value4 =
    productInfo.type === "toy" ? productInfo.price : productInfo.isbn;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
        justifyContent: "center",
        alignItems: "left",
      }}>
      <Typography fontSize="2rem" fontWeight="bold" color="primary.dark">
        {productInfo.name}
      </Typography>
      <Divider sx={{ width: "100%" }} />

      <Typography variant="h5" fontWeight="bold" color="alert.main">
        Giá: {productInfo.price}.000 VNĐ
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Số lượng trong kho: {productInfo.stock}
      </Typography>

      <Divider sx={{ width: "100%" }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          mr: 8,
        }}>
        <Typography variant="body2" color="text.secondary">
          {field1}: {value1}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {field3}: {value3}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          mr: 8,
        }}>
        <Typography variant="body2" color="text.secondary">
          {field2}: {value2}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {field4}: {value4}
        </Typography>
      </Box>

      <Divider sx={{ width: "100%" }} />

      <Typography variant="body1" fontWeight="bold" color="text.secondary">
        Mô tả sản phẩm:
      </Typography>
      <Typography variant="body2" color="text.secondary" textAlign="justify">
        {productInfo.description}
      </Typography>
    </Box>
  );
};

const ProductDetailInfoPanel = (productInfo) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
        justifyContent: "center",
        alignItems: "flex-start",
      }}>
      <Typography fontSize="1.5rem" fontWeight="bold" color="primary.dark">
        Thông tin chi tiết
      </Typography>
      <Divider sx={{ width: "100%" }} />

      {/* Dynamically display product details */}
      {Object.keys(productInfo)
        .filter(
          (key) =>
            key !== "key" &&
            key !== "title" &&
            key !== "description" &&
            key !== "img" &&
            key !== "name"
        ) // Exclude 'key' and 'title'
        .map((key) => (
          <Box
            key={key}
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 1,
              alignItems: "flex-start",
            }}>
            <Typography
              fontWeight="bold"
              color="body1"
              fontSize="0.8rem"
              sx={{ textTransform: "capitalize" }}>
              {key.replace(/([A-Z])/g, " $1")}: {/* Format camelCase keys */}
            </Typography>
            <Typography color="text.secondary" fontSize="0.8rem">
              {productInfo[key]}
            </Typography>
          </Box>
        ))}
    </Box>
  );
};
