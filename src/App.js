import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackItem />
      </div>
    </>
  );
}

export default App;

/* 
1. Skapa header
2. Skapa FeedbackItem: representera ett omdömde och score
3. Skapa en FeedbackList: ska visa alla feedbacksitems



*/
