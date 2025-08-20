import PageSection from "~/components/PageSection";
import PageTitle from "~/components/PageTitle";
import BookWidget from "~/components/book-widget";

const Services = async () => {

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
        <BookWidget />
        {/* <section className="mx-auto grid w-full scroll-m-20 grid-cols-1 gap-8 px-4 font-semibold sm:grid-cols-2 lg:grid-cols-3">
          {services?.map((service) => {
            return (
              <ProductCard
                key={service.id}
                product={service as object as ProductType}
              />
            );
          })}
        </section>
        <div className="mt-16 flex justify-center">
          <BooksyWidget />
        </div> */}
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
