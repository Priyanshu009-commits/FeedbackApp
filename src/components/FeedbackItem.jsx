// import React from 'react';
// import PropTypes from 'prop-types';
// import Card from './shared/Card';
// import { FaTimes } from 'react-icons/fa';

// function FeedbackItem({ item, handleDelete }) {
//   return (
//     <Card reverse={item.rating < 7}>
//       <div className="num-display">{item.rating}</div>
//       <button onClick={()=> handleDelete(item.id)} className='close'>
//         <FaTimes color='purple'/>
//       </button>
//       <div className="text-display">{item.text}</div>
//     </Card>
//   );
// }

// FeedbackItem.propTypes = {
//   item: PropTypes.shape({
//     id: PropTypes.number,
//     text: PropTypes.string,
//     rating: PropTypes.number,
//   }).isRequired,
// };

// export default FeedbackItem;













// import React, { useContext } from 'react';
// import Card from './shared/Card';
// import { FaTimes } from 'react-icons/fa';
// import FeedbackContext from '../context/FeedbackContext';

// function FeedbackItem({ item }) {
//   const { deleteFeedback } = useContext(FeedbackContext);

//   return (
//     <Card reverse={item.rating < 7}>
//       <div className="num-display">{item.rating}</div>
//       <button onClick={() => deleteFeedback(item.id)} className="close">
//         <FaTimes color="purple" />
//       </button>
//       <div className="text-display">{item.text}</div>
//     </Card>
//   );
// }

// export default FeedbackItem;












import React, { useContext } from 'react';
import Card from './shared/Card';
import { FaTimes, FaEdit } from 'react-icons/fa';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card reverse={item.rating < 7}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
