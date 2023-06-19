import React from "react";
import Header from "../components/Header";
import Carousel, { CarouselItem } from "../components/Home/Carousel";
import Footer from "../components/Footer";
import SearchBar from "../components/Home/SearchBar";
import InfoSection from "../components/Home/WrapperInfo";

export default function Home() {
  return (
    <>
      <Header />
      <Carousel>
        <CarouselItem img="banner1"></CarouselItem>
        <CarouselItem img="banner2"></CarouselItem>
        <CarouselItem img="banner3"></CarouselItem>
        <CarouselItem img="banner3"></CarouselItem>
        <CarouselItem img="banner3"></CarouselItem>
        <CarouselItem img="banner3"></CarouselItem>
      </Carousel>

      <SearchBar />
      <InfoSection href="" />
      <Footer />
    </>
  );
}
