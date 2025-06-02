// import { createContext, userState } from "react";
// import { useState } from 'react';

// const FeedbackContext = createContext()

// export const FeedbacProvider = ({ children }) => 
// {
//     const [feedback, setFeedback] = useState([
//         {
//             id: 1,
//             text: 'this item is from context',
//             rating: 10,
//         }
//     ])

//     return (
//         <FeedbackContext.Provider
//         value={{
//             feedback,
//         }}
//         >
//             {children}
//         </FeedbackContext.Provider>
//     )
// }

// export default FeedbackContext


// import { createContext, useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';

// const FeedbackContext = createContext();

// export const FeedbackProvider = ({ children }) => {
//   const [feedback, setFeedback] = useState([
//     {
//       id: 1,
//       text: 'This item is from context',
//       rating: 10,
//     },
//   ]);

//   // Add feedback
//   const addFeedback = (newFeedback) => {
//     newFeedback.id = uuidv4();
//     setFeedback([newFeedback, ...feedback]);
//   };

//   // Delete feedback
//   const deleteFeedback = (id) => {
//     if (window.confirm('Are you sure you want to delete?')) {
//       setFeedback(feedback.filter((item) => item.id !== id));
//     }
//   };

//   return (
//     <FeedbackContext.Provider
//       value={{
//         feedback,
//         addFeedback,
//         deleteFeedback,
//       }}
//     >
//       {children}
//     </FeedbackContext.Provider>
//   );
// };

// export default FeedbackContext;




// import { createContext, useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';

// const FeedbackContext = createContext();

// export const FeedbackProvider = ({ children }) => {
//   const [feedback, setFeedback] = useState([
//     {
//       id: 1,
//       text: 'This item is from context',
//       rating: 10,
//     },
//   ]);

//   // Add feedback
//   const addFeedback = (newFeedback) => {
//     newFeedback.id = uuidv4();
//     setFeedback((prevFeedback) => [newFeedback, ...prevFeedback]);
//   };

//   // Delete feedback
//   const deleteFeedback = (id) => {
//     if (window.confirm('Are you sure you want to delete?')) {
//       setFeedback((prevFeedback) =>
//         prevFeedback.filter((item) => item.id !== id)
//       );
//     }
//   };

//   return (
//     <FeedbackContext.Provider
//       value={{
//         feedback,
//         addFeedback,
//         deleteFeedback,
//       }}
//     >
//       {children}
//     </FeedbackContext.Provider>
//   );
// };

// export default FeedbackContext;







// import { createContext, useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import FeedbackData from '../data/FeedbackData'; // <-- make sure this path is correct

// const FeedbackContext = createContext();

// export const FeedbackProvider = ({ children }) => {
//   const [feedback, setFeedback] = useState(FeedbackData); // use your initial data here

//   const addFeedback = (newFeedback) => {
//     newFeedback.id = uuidv4();
//     setFeedback((prev) => [newFeedback, ...prev]);
//   };

//   const deleteFeedback = (id) => {
//     if (window.confirm('Are you sure?')) {
//       setFeedback((prev) => prev.filter((item) => item.id !== id));
//     }
//   };

//   return (
//     <FeedbackContext.Provider
//       value={{
//         feedback,
//         addFeedback,
//         deleteFeedback,
//       }}
//     >
//       {children}
//     </FeedbackContext.Provider>
//   );
// };

// export default FeedbackContext;



import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FeedbackData from '../data/FeedbackData';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // Add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  // Delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // Update feedback
  const updateFeedback = (id, updatedItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        addFeedback,
        deleteFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
