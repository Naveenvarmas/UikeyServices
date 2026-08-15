"use client";

import ReviewStats from "./components/ReviewStats";
import ReviewList from "./components/ReviewList";

export default function CustomerReviewsPage() {

  const reviews = [
    {
      id: "1",
      customerName: "Rahul Kumar",
      rating: 5,
      comment:
        "Excellent service and good products. The staff was very helpful.",
      date: "12 Aug 2026",
    },
    {
      id: "2",
      customerName: "Priya Sharma",
      rating: 4,
      comment:
        "Good experience. Delivery was also quick and smooth.",
      date: "10 Aug 2026",
    },
    {
      id: "3",
      customerName: "Arjun Reddy",
      rating: 5,
      comment:
        "Very helpful staff. I had a great experience.",
      date: "8 Aug 2026",
    },
    {
      id: "4",
      customerName: "Sneha Patel",
      rating: 4,
      comment:
        "Good products and reasonable prices.",
      date: "5 Aug 2026",
    },
    {
      id: "5",
      customerName: "Vikram Singh",
      rating: 5,
      comment:
        "Excellent quality and customer service.",
      date: "2 Aug 2026",
    },
  ];



  const totalReviews =
    reviews.length;

  const averageRating =
    reviews.reduce(
      (total, review) =>
        total + review.rating,
      0
    ) / totalReviews;

  const fiveStarReviews =
    reviews.filter(
      (review) => review.rating === 5
    ).length;


  return (
    <div className="space-y-6 p-6">

      <div>

        <h1 className="text-3xl font-bold">
          Customer Reviews
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          View and manage feedback from your customers.
        </p>

      </div>

      <ReviewStats
        averageRating={Number(
          averageRating.toFixed(1)
        )}
        totalReviews={totalReviews}
        fiveStarReviews={fiveStarReviews}
      />


      <ReviewList
        reviews={reviews}
      />

    </div>
  );
}