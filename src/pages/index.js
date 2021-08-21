import React from "react";
import Trip from "../components/Trip";
import Post from "../components/Post";
import Header from "../components/Header";
import Benefit from "../components/Benefit";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Benefit />
      <Trip />
      <Post />
      <Footer />
    </>
  );
}
