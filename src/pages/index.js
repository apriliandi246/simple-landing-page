import React from "react";
import Trips from "../components/Trips";
import Posts from "../components/Posts";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Benefit from "../components/Benefit";

export default function Home() {
  return (
    <>
      <Header />
      <Benefit />
      <Trips />
      <Posts />
      <Footer />
    </>
  );
}
