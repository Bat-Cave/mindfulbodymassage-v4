import Link from "next/link";
import PageSection from "~/components/PageSection";
import PageTitle from "~/components/PageTitle";
import MemberFaq from "./member-faq";

const Discounts = () => {
  return (
    <div>
      <section className="mx-auto flex min-h-[calc(100vh-64px)] w-full max-w-7xl flex-col items-center gap-12 bg-red-400/50 bg-white pt-24 text-primary-content">
        <PageTitle>Incentives and Discounts</PageTitle>
        <PageSection className="px-4 text-lg md:px-6">
          <p className="mb-4">
            Unlock exclusive perks and savings by joining the Mindful Body
            Massage community! Enjoy discounted rates on every massage, share
            discounts with friends and family, and receive $15 off when you
            refer a friend.
          </p>
        </PageSection>
        <PageSection className="flex flex-col items-center gap-12">
          <h3>How can I unlock these perks?</h3>
          <div className="flex w-full justify-center gap-3">
            <Link href="#member" className="btn btn-accent w-full max-w-xs">
              Become a Member
            </Link>
            <button className="btn btn-info w-full max-w-xs">
              Refer a Friend
            </button>
          </div>
        </PageSection>
      </section>
      <section
        id="member"
        className="mx-auto flex w-full max-w-7xl flex-col items-center py-24 text-lg font-semibold"
      >
        <h2 className="font-gabriela text-3xl">
          Become a Mindful Body Massage Member!
        </h2>
        <p className="my-8 max-w-lg text-center">
          Becoming a Mindful Body Massage member is easy and free! No membership
          fees or contracts. To become a monthly massage member:
        </p>
        <ol className="ml-8 max-w-lg list-outside list-decimal space-y-3 text-base">
          <li>
            Give The Mindful Body Massage your email to stay up to date about
            specials, discounts, and flash deals. If you are already a current
            client, make sure we have your correct email in our files.
          </li>
          <li>Leave The Mindful Body Massage an honest online review.</li>
          <li>
            Let us know when you’ve left the review so we can notate in your
            client file that you are now a monthly member!
          </li>
          <li>
            Schedule at least one massage per month to maintain membership.
          </li>
          <li>
            Enjoy your discounted rate on every massage you schedule!
            <span>*not applicable on 30min services*</span>
          </li>
        </ol>
        <MemberFaq />
      </section>
    </div>
  );
};

export default Discounts;
