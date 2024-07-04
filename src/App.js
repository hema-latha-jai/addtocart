import React, { useState } from "react";
import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {
  let [cartvalue, setcartvalue] = useState(0);

  // State to hold the ratings for each card
  const [ratings, setRatings] = useState([
    { id: 1, rating: 3 },
    { id: 2, rating: 4 },
    { id: 3, rating: 5 }
  ]);

  const handleRatingChange = (id, newRating) => {
    setRatings(ratings.map(card => card.id === id ? { ...card, rating: newRating } : card));
  };

  return (
    <>
      <Navbar cartvalue={cartvalue} />
      {/* <Header /> */}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {ratings.map((card) => (
              <Card key={card.id} setcartvalue={setcartvalue} rating={card.rating} onRatingChange={(newRating) => handleRatingChange(card.id, newRating)} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

function Card({ setcartvalue, rating, onRatingChange }) {
  let [toggle, settoggle] = useState(true);

  // Function to render stars based on the rating
  const renderStars = () => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className="rating" onClick={() => onRatingChange(i + 1)}>
          {i < rating ? (
            <i className="fa-solid fa-star"></i>
          ) : (
            <i className="fa-regular fa-star"></i>
          )}
        </span>
      );
    }
    return stars;
  };

  return (
    <>
      <div className="col mb-5">
        <div className="card h-100">
          <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div>
          <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">Special Item</h5>
              <div className="d-flex justify-content-center small text-warning mb-2">
                {renderStars()}
              </div>
              <span className="text-muted text-decoration-line-through">$20.00</span>
              $18.00
            </div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              {toggle ? (
                <button className="btn btn-outline-dark mt-auto" onClick={() => {
                  setcartvalue(prev => prev + 1);
                  settoggle(!toggle);
                }}>Add to cart</button>
              ) : (
                <button className="btn btn-outline-dark mt-auto" onClick={() => {
                  setcartvalue(prev => prev - 1);
                  settoggle(!toggle);
                }}>Remove</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
