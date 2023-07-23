import Head from "next/head";
import Image from "next/image";
import Layout from "~/components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="hero bg-hero-image mt-[-76px] min-h-screen pt-[76px] md:mt-[-112px] md:min-h-[80vh] md:pt-[112px]">
        <div className="hero-content text-primary-content text-center">
          <div className="border-neutral-content flex flex-col items-center rounded-3xl border-2 px-16 py-12 backdrop-blur-md">
            <h1 className="text-neutral-content mb-5 text-6xl font-bold">
              Welcome to Healing
            </h1>
            <h2 className="my-auto mb-5 max-w-lg text-3xl">
              A place where the power of massage is combined with other
              alternative healing modalitis to give you the best experience in
              your healing journey.
            </h2>
            <button className="btn btn-primary">Book Appointment</button>
          </div>
        </div>
      </section>
      <section className="text-primary-content body-font">
        <div className="container mx-auto px-5 py-24">
          <div className="-m-4 flex flex-wrap justify-center gap-3">
            <div className="rounded-lg shadow-md md:w-[calc(33%-12px)]">
              <div className="border-primary bg-primary h-full overflow-hidden rounded-lg border-2 border-opacity-60">
                <Image
                  className="w-full object-cover object-center md:h-36 lg:h-48"
                  src="https://dummyimage.com/720x400"
                  width={720}
                  height={400}
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="title-font text-neutral-content mb-1 text-xs font-medium tracking-widest">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-primary-content mb-3 text-lg font-medium">
                    The Catalyzer
                  </h1>
                  <p className="mb-3 leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex flex-wrap items-center ">
                    <a className="text-base-100 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="ml-2 h-4 w-4"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-neutral-content border-primary bg-primary ml-auto mr-3 inline-flex items-center border-r-2 py-1 pr-3 text-sm leading-none md:ml-0 lg:ml-auto">
                      <svg
                        className="mr-1 h-4 w-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span className="text-neutral-content inline-flex items-center text-sm leading-none">
                      <svg
                        className="mr-1 h-4 w-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg shadow-md md:w-[calc(33%-12px)]">
              <div className="border-primary bg-primary h-full overflow-hidden rounded-lg border-2 border-opacity-60">
                <Image
                  className="w-full object-cover object-center md:h-36 lg:h-48"
                  src="https://dummyimage.com/720x400"
                  width={720}
                  height={400}
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="title-font text-neutral-content mb-1 text-xs font-medium tracking-widest">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-primary-content mb-3 text-lg font-medium">
                    The 400 Blows
                  </h1>
                  <p className="mb-3 leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex flex-wrap items-center">
                    <a className="text-base-100 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="ml-2 h-4 w-4"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-neutral-content border-primary bg-primary ml-auto mr-3 inline-flex items-center border-r-2 py-1 pr-3 text-sm leading-none md:ml-0 lg:ml-auto">
                      <svg
                        className="mr-1 h-4 w-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span className="text-neutral-content inline-flex items-center text-sm leading-none">
                      <svg
                        className="mr-1 h-4 w-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg shadow-md md:w-[calc(33%-12px)]">
              <div className="border-primary bg-primary h-full overflow-hidden rounded-lg border-2 border-opacity-60">
                <Image
                  className="w-full object-cover object-center md:h-36 lg:h-48"
                  width={720}
                  height={400}
                  src="https://dummyimage.com/720x400"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="title-font text-neutral-content mb-1 text-xs font-medium tracking-widest">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-primary-content mb-3 text-lg font-medium">
                    Shooting Stars
                  </h1>
                  <p className="mb-3 leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex flex-wrap items-center">
                    <a className="text-base-100 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="ml-2 h-4 w-4"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-neutral-content border-primary bg-primary ml-auto mr-3 inline-flex items-center border-r-2 py-1 pr-3 text-sm leading-none md:ml-0 lg:ml-auto">
                      <svg
                        className="mr-1 h-4 w-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span className="text-neutral-content inline-flex items-center text-sm leading-none">
                      <svg
                        className="mr-1 h-4 w-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-neutral text-neutral-content body-font">
        <div className="container mx-auto px-5 py-24">
          <div className="border-primary mx-auto mb-10 flex flex-col items-center border-b pb-10 sm:flex-row lg:w-3/5">
            <div className="text-primary inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 sm:mr-10 sm:h-32 sm:w-32">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-10 w-10 sm:h-16 sm:w-16"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="mt-6 flex-grow text-center sm:mt-0 sm:text-left">
              <h2 className="text-secondary title-font mb-2 text-lg font-medium">
                Shooting Stars
              </h2>
              <p className="text-base leading-relaxed">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <a className="text-accent mt-3 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="border-primary mx-auto mb-10 flex flex-col items-center border-b pb-10 sm:flex-row lg:w-3/5">
            <div className="mt-6 flex-grow text-center sm:mt-0 sm:text-left">
              <h2 className="text-secondary title-font mb-2 text-lg font-medium">
                The Catalyzer
              </h2>
              <p className="text-base leading-relaxed">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <a className="text-accent mt-3 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="text-primary order-first inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 sm:order-none sm:ml-10 sm:h-32 sm:w-32">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-10 w-10 sm:h-16 sm:w-16"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
          </div>
          <div className="mx-auto flex flex-col items-center sm:flex-row lg:w-3/5">
            <div className="text-primary inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 sm:mr-10 sm:h-32 sm:w-32">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-10 w-10 sm:h-16 sm:w-16"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="mt-6 flex-grow text-center sm:mt-0 sm:text-left">
              <h2 className="text-secondary title-font mb-2 text-lg font-medium">
                The 400 Blows
              </h2>
              <p className="text-base leading-relaxed">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <a className="text-accent mt-3 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <button className="text-accent-content bg-accent hover:bg-accent-focus mx-auto mt-20 flex rounded border-0 px-8 py-2 text-lg focus:outline-none">
            Button
          </button>
        </div>
      </section>
      <section className="text-base-content body-font">
        <div className="container mx-auto px-5 py-24">
          <div className="mx-auto w-full text-center lg:w-3/4 xl:w-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="mb-8 inline-block h-8 w-8 text-base"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="text-lg leading-relaxed">
              Edison bulb retro cloud bread echo park, helvetica stumptown
              taiyaki taxidermy 90&apos;s cronut +1 kinfolk. Single-origin
              coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar
              cronut adaptogen squid fanny pack vaporware. Man bun next level
              coloring book skateboard four loko knausgaard. Kitsch keffiyeh
              master cleanse direct trade indigo juice before they sold out
              gentrify plaid gastropub normcore XOXO 90&apos;s pickled cindigo
              jean shorts. Slow-carb next level shoindigoitch ethical authentic,
              yr scenester sriracha forage franzen organic drinking vinegar.
            </p>
            <span className="bg-primary mb-6 mt-8 inline-block h-1 w-10 rounded"></span>
            <h2 className="text-primary-content title-font text-sm font-medium tracking-wider">
              HOLDEN CAULFIELD
            </h2>
            <p className="text-gray-500">Senior Product Designer</p>
          </div>
        </div>
      </section>
    </>
  );
}
