import React, { useState, useEffect } from 'react';

const ReviewForm = ({ drinkId }) => {
  const [userName, setUserName] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!drinkId) {
      console.error("drinkId is undefined");
      return;
    }

    const fetchReviews = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/drinks/${drinkId}/reviews`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setReviews(data);
        } else {
          console.error("Fetched data is not an array:", data);
          setReviews([]);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setReviews([]);
      }
    };

    fetchReviews();
  }, [drinkId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newReview = { user_name: userName, description, rating };
    
    try {
      const response = await fetch(`http://localhost:4000/api/drinks/{drinkId}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newReview),
      });

      if (response.ok) {
        const savedReview = await response.json();
        setReviews((prevReviews) => [...prevReviews, savedReview]);
        setUserName('');
        setDescription('');
        setRating(0);
        alert('Successfully Added Review');
      } else {
        alert('Failed to add review');
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      alert('Error submitting review');
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <h2 className="mb-4">Submit Your Review</h2>
          <form onSubmit={handleSubmit} className="bg-light p-4 rounded">
            <div className="mb-3">
              <label htmlFor="userName" className="form-label">User Name</label>
              <input
                type="text"
                className="form-control"
                id="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Review Description</label>
              <textarea
                className="form-control"
                id="description"
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Rating</label>
              <div>
                {[1, 2, 3, 4, 5].map((star) => ( 
                  <button
                    key={star}
                    type="button"
                    className={`btn ${rating >= star ? 'btn-warning' : 'btn-outline-warning'} me-1`}
                    onClick={() => setRating(star)}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>

          <div className="mt-4 row">
            {Array.isArray(reviews) && reviews.map((r, index) => (
              <div key={index} className="col-12 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{r.user_name} <span className="text-warning">{'★'.repeat(r.rating)}</span></h5>
                    <p className="card-text">{r.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
