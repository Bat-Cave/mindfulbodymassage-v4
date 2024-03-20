import Image from "next/image";
import Link from "next/link";
import PageSection from "~/components/PageSection";
import CurrentPartners from "~/components/current-partners";
import PartnerEmail from "~/components/partner-email";
import PartnerHero from "~/components/partner-hero";
import { partners } from "~/lib/data";

export default function Component() {
  return (
    <div className="flex w-full flex-col items-center gap-12 pt-24">
      <PartnerHero />

      <PageSection className="flex flex-col items-center justify-center gap-6 px-3 sm:flex-row">
        {partners.map((partner) => {
          return (
            <Link
              key={`${partner.id}-link`}
              href={`#${partner.id}`}
              className="flex h-[75px] w-full max-w-xs justify-center overflow-hidden rounded-xl border border-primary px-2 shadow-lg sm:px-4"
            >
              <Image
                src={partner.image}
                alt={`${partner.name} Logo`}
                width={500}
                height={223}
                className="h-full w-auto object-contain"
              />
            </Link>
          );
        })}
      </PageSection>
      <PartnerEmail />
      <CurrentPartners />
    </div>
  );
}

export const metadata = {
  title: "Partner with Us! | The Mindful Body Massage",
  description: `Massage can be a great addition to your business. The benefits of massage to mental and physical well being are immeasurable. Whether you want to incorporate massage for the benefit of your clients or employees, I can guarantee it will be an addition to your business that will give you a positive edge above the rest. When you partner with The Mindful Body Massage, I will feature your business on my website and be sure to promote your business to my clients. 
  `,
};
