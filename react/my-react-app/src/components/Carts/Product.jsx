import React from "react";
import Cart from "./Carts";

export default function Product({ productE }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2>상품명:{productE.title}</h2>
      <p>가격(price){productE.price}</p>
      <p>재고(quantity){productE.quantity}</p>
      <p>총 가격(total){productE.total}</p>
      <img src={productE.thumbnail} alt="상품 이미지(thumbnail)" />
    </div>
  );
}
