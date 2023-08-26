const NextAppointment = () => {
  return (
    <section className="bg-gradient bg-primary py-8 dark:bg-gray-800 md:py-16">
      <div className="mx-auto box-content max-w-5xl px-5">
        <div className="-mx-5 flex flex-col items-center md:flex-row">
          <div className="mb-5 w-full px-5 text-center md:mb-0 md:text-left">
            <h6 className="text-xs font-semibold uppercase text-indigo-800 dark:text-gray-100 md:text-base">
              Opening tickets
            </h6>
            <h3 className="font-heading text-2xl font-bold text-white md:text-4xl">
              Saturday 17
            </h3>
            <h3 className="font-heading text-lg font-bold leading-tight text-white md:text-xl">
              @ 10:00 AM
            </h3>
            <div className="mt-4 w-full md:w-44">
              <button
                type="button"
                className="w-full rounded-lg  bg-white px-4 py-2 text-center text-base font-semibold text-primary shadow-md transition duration-200 ease-in hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2  focus:ring-offset-indigo-200 "
              >
                Early bird
              </button>
            </div>
          </div>
          <div className="w-full px-5 md:w-auto">
            <div className="flex justify-center text-center text-white">
              <div className="border-light-300 bg-light-100 mx-2 w-20 rounded-lg border py-3 md:w-24 md:py-4">
                <div className="text-2xl font-semibold md:text-3xl">
                  <span>0</span>
                  <span>1</span>
                </div>
                <div className="mt-3 text-xs uppercase opacity-75">Day</div>
              </div>
              <div className="border-light-300 bg-light-100 mx-2 w-20 rounded-lg border py-3 md:w-24 md:py-4">
                <div className="text-2xl font-semibold md:text-3xl">
                  <span>1</span>
                  <span>8</span>
                </div>
                <div className="mt-3 text-xs uppercase opacity-75 ">Hour</div>
              </div>
              <div className="border-light-300 bg-light-100 mx-2 w-20 rounded-lg border py-3 md:w-24 md:py-4">
                <div className="text-2xl font-semibold md:text-3xl">
                  <span>5</span>
                  <span>0</span>
                </div>
                <div className="mt-3 text-xs uppercase opacity-75 ">Min</div>
              </div>
              <div className="border-light-300 bg-light-100 mx-2 w-20 rounded-lg border py-3 md:w-24 md:py-4">
                <div className="text-2xl font-semibold md:text-3xl">
                  <span>1</span>
                  <span>9</span>
                </div>
                <div className="mt-3 text-xs uppercase opacity-75 ">Second</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextAppointment;
