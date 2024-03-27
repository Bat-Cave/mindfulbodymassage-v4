"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/UI/accordion";

const MemberFaq = () => {
  return (
    <div className="mt-16">
      <h3 className="font-gabriela text-xl">Membership F.A.Q.</h3>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What happens if I miss a month?</AccordionTrigger>
          <AccordionContent>
            <p>
              If you missed scheduling your monthly massage and want to regain
              your membership, you will pay full price the next time you
              schedule, but will be able to enjoy the discounted rate again if
              you continue scheduling monthly.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Can I share my discounted rate with friends or family?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Yes! If you are unable to attend your monthly massage, you can
              give your appointment with the discounted rate to a friend or
              family member in order to maintain your membership.
            </p>
            <p>
              You also receive one discounted massage per month to give to a
              friend or family member. When you want to take advantage of this
              perk, we ask that you reach out to let us know the name of the
              person wanting to use the discounted rate, so we can note the
              discount on their appointment when they schedule.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            How many massages can I schedule per month with the discounted rate?
          </AccordionTrigger>
          <AccordionContent>
            <p>As many as you want, as long as it&apos;s for you!</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            If I am unable to attend my monthly massage, can I still have a
            friend or family member take my place as well as still give my one
            additional discounted massage to a friend or family member?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Yes. We just ask that you, the membership holder, communicate and
              confirm with us who will be scheduling for those massages, so we
              can make a note on their appointment file that their discounted
              rates are under your membership. Without proper communication from
              you, the membership holder, we will not be able to confirm or
              honor the discounted rates.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default MemberFaq;
