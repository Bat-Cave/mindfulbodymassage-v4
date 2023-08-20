import { useState } from "react";
import { getRelevantInfo } from "~/utils/booksyInfo";
import Modal from "./UI/Modal";
import Button from "./UI/Button";
import { twMerge } from "tailwind-merge";

const { services } = getRelevantInfo();
const service = services?.[0];

const ProductCard: React.FC<{ product: typeof service }> = ({ product }) => {
  const { id, name, description, variants } = product ?? {};
  const [selectedVariant, setSelectedVariant] = useState<number>(
    variants?.[0]?.id ?? 0
  );
  return (
    <div
      key={id}
      className="h-full overflow-hidden rounded-lg border-2 border-primary bg-white p-3"
    >
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="mt-4 line-clamp-3">{description}</p>
      <Modal>
        <Modal.Button>
          <Button variant="text">Read More</Button>
        </Modal.Button>
        <Modal.Content>
          <h3 className="text-2xl font-bold">{name}</h3>
          <p className="mt-4">{description}</p>
          <hr className="my-3 border-primary" />
          <p className="text-2xl font-semibold">
            {
              variants?.filter(({ id }) => id === selectedVariant)[0]
                ?.service_price
            }
          </p>
          <div className="mt-4 flex gap-3">
            {variants?.map((variant) => {
              const { id, duration } = variant;
              return (
                <Button
                  variant="text"
                  key={id}
                  onClick={() => setSelectedVariant(id)}
                  className="rounded-full border border-primary px-2 hover:bg-primary hover:text-white focus:bg-primary focus:text-white"
                >
                  {duration} min
                </Button>
              );
            })}
          </div>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default ProductCard;
