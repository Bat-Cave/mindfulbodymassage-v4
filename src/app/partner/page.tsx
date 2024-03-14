import { OpenNewWindow } from "iconoir-react";
import Image from "next/image";
import Link from "next/link";
import PageSection from "~/components/PageSection";
import PageTitle from "~/components/PageTitle";

export default function Component() {
  return (
    <div className="flex w-full flex-col items-center gap-12 pt-24 xl:pt-32">
      <PageTitle>Partner with The Mindful Body Massage!</PageTitle>
      <PageSection className="px-4 text-lg md:px-6">
        <p>
          Massage can be a great addition to your business. The benefits of
          massage to mental and physical well being are immeasurable. Whether
          you want to incorporate massage for the benefit of your clients or
          employees, I can guarantee it will be an addition to your business
          that will give you a positive edge above the rest. When you partner
          with The Mindful Body Massage, I will feature your business on my
          website and be sure to promote your business to my clients.
        </p>
      </PageSection>

      <div className="flex flex-col items-center justify-center gap-6 px-3 sm:flex-row">
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
      </div>
      <h2 className="w-full bg-primary px-4 py-8 text-center font-gabriela text-3xl font-bold text-white">
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
      <PageSection className="bg-primary text-white">
        <p className="mx-auto w-full max-w-3xl px-4 py-16">
          Interested in adding Massage as a perk in your business? Send us an
          email to inquire about how partnering works and how we can tailor our
          services to your specific needs! Whether you want to show your
          employees your appreciation for them through massage, or you want to
          collaborate to offer joint services, The Mindful Body Massage is ready
          to meet your needs and excited to work with you!
        </p>
      </PageSection>
    </div>
  );
}

const partners = [
  {
    id: "fleurdeclean",
    link: "https://www.fleurdecleanco.com/index.html",
    name: "Fleur de Clean",
    image: "https://www.fleurdecleanco.com/images/FleurDeClean_Color-p-500.png",
    description: (
      <>
        <p>
          Fleur de Clean is more than just a home cleaning company, they are a
          must have service that is dedicated to making your home become your
          haven. Fleur de Clean will tailor their services to your specific
          needs, big or small. We have partnered together to be able to offer
          you an inclusive service that brings stress relief to a whole new
          level with our joint packages that offer massage while your home is
          being cleaned. Book a free consultation with Fleur de Clean today and
          be sure to inquire about cleaning packages that include massage!
        </p>
        <em className="mt-2 text-sm font-normal text-primary">
          *If you prefer to have your massage on a different day than your
          cleaning service, we will work with you on booking times and
          availability.
        </em>
      </>
    ),
  },
  {
    id: "journeywithin",
    link: "https://journeywithin.net",
    name: "The Journey Within",
    image:
      "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/jaLHTsB0lZS7Xdg0CxuL/media/63bdc87da6fc4e809abd4cdf.png",
    description: (
      <p>
        The Journey Within is made up of an amazing team of practitioners that
        are passionate about helping people heal. Through their ketamine
        assisted therapy, they continually do all they can to help their
        patients reach new levels of healing and peace. With a shared belief in
        the mind and body connection, we have decided to partner and offer
        packages that combine the healing power of ketamine assisted therapy and
        massage. Our bodies hold stress and trauma within them. When we heal our
        minds, we simultaneously can help our bodies to release pain and heal as
        well. Let massage help your body release the stress and trauma it’s
        holding, and call The Journey Within to book your Ketamine assisted
        therapy with massage today!
      </p>
    ),
  },
];

export const metadata = {
  title: "Partner with Us! | The Mindful Body Massage",
  description: `Massage can be a great addition to your business. The benefits of massage to mental and physical well being are immeasurable. Whether you want to incorporate massage for the benefit of your clients or employees, I can guarantee it will be an addition to your business that will give you a positive edge above the rest. When you partner with The Mindful Body Massage, I will feature your business on my website and be sure to promote your business to my clients. 
  `,
};
