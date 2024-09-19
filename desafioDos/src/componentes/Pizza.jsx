// Pizza.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Pizza = () => {
  const { id } = useParams(); // obtener el ID de la pizza
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`https://api.example.com/pizzas/${id}`);
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error("Error fetching pizza:", error);
      }
    };
    fetchPizza();
  }, [id]);

  if (!pizza) return <div>Loading...</div>;

  return (
    <div>
      <h1>{pizza.name}</h1>
      <p>{pizza.description}</p>
      <p>Price: ${pizza.price}</p>
    </div>
  );
};

export default Pizza;
