import { v4 as uuidv4 } from 'uuid';
import  {useContext} from 'react';
import FeedbackContext from './context/FeedbackContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './FeedbackStats';
import FeedbackForm from './FeedbackForm';
import AboutPage from './components/pages/AboutPage';
import Header from './components/Header';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  // const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to DELETE?')) {
      setFeedback((prevFeedback) =>
        prevFeedback.filter((item) => item.id !== id)
      );
    }
  };

  return (
    <FeedbackProvider>
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats/>
                <FeedbackList/>
              </>
            }
          />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <AboutIconLink />
      </div>
    </BrowserRouter>
    </FeedbackProvider>
  );
}

export default App;




// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import FeedbackList from './components';
// import FeedbackStats from './components/FeedbackStats';
// import FeedbackForm from './components/FeedbackForm';
// import AboutPage from './components/pages/AboutPage';
// import AboutIconLink from './components/AboutIconLink';
// import { FeedbackProvider } from './context/FeedbackContext';

// function App() {
//   return (
//     <FeedbackProvider>
//       <BrowserRouter>
//         <Header />
//         <div className="container">
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <>
//                   <FeedbackForm />
//                   <FeedbackStats />
//                   <FeedbackList />
//                 </>
//               }
//             />
//             <Route path="/about" element={<AboutPage />} />
//           </Routes>

//           {/* Floating about icon link */}
//           <AboutIconLink />
//         </div>
//       </BrowserRouter>
//     </FeedbackProvider>
//   );
// }

// export default App;










// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { FeedbackProvider } from './context/FeedbackContext';
// import FeedbackList from './components/FeedbackList';
// import FeedbackStats from './FeedbackStats';
// import FeedbackForm from './FeedbackForm';
// import AboutPage from './components/pages/AboutPage';
// import Header from './components/Header';
// import AboutIconLink from './components/AboutIconLink';

// function App() {
//   return (
//     <FeedbackProvider>
//       <BrowserRouter>
//         <Header />
//         <div className="container">
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <>
//                   <FeedbackForm />
//                   <FeedbackStats />
//                   <FeedbackList />
//                 </>
//               }
//             />
//             <Route path="/about" element={<AboutPage />} />
//           </Routes>
//           <AboutIconLink />
//         </div>
//       </BrowserRouter>
//     </FeedbackProvider>
//   );
// }

// export default App;
