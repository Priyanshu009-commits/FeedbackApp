// import { motion, AnimatePresence } from 'framer-motion';
// import React from 'react';
// import FeedbackItem from './FeedbackItem';
// //import PropTypes from 'prop-types';

// function FeedbackList({ handleDelete }) {
//   if (!feedback || feedback.length === 0) {
//     return <p>No feedback yet.</p>;
//   }

//   return (
//     <div className="feedback-list">
//       {feedback.map((item) => (
//         <FeedbackItem
//           key={item.id}
//           item={item}
//           handleDelete={handleDelete}
//         />
//       ))}
//     </div>
//   );
// }

//   // return (
//   //   <div className="feedback-list">
//   //     <AnimatePresence>
//   //     {feedback.map((item) => (-
//   //       <motion.div
//   //         key={item.id}
//   //         initial={{ opacity: 0 }}
//   //         animate={{ opacity: 1 }}
//   //         exit={{ opacity: 0 }}
//   //         >
//   //         <FeedbackItem Key={item.id} item={item}  handleDelete={handleDelete}/>
//   //         </motion.div>
//   //     ))}
//   //     </AnimatePresence> 
//   //   </div>
//   // );
// // }




// // FeedbackList.propTypes = {
// //   feedback: PropTypes.arrayOf(
// //     PropTypes.shape({
// //       id: PropTypes.number.isRequired,
// //       text: PropTypes.string.isRequired,
// //       rating: PropTypes.number.isRequired,
// //     })
// //   ).isRequired,
// //   handleDelete: PropTypes.func.isRequired,
// // };

// export default FeedbackList;






// import { motion, AnimatePresence } from 'framer-motion';
// import React, { useContext } from 'react';
// import FeedbackItem from './FeedbackItem';
// import FeedbackContext from '../context/FeedbackContext';

// function FeedbackList() {
//   const { feedback } = useContext(FeedbackContext);

//   if (!feedback || feedback.length === 0) {
//     return <p>No feedback yet.</p>;
//   }

//   return (
//     <div className="feedback-list">
//       <AnimatePresence>
//         {feedback.map((item) => (
//           <motion.div
//             key={item.id}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <FeedbackItem item={item} />
//           </motion.div>
//         ))}
//       </AnimatePresence>
//     </div>
//   );
// }

// export default FeedbackList;






import React, { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet.</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedbackList;

