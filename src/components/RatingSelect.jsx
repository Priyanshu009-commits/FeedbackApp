// import React, { useState } from 'react';

// function RatingSelect({ select }) {
//   const [selected, setSelected] = useState(0);

//   const handleChange = (e) => {
//     const value = +e.currentTarget.value; // Convert string to number
//     setSelected(value);
//     select(value); // Send rating to parent component
//   };

//   return (
//     <ul className="rating">
//       {[...Array(10)].map((_, i) => (
//         <li key={i + 1}>
//           <input
//             type="radio"
//             id={`num${i + 1}`}
//             name="rating"
//             value={i + 1}
//             onChange={handleChange}
//             checked={selected === i + 1}
//           />
//           <label htmlFor={`num${i + 1}`}>{i + 1}</label>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default RatingSelect;



import React, { useState, useEffect } from 'react';

function RatingSelect({ select, selected }) {
  const [selectedRating, setSelectedRating] = useState(10);

  useEffect(() => {
    setSelectedRating(selected);
  }, [selected]);

  const handleChange = (e) => {
    const rating = +e.currentTarget.value;
    setSelectedRating(rating);
    select(rating);
  };

  return (
    <ul className="rating">
      {[...Array(10)].map((_, i) => (
        <li key={i + 1}>
          <input
            type="radio"
            id={`num${i + 1}`}
            name="rating"
            value={i + 1}
            onChange={handleChange}
            checked={selectedRating === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  );
}

export default RatingSelect;
