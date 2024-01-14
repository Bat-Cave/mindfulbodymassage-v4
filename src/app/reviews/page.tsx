import { format, isBefore } from "date-fns";
import Image from "next/image";
import BooksyWidget from "~/components/BooksyWidget";
import { getRelevantInfo } from "~/utils/booksyInfo";
import { getInitials } from "~/utils/getInitials";
import reviews from "~/utils/reviews";

const transformReview = (review: string) => {
  return {
    id: review.length * Math.PI,
    rank: 5,
    title: "",
    review: review,
    user: {
      id: review.length * Math.PI * 2,
      first_name: "Anonymous",
      last_name: "",
      avatar: undefined,
    },
    business: {
      id: 1042065,
      name: "The Mindful Body Massage",
      reviews_count: null,
      reviews_stars: 0,
      url: "1042065_the-mindful-body-massage_massage_37870_pleasant-grove",
      thumbnail_photo:
        "https://d2zdpiztbgorvt.cloudfront.net/region1/us/1042065/logo/326e04ed8309461abc25c032e6513f-the-mindful-body-massage-logo-568401361714441998ae6fd2e90c25-booksy.jpeg",
      full_address: "519 W State St., 84062 Pleasant Grove",
    },
    reply_content: null,
    reply_updated: null,
    created: "2000-09-07T03:03:55",
    updated: "2000-09-07T03:03:55",
    services: [{ id: 6758613, name: "Swedish Massage", treatment_id: 460 }],
    staff: [{ id: 992873, name: "Nicole Cutchins" }],
    source: null,
  };
};

const transformedReviews = reviews.map((review) => transformReview(review));

const Reviews = async () => {
  const { reviews: booksyReviews } = await getRelevantInfo();

  return (
    <>
      <section className="mx-auto w-full max-w-7xl bg-white py-9 text-primary-content">
        <div className="mx-auto px-5 py-24">
          <h2 className="mb-6 text-center font-gabriela text-4xl font-bold">
            Reviews
          </h2>
          <div className="mx-auto flex max-w-lg flex-col">
            {[...transformedReviews, ...booksyReviews]
              .sort((a, b) => {
                if (typeof a === "string" || typeof b === "string") {
                  return 1;
                }
                return isBefore(new Date(a.created), new Date(b.created))
                  ? 1
                  : -1;
              })
              .map((rvw) => {
                const { id, review, user, created } = rvw;
                const isAnon = user.first_name === "Anonymous";
                return (
                  <div
                    key={id}
                    className="flex flex-col gap-3 border-b border-b-gray-300 py-8 last:border-b-0"
                  >
                    <div className="flex items-center gap-2">
                      <div className="avatar">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full">
                          {user.avatar ? (
                            <Image
                              src={user.avatar}
                              alt={user.first_name}
                              width={64}
                              height={64}
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center bg-primary text-xl font-bold text-white">
                              {getInitials(user.first_name, user.last_name)}
                            </div>
                          )}
                        </div>
                      </div>

                      <div>
                        <p>{user.first_name}</p>
                        {!isAnon && (
                          <p className="text-xs">
                            {format(new Date(created), "MM/dd/yyyy")}
                          </p>
                        )}
                      </div>
                      <div className="ml-auto flex items-center gap-1">
                        <svg
                          className="h-6 w-6 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="h-6 w-6 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="h-6 w-6 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="h-6 w-6 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="h-6 w-6 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm">{review}</p>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="flex justify-center">
          <BooksyWidget />
        </div>
      </section>
    </>
  );
};

export default Reviews;
