import React from "react";
import Container from "../Container/Container";
import "./Gallery.css";
import { Card } from "antd";
import card1 from "../../assets/card1.jpg"; 
import card2 from "../../assets/card2.jpg";
import card3 from "../../assets/card3.jpg"; 
import card4 from "../../assets/card4.jpg";
import card5 from "../../assets/card5.jpg"; 
import card6 from "../../assets/card6.jpg"; 
import card7 from "../../assets/card7.jpg"; 
import card8 from "../../assets/card8.jpg"; 
import card9 from "../../assets/card9.jpg"; 

const { Meta } = Card;

// Данные для карточек
const cardData = [
  {
    title: "GIR: One Year In",
    description: "Case Study",
    image: card1, // Используем импортированное изображение
  },
  {
    title: "Introducing Onsen",
    description: "New Additions",
    image:card2, // Пример другого изображения
  },
  {
    title: "Selling Your Shopify Brand: An Introduction",
    description: "Mergers & Acquisitions 101",
    image:card3, // Пример другого изображения
  },
  {
    title: "5 Reasons We Are Optimistic for 2023",
    description: "MERGERS & ACQUISITIONS 101",
    image:card4, // Пример другого изображения
  },
  {
    title: "Why Right Now is a Great Time to Sell Your Brand",
    description: "MERGERS & ACQUISITIONS 101",
    image:card5, // Пример другого изображения
  },
  {
    title: "Selling Your Shopify Brand: Week 1",
    description: "MERGERS & ACQUISITIONS 101",
    image:card6, // Пример другого изображения
  },
  {
    title: "Pattern's 2022 Update",
    description: "THOUGHT LEADERSHIP",
    image:card7, // Пример другого изображения
  },
  {
    title: "Introducing Yield",
    description: "New Additions",
    image:card8, // Пример другого изображения
  },
  {
    title: "Introducing Poketo",
    description: "New Additions",
    image: card9, // Пример другого изображения
  },
];

const Gallery: React.FC = () => {
  return (
    <section className="gallery">
      <Container>
        <div className="heading-gallery">
          <h2 className="promo-h2">
            Explore the brands joining Pattern Brands, the sales process & the founders behind them.👇🏽
          </h2>
        </div>
        <section className="gallery-content">
          {cardData.map((card, index) => (
            <Card
              key={index}
              hoverable
              className="gallery-card"
              cover={<img alt={card.title} src={card.image} />} // Используем image из card
            >
              <Meta className="card-text" title={card.title} description={card.description} />
            </Card>
          ))}
        </section>
      </Container>
    </section>
  );
};

export default Gallery;
