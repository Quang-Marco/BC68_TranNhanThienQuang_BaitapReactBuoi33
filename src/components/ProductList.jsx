import React from "react";
import ProductItem from "./ProductItem";
("use client");

const ProductList = ({ products }) => {
  return (
    <div className="container mx-auto py-16">
      <div className="grid grid-cols-4 gap-10">
        {products.map((item, index) => {
          return <ProductItem item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
