import { partners } from "~/lib/data";
import PageSection from "./PageSection";
import Link from "next/link";
import { OpenNewWindow } from "iconoir-react";

const CurrentPartners = () => {
  return (
    <div className="mb-24 flex flex-col gap-12">
      <h2 className="w-full px-4 text-center font-gabriela text-3xl font-bold text-primary">
        Our Partners
      </h2>
      {partners.map((partner) => {
        return (
          <PageSection key={partner.id} id={partner.id}>
            <div className="mb-4 flex w-auto items-center gap-3 border-b border-primary pb-2 text-left font-gabriela text-2xl font-bold text-primary">
              <Link
                href={partner.link}
                target="_blank"
                rel="nooopener"
                className="group flex gap-2"
              >
                <h3>{partner.name}</h3>
                <OpenNewWindow
                  strokeWidth={2.5}
                  className="w-6 opacity-30 transition-opacity group-hover:opacity-100"
                />
              </Link>
            </div>
            {partner.description}
          </PageSection>
        );
      })}
    </div>
  );
};

export default CurrentPartners;
