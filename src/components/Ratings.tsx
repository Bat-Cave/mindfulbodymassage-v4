import reviews from "~/utils/reviews";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { useState } from "react";
import useAutoPlay from "~/utils/hooks/useAutoPlay";

const Ratings = () => {
  const [currReview, setCurrReview] = useState(0);
  const [ref] = useAutoPlay(
    () =>
      setCurrReview((curr) => {
        if (curr + 1 >= reviews.length) {
          return 0;
        }
        return curr + 1;
      }),
    { interval: 3000 }
  );

  return (
    <>
      <div className="flex justify-center">
        <div className="mb-5 flex items-center space-x-2">
          <svg
            className="h-8 w-8 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="h-8 w-8 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="h-8 w-8 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="h-8 w-8 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="h-8 w-8 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        </div>
      </div>
      <div className="mb-5 flex flex-col items-start sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <p className="inline-flex items-center rounded bg-primary p-1.5 text-sm font-semibold text-white">
            5/5
          </p>
          <p className="font-medium text-primary sm:ml-2 ">Excellent</p>
          <span className="mx-2 h-1 w-1 rounded-full bg-black"></span>
          <p className="text-sm font-medium text-gray-500">
            {reviews.length} reviews
          </p>
        </div>
        {/* todo: add back when I have more reviews to show */}
        {/* <a
          href="/reviews"
          className="mt-3 text-sm font-medium text-primary hover:underline sm:ml-auto sm:mt-0"
        >
          Read all reviews
        </a> */}
      </div>
      <div className="gap-8 sm:grid sm:grid-cols-2">
        <MotionConfig
          transition={{ type: "spring", stiffness: 300, damping: 30, mass: 1 }}
        >
          <div>
            <dl>
              <dt className="text-sm font-medium text-gray-500">
                Relaxing and Comfortable Atmosphere
              </dt>
              <dd className="mb-3 flex items-center">
                <div className="mr-2 h-2.5 w-full rounded bg-gray-200">
                  <motion.div
                    className="h-2.5 rounded bg-primary"
                    initial={{ width: "0" }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.1 }}
                  ></motion.div>
                </div>
                <span className="text-sm font-medium text-gray-500">5/5</span>
              </dd>
            </dl>
            <dl>
              <dt className="text-sm font-medium text-gray-500">
                Communication
              </dt>
              <dd className="mb-3 flex items-center">
                <div className="mr-2 h-2.5 w-full rounded bg-gray-200">
                  <motion.div
                    className="h-2.5 rounded bg-primary"
                    initial={{ width: "0" }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.2 }}
                  ></motion.div>
                </div>
                <span className="text-sm font-medium text-gray-500">5/5</span>
              </dd>
            </dl>
            <dl>
              <dt className="text-sm font-medium text-gray-500">
                Flow and Pressure
              </dt>
              <dd className="mb-3 flex items-center">
                <div className="mr-2 h-2.5 w-full rounded bg-gray-200">
                  <motion.div
                    className="h-2.5 rounded bg-primary"
                    initial={{ width: "0" }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.3 }}
                  ></motion.div>
                </div>
                <span className="text-sm font-medium text-gray-500">5/5</span>
              </dd>
            </dl>
            <dl>
              <dt className="text-sm font-medium text-gray-500">
                Comfortable Draping and Positioning
              </dt>
              <dd className="mb-3 flex items-center">
                <div className="mr-2 h-2.5 w-full rounded bg-gray-200">
                  <motion.div
                    className="h-2.5 rounded bg-primary"
                    initial={{ width: "0" }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.4 }}
                  ></motion.div>
                </div>
                <span className="text-sm font-medium text-gray-500">5/5</span>
              </dd>
            </dl>
            <dl>
              <dt className="text-sm font-medium text-gray-500">
                Relaxing and Positive Experience
              </dt>
              <dd className="mb-3 flex items-center">
                <div className="mr-2 h-2.5 w-full rounded bg-gray-200">
                  <motion.div
                    className="h-2.5 rounded bg-primary"
                    initial={{ width: "0" }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.5 }}
                  ></motion.div>
                </div>
                <span className="text-sm font-medium text-gray-500">5/5</span>
              </dd>
            </dl>
          </div>
        </MotionConfig>
        <div ref={ref} className="overflow-hidden">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={reviews[currReview]}
              className="flex h-full min-h-[33vh] w-full items-center justify-center p-4 text-center font-gabriela text-lg sm:min-h-0 sm:p-12"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
            >
              ❝ {reviews[currReview]} ❞
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Ratings;
