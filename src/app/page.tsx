"use client";

import Card from "../components/molecules/card/Card";

export default function Home() {
  return (
    <>
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="default-grid">
          <Card
            title={"Introduzione alla biomeccanica del ciclismo"}
            price={"327$"}
            score={9.6}
            mountOfReview={87}
            img="/pexels.jpg"
          />
        </div>
      </div>
    </>
  );
}
