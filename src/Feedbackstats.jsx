// import React from 'react';
// import PropTypes from 'prop-types';
// import { useContext } from 'react';
// import FeedbackContext from './context/FeedbackContext';

// export default function Feedbackstats() {
//   const { feedback } = useContext(FeedbackContext)
//   let average =
//     feedback.reduce((acc, cur) => {
//       return acc + cur.rating;
//     }, 0) / feedback.length;

//   average = average.toFixed(1).replace(/[.,]0$/, '');

//   return (
//     <div className="feedback-stats">
//       <h4>{feedback.length} Reviews</h4>
//       <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
//     </div>
//   );
// }

// Feedbackstats.propTypes = {
//   feedback: PropTypes.array.isRequired,
// };




import React, { useContext } from 'react';
import FeedbackContext from './context/FeedbackContext';

export default function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  let average =
    feedback.reduce((acc, cur) => acc + cur.rating, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}
