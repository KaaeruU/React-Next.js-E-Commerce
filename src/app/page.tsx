"use client";

import Card from "../components/molecules/card/Card";

export default function Home() {
  const cards = [
    {
      title: "Introduzione alla biomeccanica del ciclismo",
      price: "$ 327,00",
      score: 9.6,
      mountOfReview: 87,
      img: "/pexels.jpg",
    },
  ];
  return (
    <>
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="default-grid grid-container">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              price={card.price}
              score={card.score}
              mountOfReview={card.mountOfReview}
              img={card.img}
              count={0}
            />
          ))}
        </div>
      </div>
    </>
  );
}
