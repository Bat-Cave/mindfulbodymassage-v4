import type { Metadata } from "next";
import Cta from "~/components/CTA";
import Header from "~/components/Header";
import Hero from "~/components/Hero";
import PartnerWithUs from "~/components/PartnerWithUs";
import Ratings from "~/components/Ratings";
import Services from "~/components/Services";
import { getRelevantInfo } from "~/utils/booksyInfo";

export default async function Home() {
  const { phone } = await getRelevantInfo();

  return (
    <>
      <Header />
      <Hero />
      <Services />
      <PartnerWithUs />
      <section className="mx-auto w-full max-w-7xl bg-white text-primary-content">
        <div className="mx-auto px-5 py-24">
          <h3 className="mb-6 text-center font-gabriela text-4xl font-bold">
            Reviews
          </h3>
          <Ratings />
        </div>
      </section>
      <Cta phone={phone} />
    </>
  );
}

export const metadata: Metadata = {
  title: "The Mindful Body Massage",
  description: `A place where the power of massage is combined with other
  alternative healing modalities to give you the best experience
  in your healing journey.`,
};
