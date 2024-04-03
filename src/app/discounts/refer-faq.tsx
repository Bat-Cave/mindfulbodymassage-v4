"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/UI/accordion";

const ReferFaq = () => {
  return (
    <div className="mt-16">
      <h3 className="font-gabriela text-xl">Refer A Friend F.A.Q.</h3>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            If I am a Mindful Body Massage member, can I use the referral
            discount on my monthly massage even though it’s already discounted?
          </AccordionTrigger>
          <AccordionContent>
            <p>Yes you can!</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            If I am a MIndful Body Massage member, can the friends or family
            using my additional once a month discounted massage rate, count as
            my referred friend?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              No. In order for you to get the Refer A Friend discount, your
              referral has to schedule, attend, and pay for a full price
              massage.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Can someone taking my place for my discounted monthly massage to
            retain my membership be counted as a referral?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              No. In order to get the Refer A Friend discount, your referral has
              to schedule, attend and pay for a full price massage.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            How do I know if I got the referral discount?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              When your referral comes into their appointment, they must put
              down your name on their intake paperwork so I know who to give the
              referral discount too. After your referrals’ massage, I will note
              in your client account that you have $15 off your next massage.
              You will also receive text or email confirmation to let you know
              you have received the Refer A Friend discount for your next
              massage.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ReferFaq;
