import BooksyWidget from "~/components/BooksyWidget";
import ProductCard from "~/components/ProductCard";
import type { ProductType } from "~/utils/booksyInfo";
import { getBooksyInfo, getRelevantInfo } from "~/utils/booksyInfo";

const Services = async () => {
  const { services } = await getRelevantInfo();
  const { description } = await getBooksyInfo();

  return (
    <>
      <section className="mx-auto w-full max-w-7xl bg-white py-9 text-primary-content">
        <div className="mx-auto px-5 py-24">
          <h2 className="mb-6 text-center font-gabriela text-4xl font-bold">
            Services
          </h2>
          <p className="text-lg">{description}</p>
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

export default Services;
