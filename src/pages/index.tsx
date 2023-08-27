import Head from "next/head";
import heroImage from "../assets/home-hero.jpg";
import BooksyWidget from "~/components/BooksyWidget";
import { getRelevantInfo } from "~/utils/booksyInfo";
import ProductCard from "~/components/ProductCard";
import Cta from "~/components/CTA";
import reviews, { featuredReviews } from "~/utils/reviews";
import Ratings from "~/components/Ratings";

export default function Home() {
  const { services } = getRelevantInfo();

  return (
    <>
      <Head>
        <title>The Mindful Body Massage</title>
      </Head>
      <section
        className="bg-hero-image hero py-36"
        style={{ backgroundImage: `url(${heroImage.src})` }}
      >
        <div className="hero-content text-center text-white">
          <div className="flex flex-col items-center rounded-3xl border-2 border-neutral-content p-4 backdrop-blur-md md:px-16 md:py-12">
            <h1 className="mb-5 text-left  font-gabriela text-3xl font-bold sm:text-center md:text-6xl">
              Welcome to Healing
            </h1>
            <h2 className="my-auto mb-5 max-w-lg text-left text-xl sm:text-center md:text-3xl">
              A place where the power of massage is combined with other
              alternative healing modalitis to give you the best experience in
              your healing journey.
            </h2>
            <BooksyWidget />
          </div>
        </div>
      </section>
      <section className="mx-auto w-full max-w-7xl bg-white text-primary-content">
        <div className="mx-auto px-5 py-24">
          <h2 className="mb-6 text-center font-gabriela text-4xl font-bold">
            Services
          </h2>
          <p className="mb-6 text-center text-2xl font-semibold">
            Massages starting at $35
          </p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services?.map((service) => {
              return <ProductCard key={service.id} product={service} />;
            })}
          </div>
        </div>
        <div className="flex justify-center">
          <BooksyWidget />
        </div>
      </section>
      <section className="mx-auto w-full max-w-7xl bg-white text-primary-content">
        <div className="mx-auto px-5 py-24">
          <h2 className="mb-6 text-center font-gabriela text-4xl font-bold">
            Reviews
          </h2>
          <Ratings />
        </div>
      </section>
      <Cta />
    </>
  );
}
