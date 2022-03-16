import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import AboutLinks from "./components/AboutLink";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  //app level state

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
      //loopar igenom typ som foreach men man kan sätta ett vilkor
      //för att filtrera ut något. Kommer returnera alla element
      // förutom det vi valt att filtrera ut
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
                <AboutLinks />
              </>
            }
          />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

/* 
1. Skapa header
2. Skapa FeedbackItem: representera ett omdömde och score
3. Skapa en FeedbackList: ska visa alla feedbacksitems



*/
