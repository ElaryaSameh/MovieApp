import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import instance from "../../axiosInstance/instance";

function ProductDetails() {
  const { movieID } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (!movieID) {
      console.error("ID is undefined, API call aborted!");
      return;
    }

    async function fetchData() {
      try {
        const res = await instance.get(
          `https://api.themoviedb.org/3/movie/${movieID}?api_key=c94b800b13b9b455a5d91c9b54e821a3`
        );
        setProduct(res.data);
      } catch (err) {
        console.error("Error fetching product:", err.response ? err.response.data : err.message);
      }
    }

    fetchData();
  }, [movieID]);

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}
    >
      <Card
        className="shadow-lg border-0"
        style={{ maxWidth: "800px", width: "100%", display: "flex", flexDirection: "row" }}
      >
        {product.poster_path && (
          <Card.Img
            variant="left"
            src={`https://image.tmdb.org/t/p/w500${product.poster_path}`}
            style={{ width: "300px", objectFit: "cover", borderRadius: "0" }}
          />
        )}
        <Card.Body className="p-4 d-flex flex-column justify-content-between">
          <div>
            <Card.Title className="mb-3" style={{ fontSize: "1.8rem", color: "#dc3545" }}>
              {product.title}
            </Card.Title>
            <Card.Text>
              <strong>Rating:</strong> {product.vote_average} <br />
              <strong>Release Date:</strong> {product.release_date} <br />
              <strong>Language:</strong> {product.original_language} <br />
              <strong>Popularity:</strong> {product.popularity}
            </Card.Text>
            <p className="mt-3" style={{ color: "#555" }}>{product.overview}</p>
          </div>
          <Button
            variant="danger"
            className="mt-3 align-self-start"
            onClick={() => navigate("/Products")}
          >
            Back to Movies
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductDetails;
