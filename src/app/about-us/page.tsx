import Image from "next/image";
import profilepic from "../../assets/Nicole.jpeg";

export default function Component() {
  return (
    <div className="w-full py-24 xl:py-32">
      <h1 className="mb-24 text-center font-gabriela text-4xl font-bold">
        About Us
      </h1>
      <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2">
        <div className="sticky top-32 flex justify-center self-start">
          <div className="overflow-hidden rounded-full border-4 border-primary shadow-xl">
            <Image
              alt="Image"
              className="aspect-square scale-105 object-cover"
              height="400"
              src={profilepic.src}
              width="400"
            />
          </div>
        </div>
        <div className="relative space-y-4">
          <div className="sticky top-[72px] space-y-2 bg-white py-2">
            <h1 className="text-3xl font-bold">Nicole Cutchins</h1>
            <p className="text-gray-500 dark:text-gray-400">LMT and Owner</p>
          </div>
          <div className="space-y-4 text-justify lg:text-base/relaxed xl:text-xl/relaxed">
            <p>
              Hi! I am Nicole Cutchins, LMT (Licensed Massage Therapist) and the
              owner of The Mindful Body Massage. I graduated from my massage
              therapy apprenticeship at Orem Center for Massage in December of
              2021, and have been working on building The Mindful Body Massage
              ever since.
            </p>
            <p>
              The Mindful Body Massage began in a basement room in my home just
              a month after becoming licensed. I have continually worked hard to
              grow my business to where it is today, and feel a great sense of
              pride when I pause to reflect on where I began. The journey of
              growing my business and making my vision a reality has been
              incredibly fulfilling to me. Even more fulfilling though, has been
              sharing that experience of growth with all of my clients.
            </p>
            <p>
              I have a passion for massage and love to learn new skills
              regularly. I choose to be a “forever student”, so I can
              continually improve and better myself and my practice. I take
              pride in every massage I do and tailor each massage to my
              individual clients&apos; needs. This ensures that every time my
              clients come in, they are getting the best care I can give. Having
              good communication with my clients is key to giving and receiving
              a great massage. When my clients come to see me, I always make
              sure to thoroughly gather the information I need to give the best
              massage I can.
            </p>
            <p>
              I am trained in multiple modalities and love to incorporate all
              the different modalities I have learned into my massages to create
              a unique massage experience. In addition to using the skills
              I&apos;ve acquired in my various trainings, I incorporate guided
              breathing into my massages to help release and relax the muscles
              as I work them. I am passionate about the healing benefits of
              massage therapy and love having the ability to give those benefits
              of massages to others.
            </p>
            <p>
              I am committed to always creating a safe, comfortable environment
              that is primed for healing. I am trauma conscious, body positive,
              and LGBTQIA+ affirming, and I will always do everything in my
              power to provide a safe and comfortable environment of healing to
              my clients. I look forward to helping you heal!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "About Us | Nicole Cutchins",
  description: `Hi! I am Nicole Cutchins, LMT (Licensed Massage Therapist) and the
  owner of The Mindful Body Massage. I graduated from my massage
  therapy apprenticeship at Orem Center for Massage in December of
  2021, and have been working on building The Mindful Body Massage
  ever since.`,
};
