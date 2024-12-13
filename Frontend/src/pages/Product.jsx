import React, { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Grid,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Divider,
  Slider,
} from "@mui/material";
import sampleImage from "../assets/hp-hoangtulai.jpg";
import { useNavigate } from "react-router";
import api from "../api/axios";

export default function Product() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 500]); // Min and Max Price
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;

  const [products, setProducts] = useState([
    // { id: 1, name: "Product 1", category: "Book", price: 150 },
    // { id: 2, name: "Product 2", category: "Toy", price: 200 },
    // { id: 3, name: "Product 3", category: "Book", price: 150 },
    // { id: 4, name: "Product 4", category: "Toy", price: 200 },
    // { id: 5, name: "Product 5", category: "Book", price: 150 },
    // { id: 6, name: "Product 6", category: "Toy", price: 200 },
    // { id: 7, name: "Product 7", category: "Book", price: 150 },
    // { id: 8, name: "Product 8", category: "Toy", price: 200 },
    // { id: 9, name: "Product 9", category: "Book", price: 150 },
    // { id: 10, name: "Product 10", category: "Toy", price: 200 },
    // { id: 11, name: "Product 11", category: "Book", price: 150 },
    // { id: 12, name: "Product 12", category: "Toy", price: 200 },
    // { id: 13, name: "Product 13", category: "Book", price: 150 },
    // { id: 14, name: "Product 14", category: "Toy", price: 200 },
    // { id: 15, name: "Product 15", category: "Book", price: 150 },
    // { id: 16, name: "Product 16", category: "Toy", price: 200 },
    // { id: 17, name: "Product 17", category: "Book", price: 150 },
    // { id: 18, name: "Product 18", category: "Toy", price: 200 },
    // { id: 19, name: "Product 19", category: "Book", price: 150 },
    // { id: 20, name: "Product 20", category: "Toy", price: 200 },
    // { id: 21, name: "Product 21", category: "Book", price: 150 },
    // { id: 22, name: "Product 22", category: "Toy", price: 200 },
    // { id: 23, name: "Product 23", category: "Book", price: 150 },
    // { id: 24, name: "Product 24", category: "Toy", price: 200 },
    // { id: 25, name: "Product 25", category: "Book", price: 150 },
    // { id: 26, name: "Product 26", category: "Toy", price: 200 },
    // { id: 27, name: "Product 27", category: "Book", price: 150 },
    // { id: 28, name: "Product 28", category: "Toy", price: 200 },
    // { id: 29, name: "Product 29", category: "Book", price: 150 },
    // { id: 30, name: "Product 30", category: "Toy", price: 200 },
  ]);

  // useEffect
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const params = {
          quantity: 48,
        };

        const response = await api.get("/api/v1/product", {
          params,
        });

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory.length === 0 ||
        selectedCategory.includes(product.category)) &&
      product.price >= selectedPriceRange[0] &&
      product.price <= selectedPriceRange[1]
    );
  });

  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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
      {/* Left: Filter Panel */}
      <Paper
        elevation={8}
        sx={{
          position: "sticky",
          top: "80px",
          width: "30%",
          height: "100%",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "20px",
          py: 3,
          px: 1,
        }}>
        <ItemFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedPriceRange={selectedPriceRange}
          setSelectedPriceRange={setSelectedPriceRange}
        />
      </Paper>

      {/* Right: Product Grid */}
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
        <Grid container spacing={2}>
          {currentProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <ItemWidget product={product} />
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Pagination Controls */}
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
          <Button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            sx={{ marginRight: 2 }}>
            Trang trước
          </Button>
          <Button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}>
            Trang sau
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

const ItemWidget = ({ product }) => {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => {
        navigate("/products/${product.id}");
      }}
      sx={{
        width: "100%",
        padding: 2,
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.01)",
          boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.35)",
          transform: "translateY(-5px)",
          transition: "all 0.3s ease",
        },
      }}>
      {" "}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
        }}>
        {" "}
        <img
          src={sampleImage}
          alt={product.name}
          style={{
            height: "20vh",
            width: "auto",
            borderRadius: "8px",
            objectFit: "cover",
          }}
        />{" "}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            width: "85%",
            gap: 1,
          }}>
          {" "}
          <Typography fontSize="1rem" color="primary.dark" fontWeight="bold">
            {" "}
            {product.name}{" "}
          </Typography>{" "}
          <Typography fontSize="0.8rem" color="alert.main">
            {" "}
            {product.price ? product.price + ".000 VNĐ" : "Liên hệ"}{" "}
          </Typography>{" "}
        </Box>{" "}
      </Box>{" "}
    </Button>
  );
};

