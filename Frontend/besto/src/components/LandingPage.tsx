import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Collapse,
  Button,
} from "@mui/material";

// Importing images
import specialBg from "../assets/background/special.jpg";
import burgerBg from "../assets/background/burger.jpg";
import drinksBg from "../assets/background/drink.jpg";
import sandwishBg from "../assets/background/sandwish.jpg";
import restaurantIcon from "../assets/logo.png";
import hotdog from "../assets/MainPic/sandwishes/hotdog.jpg";

interface MenuItem {
  title: string;
  image: string;
}

interface Category {
  title: string;
  items: MenuItem[];
  backgroundImage: string;
}

const categories: Category[] = [
  {
    title: "Besto’s specials",
    items: [
      { title: "Mushroom pool burger", image: hotdog },
      { title: "Mushroom pool chicken", image: hotdog },
      { title: "Mushroom pool steak", image: hotdog },
    ],
    backgroundImage: specialBg,
  },
  {
    title: "Burgers",
    items: [
      { title: "Classic burger", image: hotdog },
      { title: "Cheese burger", image: hotdog },
      { title: "Mushroom burger", image: hotdog },
      { title: "Mushroom pool Burger", image: hotdog },
      { title: "Lokum burger", image: hotdog },
    ],
    backgroundImage: burgerBg,
  },
  {
    title: "Sandwiches",
    items: [
      { title: "Shnitzel Sandwich", image: hotdog },
      { title: "Chick Fillet Sandwich", image: hotdog },
      { title: "Tost", image: hotdog },
      { title: "Omlet", image: hotdog },
      { title: "Cheese Sandwich", image: hotdog },
      { title: "Hot Dog", image: hotdog },
    ],
    backgroundImage: sandwishBg,
  },
  {
    title: "Drinks",
    items: [
      { title: "Cheesecake", image: hotdog },
      { title: "Chocolate Lava Cake", image: hotdog },
    ],
    backgroundImage: drinksBg,
  },
];

const LandingPage: React.FC = () => {
  const [openCategory, setOpenCategory] = useState<number | null>(null);

  const handleCategoryClick = (index: number) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <Container
      sx={{ backgroundColor: "#fcba03", padding: "0", margin: "0" }}
      maxWidth={false}
    >
      {/* Icon at the top */}
      <div style={{ textAlign: "center", marginBottom: "0.1rem" }}>
        <img
          src={restaurantIcon}
          alt="Restaurant Icon"
          style={{ width: "160px" }}
        />
      </div>

      {categories.map((category, index) => (
        <div
          key={index}
          style={{ marginBottom: "0", padding: "0", position: "relative" }}
        >
          <div
            style={{
              backgroundImage: `url(${category.backgroundImage})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "250px",
              borderRadius: "20px",
              marginBottom: "0", // Removed margin
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <Button
              onClick={() => handleCategoryClick(index)}
              variant="contained"
              sx={{
                zIndex: 1,
                marginBottom: "1.3rem",
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: { xs: "6px 12px", sm: "8px 16px" },
                fontSize: { xs: "14px", sm: "16px" },
                fontWeight: "bold",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                fontFamily: "Times New Roman, serif",
              }}
            >
              <Typography variant="h6">{category.title}</Typography>
            </Button>
          </div>
          <Collapse in={openCategory === index}>
            <Grid container spacing={0}>
              {" "}
              {/* Set spacing to 0 */}
              {category.items.map((item, idx) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={idx}
                  sx={{ padding: "8px" }}
                >
                  <Card sx={{ marginBottom: "0", padding: "0" }}>
                    {" "}
                    {/* Removed margins/padding */}
                    <CardMedia
                      component="img"
                      height="200"
                      image={item.image}
                      alt={item.title}
                      sx={{
                        width: "100%",
                        objectFit: "fill",
                      }}
                    />
                    <CardContent>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                          fontFamily: "Times New Roman, serif",
                        }}
                        variant="h6"
                        align="center"
                      >
                        {item.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Collapse>
        </div>
      ))}
      <Typography
        variant="body2"
        align="center"
        sx={{
          marginTop: "1.5rem",
          paddingBottom: "1rem",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          fontFamily: "Times New Roman, serif",
        }}
      >
        This website
        <br />
        has been made
        <br /> by <a href="https://www.instagram.com/mofedmk" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "Blue" }}>Mofed Makalda</a>
      </Typography>
    </Container>
  );
};

export default LandingPage;
