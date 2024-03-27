"use client";

import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import type { ProductType } from "~/utils/booksyInfo";
import cupping from "../assets/cupping-massage.jpg";
import deepTissue from "../assets/deep-tissue.jpg";
import gentleTouch from "../assets/gentle-touch.jpg";
import headNeck from "../assets/head-neck.jpg";
import hotStone from "../assets/hot-stone.jpg";
import prenatal from "../assets/prenatal.jpg";
import swedish from "../assets/swedish-massage.jpg";
import Counter from "./Counter";
import Button from "./UI/Button";
import Modal from "./UI/Modal";

const productImageMap = {
  "6761872": prenatal,
  "6758613": swedish,
  "6758703": deepTissue,
  "6759010": cupping,
  "6759129": hotStone,
  "6759172": headNeck,
  "6759213": gentleTouch,
};

const ProductCard: React.FC<{ product: ProductType }> = ({ product }) => {
  const { id, name, description, variants } = product ?? {};

  const [selectedVariant, setSelectedVariant] = useState<number>(
    variants?.[0]?.id ?? 0
  );
  return (
    <div className="h-full rounded-lg bg-white">
      <div className="relative flex h-auto w-full items-end">
        <Image
          src={
            productImageMap[
              (id ?? "") as unknown as keyof typeof productImageMap
            ]
          }
          className="mb-3 h-[225px] w-full rounded-xl object-cover shadow-lg"
          alt=""
          width={375}
          height={250}
        />
      </div>
      <div>
        <h3 className="font-gabriela text-2xl font-bold">{name}</h3>
        <span className="text-sm text-primary-content/80">
          {variants.length > 1 ? "Starting at " : ""}${variants?.[0]?.price}
        </span>
        <p className="my-4 line-clamp-3">{description}</p>
        <Modal>
          <Modal.Button>
            <Button variant="solid" size="small">
              Read More
              <span className="sr-only">about the {name}</span>
            </Button>
          </Modal.Button>
          <Modal.Content>
            <h3 className="font-gabriela text-2xl font-bold">{name}</h3>
            <p className="mt-4">{description}</p>
            <hr className="my-3 border-primary" />
            <div className="flex items-center text-2xl font-semibold">
              <span className="self-start text-sm">$</span>
              <Counter
                value={
                  variants?.filter(({ id }) => id === selectedVariant)[0]
                    ?.price ?? 0
                }
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
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
