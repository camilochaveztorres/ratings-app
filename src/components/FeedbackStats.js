const FeedbackStats = ({ feedback }) => {
  let average = Math.round(
    feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length
  );
  return (
    <div className="feedback-stats">
      <h4>{feedback.length}</h4>
      <h4>Average rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
};

export default FeedbackStats;
