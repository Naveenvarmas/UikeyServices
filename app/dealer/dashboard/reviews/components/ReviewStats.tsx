"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Star, ThumbsUp } from "lucide-react";

interface ReviewStatsProps{
  averageRating:number;
  totalReviews:number;
  fiveStarReviews:number;
}

export default function ReviewStats({
  averageRating,totalReviews,fiveStarReviews
}:ReviewStatsProps) {
  return(
    <div className="grid gap-4 md:grid-cols-3">

      {/* Average Rating */}

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">
                Overall Rating
              </p>

              <p className="mt-2 text-3xl font-bold">
                {averageRating}
              </p>
            </div>

            <div className="rounded-full bg-yellow-100 p-3">
              <Star className="h-6 w-6 fill-yellow-500 text-yellow-500" />
            </div>

          </div>

          <div className="mt-3 flex gap-1">
            {[1,2,3,4,5].map((star)=>(
              <Star key={star}
              className={`h-4 w-4 ${
                star <=Math.round(averageRating) ?
                "fill-yellow-500 text-yellow-500 " : "text-muted-foreground"
              }`} />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* total reviews */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-muted-foreground">
                Total Reviews
              </p>

              <p className="mt-2 text-3xl font-bold">
                {totalReviews}
              </p>
              
            </div>

            <div className="rounded-full bg-blue-100 p-3">
              <MessageSquare className="h-6 w-6 text-blue-600" />
            </div>
          </div>

        </CardContent>
      </Card>

      {/* five star reviews */}

      <Card>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">
                5 Star Reviews
              </p>

              <p className="mt-2 text-3xl font-bold">
                {fiveStarReviews}
              </p>


            </div>

            <div className="rounded-full bg-green-100 p-3">
              <ThumbsUp className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}