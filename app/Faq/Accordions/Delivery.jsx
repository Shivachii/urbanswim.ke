import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function Delivery() {
  const defaultContent =
  'We dispatch orders daily and delivery is always at most a day after placing an order for drop offs within Nairobi for those outside Nairobi it may take 2 -3 days'
    const defaultContent1 =
    'We use our riders and other courier services like pickup mtaani so charges may vary depending on your drop off location'
    const defaultContent2 =
    'We deliver countrywide and can facilitate delivery for those outside Kenya, terms and conditions apply'
    const defaultContent3 =
    'The courier will make two more attempts to deliver. If unsuccessful, you may need to collect your package from our store.'
    const defaultContent4 =
    'If your order is delayed beyond the expected delivery time, please contact our customer service for assistance.'
    const defaultContent5 =
    'Yes, you can choose to pick up your order from our store. Select the "in-store pickup" option at checkout.'
    
 
 
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
      <AccordionItem key="1" aria-label="Accordion 1" title="When will my order be fulfilled?">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="How much do you charge for deliveries?">
        {defaultContent1}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Which locations do you deliver to?">
        {defaultContent2}
      </AccordionItem>
      <AccordionItem key="4" aria-label="Accordion 3" title="What happens if I'm not home when the delivery arrives?">
        {defaultContent3}
      </AccordionItem>
      <AccordionItem key="5" aria-label="Accordion 3" title="What should I do if my order is delayed?">
        {defaultContent4}
      </AccordionItem>
      <AccordionItem key="6" aria-label="Accordion 3" title="Is there an option for in-store pickup?">
        {defaultContent5}
      </AccordionItem>
    </Accordion>
  );
}
