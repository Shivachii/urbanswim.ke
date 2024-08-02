'use client'
import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function Returns() {
  const defaultContent =
    'We happily accept returns in original condition (unused, unworn, and unaltered) with tags and liners attached for either a refund, store credit, or a one time exchange. All return requests must be made within 14 days after the date of delivery.'
 const defaultContent1 =
 'This policy applies to any location outside of Kenya. We happily accept returns in original condition (unused, unworn, and unaltered) with tags attached for a refund back to the original payment method for the item returned. We do not offer exchanges for international purchases. We do not refund back shipping, taxes, or duties and we do not cover the return postage fees. '
 const defaultContent2 =
 'Send your receipt as proof of payment to either our Whatsapp number or Sms : + 254 712 785 836'
 
 
 
 return (
    <Accordion
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            height: "auto",
            transition: {
              height: {
                type: "spring",
                stiffness: 500,
                damping: 30,
                duration: 1,
              },
              opacity: {
                easings: "ease",
                duration: 1,
              },
            },
          },
          exit: {
            y: -10,
            opacity: 0,
            height: 0,
            transition: {
              height: {
                easings: "ease",
                duration: 0.25,
              },
              opacity: {
                easings: "ease",
                duration: 0.3,
              },
            },
          },
        },
      }}
    >
      <AccordionItem key="1" aria-label="Accordion 1" title="What is your return policy?" >
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="I am outside Kenya what is the return policy?">
        {defaultContent1}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="How do I start my return process?">
        {defaultContent2}
      </AccordionItem>
    </Accordion>
  );
}
