import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Cards.css";

const Cards = ({ details, title }) => {
  const [cardsdata, setCardsData] = useState([]);

  useEffect(() => {
    let arr = [];
    if (title === "All") {
      Object.values(details.data).forEach((array) =>
        array.forEach((data) => arr.push(data))
      );
      setCardsData(arr);
    } else {
      console.log(details.data[title]);
      arr = details.data[title];
      setCardsData(arr);
    }
  }, [title]);

  return (
    <div className="container">
      {cardsdata.map((cardData) => {
        return <Card key={cardData.id} data={cardData} />;
      })}
    </div>
  );
};

export default Cards;
