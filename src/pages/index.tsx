import Head from "next/head";
import heroImage from "../assets/home-hero.jpg";
import BooksyWidget from "~/components/BooksyWidget";
import { getBooksyInfo, getRelevantInfo } from "~/utils/booksyInfo";
import ProductCard from "~/components/ProductCard";
import Button, { buttonVariants } from "~/components/UI/Button";

export default function Home() {
  const { services, phone } = getRelevantInfo();
  const info = getBooksyInfo();

  console.log(info);

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
          <div className="flex flex-col items-center rounded-3xl border-2 border-neutral-content px-16 py-12 backdrop-blur-md">
            <h1 className="mb-5 text-6xl font-bold">Welcome to Healing</h1>
            <h2 className="my-auto mb-5 max-w-lg text-3xl">
              A place where the power of massage is combined with other
              alternative healing modalitis to give you the best experience in
              your healing journey.
            </h2>
            <BooksyWidget />
          </div>
        </div>
      </section>
      <section className="bg-white text-primary-content">
        <div className="mx-auto px-5 py-24">
          <h2 className="mb-6 text-center text-4xl font-bold">Services</h2>
          <p className="mb-6 text-center text-2xl font-semibold">
            Massages starting at $35
          </p>
          <div className="grid grid-cols-3 gap-3">
            {services?.map((service) => {
              return <ProductCard key={service.id} product={service} />;
            })}
            <div className="col-span-2 grid grid-cols-2 gap-3 rounded-md border-2 border-primary p-3">
              <div className="w-full max-w-md">
                <h2 className="mb-2 text-2xl font-bold">
                  Relax and Rejuvenate!
                </h2>
                <p className="mb-3">
                  Treat yourself to a soothing massage experience that will melt
                  away stress and tension.
                </p>
                <p className="mb-3">
                  We are ready to provide you with a personalized session
                  tailored to your needs.
                </p>
              </div>
              <div className="flex flex-col justify-end gap-3">
                <a
                  href={`tel:${phone}`}
                  className={buttonVariants({
                    variant: "outlined",
                    size: "large",
                  })}
                >
                  Contact Us
                </a>
                <div className="w-full max-w-[300px]">
                  <BooksyWidget />
                  <p className="mt-2 w-full text-center text-xs">
                    Limited slots available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
