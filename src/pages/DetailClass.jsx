import { Box } from "@mui/material";
import React, { useEffect } from 'react';

import Navbar from "../components/Navbar";
import Description from "../components/Description";
import Footer from "../components/Footer";
import Product from "../components/Product";

import sushi from "../assets/sushi.png";
import ramen from "../assets/ramen.png";
import rendang from "../assets/rendang.png";
import pempek from "../assets/pempek.png";
import bubur from "../assets/bubur.png";
import soto from "../assets/soto.png";
import takoyaki from "../assets/takoyaki.png";
import mie from "../assets/mie.png";
import sate from "../assets/sate.png";

class ProductDataList {
  constructor(id, image, name, description, price) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.description = description;
    this.price = price;
  }
}

const products = [
  new ProductDataList(
    1,
    sushi,
    "Asian",
    "Sushi Salmon with Mentai",
    "IDR 200.000"
  ),
  new ProductDataList(2, ramen, "Asian", "Ichiraku Ramen", "IDR 300.000"),
  new ProductDataList(3, rendang, "Asian", "Rendang Sapi", "IDR 200.000"),
  new ProductDataList(
    4,
    pempek,
    "Asian",
    "[Complit Package] Pempek Palembang",
    "IDR 600.000"
  ),
  new ProductDataList(
    5,
    bubur,
    "Asian",
    "Soto Banjar Limau Kuit",
    "IDR 150.000"
  ),
  //   new ProductDataList(
  //     6,
  //     soto,
  //     "Asian",
  //     "Soto Banjar Limau Kuit",
  //     "IDR 450.000"
  //   ),
  new ProductDataList(7, takoyaki, "Asian", "Takoyaki Octopus", "IDR 150.000"),
  new ProductDataList(8, mie, "Asian", "Jajangmeyon", "IDR 250.000"),
  new ProductDataList(9, sate, "Asian", "Sate Padang", "IDR 300.000"),
];

const DetailClass = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box sx={{ marginTop: "75px" }}>
      <Navbar />
      <Description />
      <Product title="Another menu in this class" data={products} />
      <Footer />
    </Box>
  );
};

export default DetailClass;
