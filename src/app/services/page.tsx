import BooksyWidget from "~/components/BooksyWidget";
import ProductCard from "~/components/ProductCard";
import type { ProductType } from "~/utils/booksyInfo";
import { getRelevantInfo } from "~/utils/booksyInfo";

const Services = async () => {
  const { services } = await getRelevantInfo();

  return (
    <>
      <section className="mx-auto w-full max-w-7xl bg-white py-9 text-primary-content">
        <div className="mx-auto px-5 py-24">
          <h2 className="prose mb-6 text-center font-gabriela text-4xl font-bold">
            Services
          </h2>
          <p className="mx-auto max-w-3xl text-justify text-base font-semibold md:text-lg">
            At The Mindful Body Massage, our diverse range of massage therapies
            are expertly designed to cater to your specific needs. Whether you
            seek relaxation, stress relief, pain reduction, or prenatal care, we
            are dedicated to providing you with tailored treatments that
            promotes overall well-being. Experience improved circulation, relief
            from muscle tension, enhanced relaxation, and a rejuvenated sense of
            self. Trust us to deliver the therapeutic benefits you deserve.{" "}
          </p>
          <p className="my-6 text-center text-2xl font-semibold">
            Massages starting at $35
          </p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services?.map((service) => {
              return (
                <ProductCard
                  key={service.id}
                  product={service as object as ProductType}
                />
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

export const metadata = {
  title: "Services | The Mindful Body Massage",
  description: `At The Mindful Body Massage, our diverse range of massage therapies
  are expertly designed to cater to your specific needs. Whether you
  seek relaxation, stress relief, pain reduction, or prenatal care, we
  are dedicated to providing you with tailored treatments that
  promotes overall well-being. Experience improved circulation, relief
  from muscle tension, enhanced relaxation, and a rejuvenated sense of
  self. Trust us to deliver the therapeutic benefits you deserve.`,
};

export default Services;
