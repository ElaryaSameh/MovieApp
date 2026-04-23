import React, { useState, useEffect } from "react";
import { Col, Row, Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../store/Slices/favoriteSlice";
import { moviesAction } from "../../store/Slices/movies";

function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.movies) || [];
  const movies = useSelector((state) => state.movies.movies) || [];

  useEffect(() => {
    dispatch(moviesAction());
  }, [dispatch]);

  const handleFavoriteToggle = (movie) => {
    const isFavorite = favorites.some((fav) => fav.id === movie.id);
    if (isFavorite) {
      dispatch(removeFavorite(movie.id));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 text-danger">Popular Movies</h2>

      <Form className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form>

      <Row className="g-4">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => {
            const isFavorite = favorites.some((fav) => fav.id === movie.id);
            return (
              <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
                <Card className="shadow-sm rounded-4 border-0" style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    style={{
                      height: "350px",
                      objectFit: "cover",
                      borderTopLeftRadius: "1rem",
                      borderTopRightRadius: "1rem"
                    }}
                  />
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Title className="text-danger fw-bold text-center">{movie.title}</Card.Title>

                    <Card.Text className="text-muted small text-center">
                      <strong>Rating:</strong> {movie.vote_average} <br />
                      <strong>Votes:</strong> {movie.vote_count} <br />
                      <strong>Date:</strong> {movie.release_date} <br />
                      <strong>Lang:</strong> {movie.original_language} <br />
                      <strong>Popularity:</strong> {movie.popularity}
                    </Card.Text>

                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <Link to={`/ProductDetails/${movie.id}`} className="text-decoration-none">
                        <Button variant="outline-danger" className="rounded-pill px-3 py-1 fw-semibold">
                          Details
                        </Button>
                      </Link>

                      {isFavorite ? (
                        <FaHeart
                          size={26}
                          color="red"
                          onClick={() => handleFavoriteToggle(movie)}
                          style={{ cursor: "pointer" }}
                        />
                      ) : (
                        <FaRegHeart
                          size={26}
                          color="gray"
                          onClick={() => handleFavoriteToggle(movie)}
                          style={{ cursor: "pointer" }}
                        />
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <p className="text-center">No movies found...</p>
        )}
      </Row>
    </Container>
  );
}

export default Products;






