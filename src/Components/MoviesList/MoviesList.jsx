import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../../store/Slices/favoriteSlice';
import { Trash3 } from 'react-bootstrap-icons';


function FavoriteMoviesList() {
  const favorites = useSelector((state) => state.favorites.movies) || [];
  const dispatch = useDispatch();

  const handleRemoveFavorite = (movieId) => {
    dispatch(removeFavorite(movieId));
  };

  return (
    <div className="favorites-page container-fluid d-flex flex-column min-vh-100 py-5">
      <h1 className="text-center mb-5 fw-bold text-danger">Favorite Movies</h1>

      {favorites.length === 0 ? (
        <p className="text-center fs-5">No favorite movies added.</p>
      ) : (
        <div className="row justify-content-center">
          {favorites.map((movie) => (
            <div key={movie.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
              <Card className="shadow favorite-card h-100 d-flex flex-column rounded-4 border-0">
                <div className="position-relative">
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    className="img-fluid"
                    style={{ objectFit: 'cover', height: '350px' }}
                  />
                  <Button
                    variant="danger"
                    className="remove-icon-btn position-absolute top-0 end-0 m-2"
                    onClick={() => handleRemoveFavorite(movie.id)}
                  >
                    <Trash3 />
                  </Button>
                </div>

                <Card.Body className="d-flex flex-column ">
                  <Card.Title className="text-center mb-3">{movie.title}</Card.Title>
                  <Card.Text className="text-center flex-grow-1 text-muted small">
                    {movie.overview.length > 150
                      ? `${movie.overview.substring(0, 150)}...`
                      : movie.overview}
                  </Card.Text>

                  <div className="mt-auto text-center">
                    <Link to={`/ProductDetails/${movie.id}`} style={{ textDecoration: 'none' }}>
                    <Button variant="outline-danger" className="rounded-pill px-3 py-1 fw-semibold">
                          Details
                        </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoriteMoviesList;
