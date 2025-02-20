import "./Gallery.css";
import { cardData } from "../../data.ts";

export default function Gallery() {
  return (
    <section className="gallery">
      <div className="container">
        <div className="heading-gallery">
          <h2 className="promo-h2">
            Explore the brands joining Pattern Brands, the sales process & the founders behind them.👇🏽
          </h2>
        </div>
        <section className="gallery-content">
          {cardData.map((card, index) => (
            <div key={index} className="gallery-card">
              <img src={card.image} alt={card.title} className="card-image" />
              <div className="card-text">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
}
