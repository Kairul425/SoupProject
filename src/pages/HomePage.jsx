import { Box } from "@mui/material";
import React, { useEffect } from 'react';

import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import Benefit from "../components/Benefit";
import Food from "../components/Food";
import Footer from "../components/Footer";

import ice from "../assets/ice.png";
import biskuit from "../assets/biskuit.png";
import soto from "../assets/soto.png";
import bolu from "../assets/bolu.png";
import bubur from "../assets/bubur.png";
import spageti from "../assets/spageti.png";

class ProductData {
  constructor(id, image, name, description, price) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.description = description;
    this.price = price;
  }
}

const products = [
  new ProductData(1, ice, "Cold Drink", "Strawberry Float", "IDR 150.000"),
  new ProductData(2, biskuit, "Cookies", "Chocholate Cookies", "IDR 200.000"),
  new ProductData(3, soto, "Asian", "Tom Yum Thailand", "IDR 450.000"),
  new ProductData(4, bolu, "Dessert", "Green Tea Cheesecake", "IDR 400.000"),
  new ProductData(5, bubur, "Asian", "Soto Banjar Limau Kuit", "IDR 150.000"),
  new ProductData(
    6,
    spageti,
    "Western",
    "Italian Spaghetti Bolognese",
    "IDR 450.000"
  ),
];

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box sx={{ marginTop: "75px" }}>
      <Navbar />
      <Banner />
      <Product title="More professional class" data={products} />
      <Benefit />
      <Food />
      <Footer />
    </Box>
  );
};

export default HomePage;
