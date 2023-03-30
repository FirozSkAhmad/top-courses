import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import "./Card.css";
import { toast } from 'react-toastify'

const Card = ({ data }) => {
  const [toggle, setToggle] = useState(false);
  function handelIcon() {
    setToggle(!toggle);
    if(!toggle){
        toast.success("Liked")

    }
    else{
        toast.error("Dis Liked")
    }
  }
  return (
    <div className="card">
      <div id="image">
        <img src={data.image.url} alt={data.image.alt} />
      </div>
      {toggle ? (
        <FcLike id="icon" onClick={handelIcon} />
      ) : (
        <FcLikePlaceholder id="icon" onClick={handelIcon} />
      )}
      <p id="title">{data.title}</p>
      <p id="desc">{data.description}</p>
    </div>
  );
};

export default Card;
