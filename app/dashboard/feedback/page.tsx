"use client";

import { useState, ChangeEvent } from "react";
import { FaStar } from "react-icons/fa";

export default function UserFeedback() {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>("");
  const [selectedTag, setSelectedTag] = useState<string>("");

  const tags: string[] = [
    "Easy To Use",
    "Good Support",
    "Fast Service",
    "Professional",
    "User Friendly",
  ];

  const handleSubmit = (): void => {
    console.log({
      rating,
      tag: selectedTag,
      feedback,
    });
  };

  return (
    // <DashboardLayout>
      <div className="space-y-6">
        {/* Header Card */}
        <div className="bg-gradient-to-r from-[#5f1bb3] to-[#8e2de2] rounded-2xl p-6 text-white shadow-lg">
          <h1 className="text-3xl font-bold">Customer Feedback</h1>
          <p className="text-white/80 mt-2">
            Share your experience and help us improve our services.
          </p>
        </div>

        {/* Main Feedback Card */}
        <div className="bg-[var(--card)] border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md p-6">
          {/* Rating */}
          <div>
            <h2 className="text-lg font-semibold text-[var(--text)]">
              Overall Rating
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Rate your overall experience
            </p>

            <div className="flex gap-3 mt-5">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                >
                  <FaStar
                    className={`text-4xl transition-all duration-200 ${
                      star <= (hover || rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-[var(--text)]">
              What did you like?
            </h2>

            <div className="flex flex-wrap gap-3 mt-4">
              {tags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-xl border transition font-medium ${
                    selectedTag === tag
                      ? "bg-purple-600 text-white border-purple-600"
                      : "border-purple-200 text-purple-700 hover:bg-purple-50"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Feedback Text */}
          <div className="mt-8">
            <label className="block text-lg font-semibold text-[var(--text)] mb-3">
              Feedback Message
            </label>

            <textarea
              rows={5}
              maxLength={300}
              value={feedback}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setFeedback(e.target.value)
              }
              placeholder="Write your feedback here..."
              className="
                w-full
                rounded-xl
                border-2
                border-gray-300
                dark:border-gray-600
                bg-white
                dark:bg-gray-800
                p-4
                text-[var(--text)]
                outline-none
                focus:border-purple-600
                focus:ring-4
                focus:ring-purple-100
                resize-none
              "
            />

            <div className="text-right text-sm text-gray-500 mt-2">
              {feedback.length}/300
            </div>
          </div>

          {/* Submit */}
          <div className="mt-8">
            <button
              type="button"
              onClick={handleSubmit}
              className="
                w-full
                md:w-auto
                px-10
                py-3
                rounded-xl
                bg-gradient-to-r
                from-[#5f1bb3]
                to-[#8e2de2]
                text-white
                font-semibold
                shadow-md
                hover:scale-[1.02]
                transition
              "
            >
              Submit Feedback
            </button>
          </div>
        </div>
      </div>
    // </DashboardLayout>
  );
}