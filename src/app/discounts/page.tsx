import Link from "next/link";
import PageSection from "~/components/PageSection";
import PageTitle from "~/components/PageTitle";
import MemberFaq from "./member-faq";
import ReferFaq from "./refer-faq";
import { DollarCircle, DollarCircleSolid } from "iconoir-react";

const Discounts = () => {
  return (
    <div>
      <section className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-12 bg-red-400/50 bg-white px-3 py-24 text-primary-content">
        <PageTitle className="relative">Incentives and Discounts</PageTitle>
        <PageSection className="relative px-4 text-lg md:px-6">
          <p className="mb-4">
            Unlock exclusive perks and savings by joining the Mindful Body
            Massage community! Enjoy discounted rates on every massage, share
            discounts with friends and family, and receive $15 off when you
            refer a friend.
          </p>
        </PageSection>
        <PageSection className="flex items-center gap-6">
          <DollarCircleSolid className="h-96 w-96 -rotate-45 text-primary" />
          <div className="relative flex max-w-md flex-col items-center gap-12">
            <h3 className="text-center text-4xl">
              How do I unlock these perks?
            </h3>
            <div className="flex w-full flex-wrap justify-center gap-3">
              <Link
                href="#member"
                className="btn btn-outline w-full max-w-xs bg-accent-focus text-accent-content"
              >
                Become a Member
              </Link>
              <Link
                href="#refer"
                className="btn btn-outline w-full max-w-xs bg-info text-info-content"
              >
                Refer a Friend
              </Link>
            </div>
          </div>
        </PageSection>
      </section>
      <hr className="mx-auto max-w-7xl border-primary" />
      <section
        id="member"
        className="mx-auto flex w-full max-w-7xl flex-col items-center px-3 py-24 text-lg font-semibold"
      >
        <h2 className="font-gabriela text-3xl">
          Become a Mindful Body Massage Member!
        </h2>
        <p className="my-8 max-w-lg text-start sm:text-center">
          Becoming a Mindful Body Massage member is easy and free! No membership
          fees or contracts. To become a monthly massage member:
        </p>
        <ol className="ml-8 max-w-lg list-outside list-decimal space-y-3 text-base">
          <li>
            Give The Mindful Body Massage your email to stay up to date about
            specials, discounts, and flash deals. If you are already a current
            client, make sure we have your correct email in our files.
          </li>
          <li>
            Leave The Mindful Body Massage an honest online review on{" "}
            <a
              href="https://www.google.com/search?q=the+mindful+body+massage#lrd=0x874d85c694656bbd:0x678f891cb33e3e3e,1,,,,"
              target="_blank"
              rel="noopener"
              className="link-info underline"
            >
              Google
            </a>{" "}
            or{" "}
            <a
              href="https://booksy.com/en-us/dl/show-business/1042065"
              target="_blank"
              rel="noopener"
              className="link-info underline"
            >
              Booksy
            </a>
            .
          </li>
          <li>
            Let us know when you’ve left the review so we can notate in your
            client file that you are now a monthly member!
          </li>
          <li>
            Schedule at least one massage per month to maintain membership.
          </li>
          <li>Enjoy your discounted rate on every massage you schedule!</li>
        </ol>
        <i className="mt-4 text-sm text-gray-500">
          *not applicable on 30min services*
        </i>
        <MemberFaq />
      </section>
      <hr className="mx-auto max-w-7xl border-primary" />
      <section
        id="refer"
        className="mx-auto flex w-full max-w-7xl flex-col items-center px-3 py-24 text-lg font-semibold"
      >
        <h2 className="font-gabriela text-3xl">Refer A Friend!</h2>
        <p className="my-8 max-w-lg text-start sm:text-center">
          You can enjoy $15 off of a 60, 90, or 120 minute massage service when
          you refer a friend to The Mindful Body Massage!
        </p>
        <ReferFaq />
        <i className="mt-4 text-sm text-gray-500">
          *You can only apply one Refer A Friend discount per massage.*
        </i>
      </section>
    </div>
  );
};

export default Discounts;
