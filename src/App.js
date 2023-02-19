import "./styles.css";
import star from "./images/star.svg";
import Thank from "./images/illustration-thank-you.svg";
import { useState } from "react";
export default function App() {
  const ratings = [1, 2, 3, 4, 5];
  const [userLogged, setUserLogged] = useState(true);
  const [rating, setRating] = useState(0);
  const handelSubmit = () => {
    if (rating !== 0) {
      setUserLogged(false);
    } else {
      alert("Please rate");
    }
  };
  return (
    <div className="App">
      {userLogged && (
        <div className="container">
          <div className="star-container">
            <img alt="star" src={star} />
          </div>
          <h1 className="heroText">How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="rateContainer">
            {ratings.map((rate) => (
              <button
                key={rate}
                className={`rate ${rating === rate ? "active" : ""}`}
                onClick={() => setRating(rate)}
              >
                {rate}
              </button>
            ))}
          </div>
          <button className="Submit-btn" onClick={handelSubmit}>
            Submit
          </button>
        </div>
      )}
      {!userLogged && (
        <div className="container">
          <div className="tContainer">
            <img alt="star" src={Thank} />
          </div>
          <div className="rate-holder">
            <div className="rating-container">
              <p>You selected {rating} out of 5</p>
            </div>
          </div>
          <h1 className="heroText2">Thank you!</h1>
          <p className="thank-text">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      )}
    </div>
  );
}
