type FeedbackStatsData = {
  id: number
  rating: number
  text: string
}

type FeedbackStatsProps = {
  feedbackData: FeedbackStatsData[]
}

function getAverageRating(ratings: FeedbackStatsData[]): string {
  const ratingCount: number = ratings.length
  let ratingSum: number

  if (ratingCount > 0) {
    ratingSum = ratings.reduce((acc, cur) => acc + cur.rating, 0)
    const avgRatingRounded = Math.round((ratingSum / ratingCount) * 10) / 10
    return avgRatingRounded.toString()
  }

  return 'N/A'
}

function FeedbackStats({ feedbackData }: FeedbackStatsProps) {
  return (
    <div className="feedback-stats">
      <h4>{feedbackData.length} Reviews</h4>
      <h4>Average Rating: {getAverageRating(feedbackData)}</h4>
    </div>
  )
}

export default FeedbackStats