const ItemFilter = ({
  selectedCategory,
  setSelectedCategory,
  selectedPriceRange,
  setSelectedPriceRange,
}) => {
  const [selectedManufacturers, setSelectedManufacturers] = useState([]);
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [selectedPublishers, setSelectedPublishers] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
    // Reset additional filters when switching categories
    setSelectedManufacturers([]);
    setSelectedAuthors([]);
    setSelectedPublishers([]);
    setSelectedGenres([]);
  };

  return (
    <Box
      sx={{
        justifySelf: "center",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        px: 1,
      }}>
      <Box sx={{ alignSelf: "center" }}>
        <Typography fontWeight="bold" fontSize="1.5rem" color="primary.dark">
          Lọc sản phẩm
        </Typography>
      </Box>
      <Divider sx={{ width: "100%" }} />
      <Box
        sx={{
          width: "100%",
          alignSelf: "center",
          marginTop: 2,
        }}>
        <h4>Loại sản phẩm</h4>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}>
          <FormControlLabel
            control={<Checkbox value="Toy" onChange={handleCategoryChange} />}
            label="Đồ chơi"
          />
          <FormControlLabel
            control={<Checkbox value="Book" onChange={handleCategoryChange} />}
            label="Sách"
          />
        </Box>
      </Box>

      {/* Dynamic Filters */}
      {selectedCategory.includes("Toy") && (
        <ManufacturerFilter
          selectedManufacturers={selectedManufacturers}
          setSelectedManufacturers={setSelectedManufacturers}
        />
      )}
      {selectedCategory.includes("Book") && (
        <>
          <AuthorFilter
            selectedAuthors={selectedAuthors}
            setSelectedAuthors={setSelectedAuthors}
          />
          <PublisherFilter
            selectedPublishers={selectedPublishers}
            setSelectedPublishers={setSelectedPublishers}
          />
          <GenreFilter
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
          />
        </>
      )}
    </Box>
  );
};

const ManufacturerFilter = ({
  selectedManufacturers,
  setSelectedManufacturers,
}) => {
  const manufacturers = ["Thiên Long", "Artline", "Pentel"]; // Hardcoded examples

  const handleManufacturerChange = (event) => {
    const manufacturer = event.target.value;
    setSelectedManufacturers((prev) =>
      prev.includes(manufacturer)
        ? prev.filter((item) => item !== manufacturer)
        : [...prev, manufacturer]
    );
  };

  return (
    <Box
      sx={{
        marginTop: 2,
        display: "flex",
        flexFlow: "column wrap",
      }}>
      <h4>Nhà sản xuất</h4>
      {manufacturers.map((manufacturer) => (
        <FormControlLabel
          key={manufacturer}
          control={
            <Checkbox
              value={manufacturer}
              onChange={handleManufacturerChange}
              checked={selectedManufacturers.includes(manufacturer)}
            />
          }
          label={manufacturer}
        />
      ))}
    </Box>
  );
};

const AuthorFilter = ({ selectedAuthors, setSelectedAuthors }) => {
  const authors = ["Nguyễn Nhật Ánh", "J.K. Rowling", "George R.R. Martin"]; // Hardcoded examples

  const handleAuthorChange = (event) => {
    const author = event.target.value;
    setSelectedAuthors((prev) =>
      prev.includes(author)
        ? prev.filter((item) => item !== author)
        : [...prev, author]
    );
  };

  return (
    <Box
      sx={{
        marginTop: 2,
        display: "flex",
        flexFlow: "column wrap",
        alignItems: "flex-start",
      }}>
      <h4>Tác giả</h4>
      {authors.map((author) => (
        <FormControlLabel
          key={author}
          control={
            <Checkbox
              value={author}
              onChange={handleAuthorChange}
              checked={selectedAuthors.includes(author)}
            />
          }
          label={author}
        />
      ))}
    </Box>
  );
};

const PublisherFilter = ({ selectedPublishers, setSelectedPublishers }) => {
  const publishers = ["Nhà xuất bản Kim Đồng", "NXB Trẻ", "NXB Tổng hợp"]; // Hardcoded examples

  const handlePublisherChange = (event) => {
    const publisher = event.target.value;
    setSelectedPublishers((prev) =>
      prev.includes(publisher)
        ? prev.filter((item) => item !== publisher)
        : [...prev, publisher]
    );
  };

  return (
    <Box
      sx={{
        marginTop: 2,
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "flex-start",
      }}>
      <h4>Nhà xuất bản</h4>
      {publishers.map((publisher) => (
        <FormControlLabel
          key={publisher}
          control={
            <Checkbox
              value={publisher}
              onChange={handlePublisherChange}
              checked={selectedPublishers.includes(publisher)}
            />
          }
          label={publisher}
        />
      ))}
    </Box>
  );
};

const GenreFilter = ({ selectedGenres, setSelectedGenres }) => {
  const genres = ["Fantasy", "Sci-Fi", "Romance"]; // Hardcoded examples

  const handleGenreChange = (event) => {
    const genre = event.target.value;
    setSelectedGenres((prev) =>
      prev.includes(genre)
        ? prev.filter((item) => item !== genre)
        : [...prev, genre]
    );
  };

  return (
    <Box
      sx={{
        marginTop: 2,
        display: "flex",
        flexFlow: "column wrap",
      }}>
      <h4>Thể loại</h4>
      {genres.map((genre) => (
        <FormControlLabel
          key={genre}
          control={
            <Checkbox
              value={genre}
              onChange={handleGenreChange}
              checked={selectedGenres.includes(genre)}
            />
          }
          label={genre}
        />
      ))}
    </Box>
  );
};
