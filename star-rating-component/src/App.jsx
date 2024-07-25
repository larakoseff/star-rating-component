import { useState } from "react";
import starEmpty from "./assets/star-empty.svg";
import starFilled from "./assets/star-filled.svg";
import "./App.css";

function StarButton({ isActive, onClick }) {
  const starSrc = isActive ? starFilled : starEmpty;

  return (
    <button
      className="star--empty"
      onClick={onClick}
    >
      <img src={starSrc} className="star" alt="Star" />
    </button>
  );
}

function OneStar() {
  return (
    <div className="fav--message-1">
      We're sorry to hear that you had a bad experience. We would like to learn
      more about what happened and how we can make things right.
    </div>
  );
}

function TwoStars() {
  return (
    <div className="fav--message-2">
      We apologize for the inconvenience you experienced. We appreciate your
      feedback and would like to work with you to address any issues.
    </div>
  );
}

function ThreeStars() {
  return (
    <div className="fav--message-3">
      Thank you for your feedback. We're sorry to hear that your experience
      wasn't perfect. We would love to hear more about your concerns to see how
      we can improve.
    </div>
  );
}

function FourStars() {
  return (
    <div className="fav--message-4">
      Thank you for your positive feedback! We're glad to know that you had a
      great experience and we appreciate your support.
    </div>
  );
}

function FiveStars() {
  return (
    <div className="fav--message-5">
      Excellent! We're thrilled to hear you had such a positive experience.
      Thank you for choosing our platform.
    </div>
  );
}

const messages = [
  null,
  <OneStar />,
  <TwoStars />,
  <ThreeStars />,
  <FourStars />,
  <FiveStars />
];

function App() {
  const [rating, setRating] = useState(0);

  const handleClick = (index) => {
    setRating(index === rating ? 0 : index);
  };

  return (
    <div>
      <div className="fav--container">
        <div className="fav--header">
          <h1>How many stars would you give to our Online Code Editor?</h1>
        </div>
        <div className="fav--stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <StarButton
              key={star}
              isActive={star <= rating}
              onClick={() => handleClick(star)}
            />
          ))}
        </div>
        <div className="fav--message">
          {messages[rating]}
        </div>
      </div>
    </div>
  );
}

export default App;
