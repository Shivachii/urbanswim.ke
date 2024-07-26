'use client'
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

// Define the Product interface
interface Product {
  id: number;
  name: string;
  category: string;
  brand: string;
  description: string;
  price: number;
  productAvailable: boolean;
  stockQuantity: number;
  releaseDate: string;
}

const ProductID: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/products/${id}`);
        setProduct(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <h2 className="text-center" style={{ padding: "10rem" }}>
        Loading...
      </h2>
    );
  }

  return (
    <div className="containers">
      <div className="right-column">
        <div className="product-description">
          <span>{product.stockQuantity}</span>
          <h1>{product.name}</h1>
          <h5>{product.brand}</h5>
          <p>{product.description}</p>
        </div>
        <div className="product-price">
          <span>{"$" + product.price}</span>
          <button
            className={`cart-btn ${!product.productAvailable ? "disabled-btn" : ""}`}
            disabled={!product.productAvailable}
          >
            {product.productAvailable ? "Add to cart" : "Out of Stock"}
          </button>
          <h6>
            Stock Available:{" "}
            <i style={{ color: "green", fontWeight: "bold" }}>
              {product.stockQuantity}
            </i>
          </h6>
          <div className="release-date">
            <h6>Product listed on:</h6>
            <p>{product.releaseDate}</p>
          </div>
        </div>
        <div className="update-button">
          <button className="btn btn-primary" type="button">
            Update
          </button>
          <button className="btn btn-primary" type="button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductID;
