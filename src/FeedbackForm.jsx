// import React, { useState } from 'react';
// import RatingSelect from './components/RatingSelect';

// function FeedbackForm({ handleAdd }) {
//   const [message, setMessage] = useState('');
//   const [btnDisabled, setBtnDisabled] = useState(true);
//   const [validationMsg, setValidationMsg] = useState('');
//   const [rating, setRating] = useState(0);

//   const handleTextChange = (e) => {
//     const input = e.target.value;
//     setMessage(input);

//     if (input.trim().length <= 10) {
//       setValidationMsg('Text must be at least 10 characters');
//       setBtnDisabled(true);
//     } else {
//       setValidationMsg('');
//       setBtnDisabled(false);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (message.trim().length > 10) {
//       const newFeedback = {
//         text: message,
//         rating: rating,
//       };

//       console.log(newFeedback);
//       handleAdd(newFeedback);
//       setMessage('');
//       setBtnDisabled(true); // Optionally disable button again until new input
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>How would you rate our service?</h2>
//       <RatingSelect select={(rating) => setRating(rating)} />
//       <div className="input-group">
//         <input
//           type="text"
//           placeholder="Write your review"
//           value={message}
//           onChange={handleTextChange}
//         />
//         <button
//           type="submit"
//           className={`btn ${btnDisabled ? 'btn-disable' : ''}`}
//           disabled={btnDisabled}
//         >
//           Send
//         </button>
//       </div>
//       {validationMsg && <div className="message">{validationMsg}</div>}
//     </form>
//   );
// }

// export default FeedbackForm;











// import React, { useState, useContext } from 'react';
// import RatingSelect from './components/RatingSelect';
// import FeedbackContext from './context/FeedbackContext';

// function FeedbackForm() {
//   const [message, setMessage] = useState('');
//   const [btnDisabled, setBtnDisabled] = useState(true);
//   const [validationMsg, setValidationMsg] = useState('');
//   const [rating, setRating] = useState(0);

//   const { addFeedback } = useContext(FeedbackContext);

//   const handleTextChange = (e) => {
//     const input = e.target.value;
//     setMessage(input);

//     if (input.trim().length <= 10) {
//       setValidationMsg('Text must be at least 10 characters');
//       setBtnDisabled(true);
//     } else {
//       setValidationMsg('');
//       setBtnDisabled(false);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (message.trim().length > 10) {
//       const newFeedback = {
//         text: message,
//         rating: rating,
//       };

//       addFeedback(newFeedback);
//       setMessage('');
//       setBtnDisabled(true);
//       setRating(0); // Optional: reset rating
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>How would you rate our service?</h2>
//       <RatingSelect select={(rating) => setRating(rating)} />
//       <div className="input-group">
//         <input
//           type="text"
//           placeholder="Write your review"
//           value={message}
//           onChange={handleTextChange}
//         />
//         <button
//           type="submit"
//           className={`btn ${btnDisabled ? 'btn-disable' : ''}`}
//           disabled={btnDisabled}
//         >
//           Send
//         </button>
//       </div>
//       {validationMsg && <div className="message">{validationMsg}</div>}
//     </form>
//   );
// }

// export default FeedbackForm;




import React, { useState, useContext, useEffect } from 'react';
import RatingSelect from './components/RatingSelect';
import FeedbackContext from './context/FeedbackContext';

function FeedbackForm() {
  const [message, setMessage] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [validationMsg, setValidationMsg] = useState('');
  const [rating, setRating] = useState(10);

  const {
    addFeedback,
    feedbackEdit,
    updateFeedback,
  } = useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setMessage(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    const input = e.target.value;
    setMessage(input);

    if (input.trim().length <= 10) {
      setValidationMsg('Text must be at least 10 characters');
      setBtnDisabled(true);
    } else {
      setValidationMsg('');
      setBtnDisabled(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (message.trim().length > 10) {
      const newFeedback = {
        text: message,
        rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      setMessage('');
      setBtnDisabled(true);
      setRating(10);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>How would you rate our service?</h2>
      <RatingSelect select={(rating) => setRating(rating)} selected={rating} />
      <div className="input-group">
        <input
          type="text"
          placeholder="Write your review"
          value={message}
          onChange={handleTextChange}
        />
        <button type="submit" className="btn" disabled={btnDisabled}>
          Send
        </button>
      </div>
      {validationMsg && <div className="message">{validationMsg}</div>}
    </form>
  );
  
}

export default FeedbackForm;
