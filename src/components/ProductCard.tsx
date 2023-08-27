import { useState } from "react";
import { getRelevantInfo } from "~/utils/booksyInfo";
import Modal from "./UI/Modal";
import Button from "./UI/Button";
import purpleFlowerGradient from "../assets/marek-piwnicki-QXgP8oIRMuY-unsplash.jpg";
import ferns from "../assets/eugene-golovesov-moO8IJuBjaw-unsplash.jpg";
import oceanGradient from "../assets/harli-marten-n7a2OJDSZns-unsplash.jpg";
import rubberLeaves from "../assets/justin-schwartfigure-e_Nq5WzZOqs-unsplash.jpg";
import canyonGradient from "../assets/kevin-lanceplaine-sO-JmQj95ec-unsplash.jpg";
import swampLeaves from "../assets/kira-laktionov-O--w1YENoeU-unsplash.jpg";
import handFlowers from "../assets/roberta-sorge-UvVVnUmW2mQ-unsplash.jpg";
import Image from "next/image";
import Counter from "./Counter";
import { twMerge } from "tailwind-merge";

const { services } = getRelevantInfo();
const service = services?.[0];

const productImageMap = {
  "6761872": purpleFlowerGradient,
  "6758613": ferns,
  "6758703": canyonGradient,
  "6759010": rubberLeaves,
  "6759129": oceanGradient,
  "6759172": swampLeaves,
  "6759213": handFlowers,
};

const ProductCard: React.FC<{ product: typeof service }> = ({ product }) => {
  const { id, name, description, variants } = product ?? {};

  const [selectedVariant, setSelectedVariant] = useState<number>(
    variants?.[0]?.id ?? 0
  );
  return (
    <div key={id} className="h-full rounded-lg bg-white">
      <div className="relative flex h-auto w-full items-end">
        <Image
          src={productImageMap[(id ?? "") as keyof typeof productImageMap]}
          className="mb-3 h-[225px] w-full rounded-xl object-cover"
          alt=""
          width={375}
          height={250}
        />
      </div>
      <div>
        <h3 className="font-gabriela text-2xl font-bold">{name}</h3>
        <p className="my-4 line-clamp-3">{description}</p>
        <Modal>
          <Modal.Button>
            <Button variant="solid" size="small">
              Read More
            </Button>
          </Modal.Button>
          <Modal.Content autoFocus={false}>
            <h3 className="font-gabriela text-2xl font-bold">{name}</h3>
            <p className="mt-4">{description}</p>
            <hr className="my-3 border-primary" />
            <p className="flex items-center text-2xl font-semibold">
              <span className="self-start text-sm">$</span>
              <Counter
                value={
                  variants?.filter(({ id }) => id === selectedVariant)[0]
                    ?.price ?? 0
                }
              />
            </p>
            <div className="mt-4 flex gap-3">
              {variants?.map((variant) => {
                const { id, duration } = variant;
                return (
                  <Button
                    variant="text"
                    key={id}
                    onClick={() => setSelectedVariant(id)}
                    className={twMerge(
                      "rounded-full border border-primary px-2 hover:bg-primary hover:text-white focus:bg-primary focus:text-white",
                      selectedVariant === id && "bg-primary text-white"
                    )}
                  >
                    {duration} min
                  </Button>
                );
              })}
            </div>
          </Modal.Content>
        </Modal>
      </div>
    </div>
  );
};

export default ProductCard;
