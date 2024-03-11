import { format, isBefore } from "date-fns";
import Image from "next/image";
import BooksyWidget from "~/components/BooksyWidget";
import { getRelevantInfo } from "~/utils/booksyInfo";
import { getInitials } from "~/utils/getInitials";
import { getGoogleReviews } from "~/utils/reviews";

const Reviews = async () => {
  const { reviews: booksyReviews, reviews_stars } = await getRelevantInfo();
  const googleReviews = await getGoogleReviews();

  // TODO: Refactor so that all reviews are merged and sorted by date.

  return (
    <>
      <section className="mx-auto w-full max-w-7xl bg-white py-9 text-primary-content">
        <div className="mx-auto px-5 py-24">
          <h1 className="mb-6 text-center font-gabriela text-4xl font-bold">
            Reviews
          </h1>
          <div className="mx-auto mb-12 flex flex-wrap justify-center gap-2 sm:gap-6">
            <a
              href="https://maps.app.goo.gl/xrtaXNj6cttpM6mM7"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 rounded-lg border-2 border-primary px-4 py-2 shadow-xl"
            >
              <span className="text-lg font-bold">
                {googleReviews?.rating || 5}
              </span>{" "}
              stars on{" "}
              <Image
                src="https://lh3.googleusercontent.com/d_S5gxu_S1P6NR1gXeMthZeBzkrQMHdI5uvXrpn3nfJuXpCjlqhLQKH_hbOxTHxFhp5WugVOEcl4WDrv9rmKBDOMExhKU5KmmLFQVg"
                alt="Google Logo"
                width={64}
                height={40}
                className="translate-y-[2px]"
              />
            </a>
            <a
              href="https://booksy.com/en-us/1042065_the-mindful-body-massage_massage_37870_pleasant-grove"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 rounded-lg border-2 border-primary px-4 py-2 shadow-xl"
            >
              <span className="text-lg font-bold">{reviews_stars}</span> stars
              on{" "}
              <Image
                src="https://booksy.com/biz/build/website/images/logos/logo.svg"
                alt="Booksy Logo"
                width={64}
                height={40}
                className="translate-y-[2px]"
              />
            </a>
          </div>
          <div className="mx-auto flex max-w-lg flex-col">
            {booksyReviews
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
                return (
                  <div
                    key={id}
                    className="flex flex-col gap-1 border-b border-b-gray-300 py-2 last:border-b-0"
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
                      <div className="flex gap-2">
                        <div>
                          <p className="capitalize">{user.first_name}</p>
                          <p className="text-xs">
                            {format(new Date(created), "MM/dd/yyyy")}
                          </p>
                        </div>
                        <p className="hidden sm:block">
                          <Image
                            src="data:image/png;base64,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"
                            alt="booksy logo"
                            width={16}
                            height={16}
                            className="mt-1"
                          />
                          <span className="sr-only">
                            {user.first_name} {user.last_name}&apos;s Review
                            from Booksy
                          </span>
                        </p>
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
            {googleReviews.reviews.map((review) => {
              return (
                <div
                  key={review.text}
                  className="flex flex-col gap-1 border-b border-b-gray-300 py-2 last:border-b-0"
                >
                  <div className="flex items-center gap-2">
                    <div className="avatar">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full">
                        {review.profile_photo_url ? (
                          <Image
                            src={review.profile_photo_url}
                            alt={review.author_name}
                            width={64}
                            height={64}
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-primary text-xl font-bold text-white">
                            {getInitials(
                              review.author_name.split(" ")[0] ?? "",
                              review.author_name.split(" ")[1] ?? ""
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <div>
                        <p className="capitalize">{review.author_name}</p>
                        <p className="text-xs">
                          {format(new Date(review.time * 1000), "MM/dd/yyyy")}
                        </p>
                      </div>
                      <a className="hidden sm:block" href={review.author_url}>
                        <Image
                          src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                          alt="booksy logo"
                          width={16}
                          height={16}
                          className="mt-1"
                        />
                        <span className="sr-only">
                          {review.author_name}&apos;s Google Review Profile
                        </span>
                      </a>
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
                  <p className="text-sm">{review.text}</p>
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
