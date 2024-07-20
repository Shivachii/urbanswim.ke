import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function Standard() {
  const defaultContent =
  'We offer a wide range of swimwear including bikinis, one-pieces, tankinis, swim trunks, and cover-ups for both men and women.'
    const defaultContent1 =
    'Our swimwear comes in a variety of sizes ranging from XS to XXL to cater to different body types. Please refer to our size guide for specific measurements.'
    const defaultContent2 =
    'To prolong the life of your swimwear, rinse it in cold water after each use and lay flat to dry. Avoid using harsh detergents, bleach, and ironing the swimwear.'
    const defaultContent3 =
    'You can reach our customer service team via call at +254 700 123 456. Our customer service hours are Monday to Friday, 9 AM to 5 PM EAT.'
    const defaultContent4 =
    'Yes, we offer gift cards in various denominations. They can be purchased online and are perfect for gifting.'
    const defaultContent5 =
    'We frequently have discounts and promotions. Follow us on social media to stay updated on the latest offers.'
    
 
 
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
      <AccordionItem key="1" aria-label="Accordion 1" title="What types of swimwear do you offer?">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="What sizes are available?">
        {defaultContent1}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="How do I care for my swimwear?">
        {defaultContent2}
      </AccordionItem>
      <AccordionItem key="4" aria-label="Accordion 3" title="How can I contact customer service?">
        {defaultContent3}
      </AccordionItem>
      <AccordionItem key="5" aria-label="Accordion 3" title="Do you offer gift cards?">
        {defaultContent4}
      </AccordionItem>
      <AccordionItem key="6" aria-label="Accordion 3" title="Do you offer any discounts or promotions">
        {defaultContent5}
      </AccordionItem>
    </Accordion>
  );
}
