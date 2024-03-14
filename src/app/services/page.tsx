import BooksyWidget from "~/components/BooksyWidget";
import PageSection from "~/components/PageSection";
import PageTitle from "~/components/PageTitle";
import ProductCard from "~/components/ProductCard";
import type { ProductType } from "~/utils/booksyInfo";
import { getRelevantInfo } from "~/utils/booksyInfo";

const Services = async () => {
  const { services } = await getRelevantInfo();

  return (
    <>
      <section className="mx-auto w-full max-w-7xl bg-white py-24 text-primary-content">
        <PageTitle>Services</PageTitle>
        <PageSection className="px-4 text-lg md:px-6">
          <p>
            At The Mindful Body Massage, our diverse range of massage therapies
            are expertly designed to cater to your specific needs. Whether you
            seek relaxation, stress relief, pain reduction, or prenatal care, we
            are dedicated to providing you with tailored treatments that
            promotes overall well-being. Experience improved circulation, relief
            from muscle tension, enhanced relaxation, and a rejuvenated sense of
            self. Trust us to deliver the therapeutic benefits you deserve.
          </p>
        </PageSection>
        <p className="my-6 text-center text-2xl font-semibold">
          Massages starting at $35
        </p>
        <PageSection className="grid max-w-none grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
          {services?.map((service) => {
            return (
              <ProductCard
                key={service.id}
                product={service as object as ProductType}
              />
            );
          })}
        </PageSection>
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
