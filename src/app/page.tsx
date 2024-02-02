import Head from "next/head";
import heroImage from "../assets/home-hero.jpg";
import BooksyWidget from "~/components/BooksyWidget";
import Cta from "~/components/CTA";
import Ratings from "~/components/Ratings";
import Button from "~/components/UI/Button";
import { getRelevantInfo } from "~/utils/booksyInfo";
import Image from "next/image";
import logoTransparent from "../assets/logo-transparent.png";

export default async function Home() {
  const { phone } = await getRelevantInfo();

  return (
    <>
      <Head>
        <title>The Mindful Body Massage</title>
      </Head>
      <section
        className="bg-hero-image hero relative py-36"
        style={{ backgroundImage: `url(${heroImage.src})` }}
      >
        <div className="hero-content text-center text-white">
          <div className="flex flex-col items-center rounded-3xl border-2 border-neutral-content p-4 backdrop-blur-md md:px-16 md:py-12">
            <h1 className="mb-5 text-left  font-gabriela text-3xl font-bold sm:text-center md:text-6xl">
              Welcome to Healing
            </h1>
            <h2 className="my-auto mb-5 max-w-lg text-left text-xl sm:text-center md:text-3xl">
              A place where the power of massage is combined with other
              alternative healing modalities to give you the best experience in
              your healing journey.
            </h2>
            <BooksyWidget />
          </div>
        </div>
      </section>
      <section className="mx-auto flex w-full max-w-5xl gap-16 bg-white px-5 py-24 text-primary-content">
        <div className="w-full max-w-[250px]">
          <Image
            src={logoTransparent}
            alt="The Mindful Body Massage logo"
            width={250}
            className=""
          />
        </div>
        <div className="w-full">
          <h2 className="mb-6 text-center font-gabriela text-4xl font-bold">
            Services
          </h2>
          <p className="text-base">
            At The Mindful Body Massage, our diverse range of massage therapies,
            including Swedish, Deep Tissue, Cupping, Hot Stone, Head and Neck,
            Gentle Touch, and Prenatal Massages, are expertly designed to cater
            to your specific needs. Whether you seek relaxation, stress relief,
            pain reduction, or prenatal care, we are dedicated to providing you
            with tailored treatments that promote overall well-being. Experience
            improved circulation, relief from muscle tension, enhanced
            relaxation, and a rejuvenated sense of self. Trust us to deliver the
            therapeutic benefits you deserve.
          </p>
          <div className="my-6 flex flex-col items-center justify-center">
            <Button href="/services">Our Services</Button>
            <p className="mt-1 text-center text-base font-semibold">
              Massages starting at $35
            </p>
          </div>
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
      <Cta phone={phone} />
    </>
  );
}
