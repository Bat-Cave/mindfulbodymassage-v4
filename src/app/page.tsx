import Head from "next/head";
import Cta from "~/components/CTA";
import Hero from "~/components/Hero";
import Ratings from "~/components/Ratings";
import Services from "~/components/Services";
import { getRelevantInfo } from "~/utils/booksyInfo";

export default async function Home() {
  const { phone } = await getRelevantInfo();

  return (
    <>
      <Head>
        <title>The Mindful Body Massage</title>
      </Head>
      <Hero />
      <Services />
      <section className="mx-auto w-full max-w-7xl bg-white text-primary-content">
        <div className="mx-auto px-5 py-24">
          <h2 className="mb-6 text-center font-gabriela text-4xl font-bold">
            Reviews
          </h2>
          <Ratings />
        </div>
      </section>
      <Cta phone={phone} />
    </>
  );
}
