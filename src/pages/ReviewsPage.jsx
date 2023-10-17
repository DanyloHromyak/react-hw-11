import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieReviews } from "../services/getMovieReviews";

const ReviewsPage = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(data => {
      setReviews(data);
    });
  }, [movieId]);

  return (
    <div>
      <h1 className="mb-5">Reviews</h1>
      {reviews.length === 0 ? (
        <p>{"We don't have any reviews for this movie."}</p>
      ) : (
        <ul>
          {reviews.map(review => (
            <li className="mb-5" key={review.id}>
              <p><span className="text-red-600">Author:</span> {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default ReviewsPage;
