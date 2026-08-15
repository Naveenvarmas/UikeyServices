"use client";

import {
  Star,
  User,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Review {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
}

interface ReviewListProps {
  reviews: Review[];
}

export default function ReviewList({
  reviews,
}: ReviewListProps) {

  return (
    <Card>

      <CardHeader>

        <CardTitle>
          Customer Reviews
        </CardTitle>

        <p className="text-sm text-muted-foreground">
          Reviews and feedback from your customers.
        </p>

      </CardHeader>


      <CardContent>

        <div className="space-y-5">

          {reviews.map((review) => (

            <div
              key={review.id}
              className="rounded-xl border p-4"
            >

              <div className="flex items-start justify-between gap-4">

                {/* Customer */}
                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">

                    <User className="h-5 w-5 text-muted-foreground" />

                  </div>

                  <div>

                    <p className="font-semibold">
                      {review.customerName}
                    </p>

                    <p className="text-xs text-muted-foreground">
                      {review.date}
                    </p>

                  </div>

                </div>


                {/* Rating */}
                <div className="flex gap-1">

                  {[1, 2, 3, 4, 5].map((star) => (

                    <Star
                      key={star}
                      className={`h-4 w-4 ${
                        star <= review.rating
                          ? "fill-yellow-500 text-yellow-500"
                          : "text-muted-foreground"
                      }`}
                    />

                  ))}

                </div>

              </div>


              {/* Review */}
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {review.comment}
              </p>

            </div>

          ))}

        </div>

      </CardContent>

    </Card>
  );
}