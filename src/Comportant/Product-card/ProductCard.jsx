import React from "react";
import "./product-card.css";

const ProductCard = (props) => {
  const { title, imgUrl, price } = props.item;
  return (
    <div className="single_product mb-3">
      <div className="product_img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>
      <div className="product_contennt">
        <div className="rating text-center">
          <span>
            <i className="ri-star-s-fill"></i>
          </span>
          <span>
            <i className="ri-star-s-fill"></i>
          </span>
          <span>
            <i className="ri-star-s-fill"></i>
          </span>
          <span>
            <i className="ri-star-s-fill"></i>
          </span>
          <span>
            <i className="ri-star-s-fill"></i>
          </span>
          <span>
            <i className="ri-star-s-fill"></i>
          </span>
        </div>
        <h6>{title}</h6>
        <div className="d-flex align-items-center justify-content-between">
          <span className="price">
            Price: $<span>{price}</span>
          </span>
          <span className="shoping_icon">
            <i className="ri-shopping-cart-line"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
