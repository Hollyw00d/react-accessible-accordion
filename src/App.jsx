/*
Accordion

Build an accordion component that a displays a list of vertically stacked sections with each containing a title and content snippet

Steps:
1. Clarify requirements (5 min)
   Mental model:
   Work backwards from the customer (user) such as:
   1. Responsiveness
   2. Browser support
   3. What do I need to know for the input or output
   4. How do I manage the state and recommend "controlled" state
      1. PERSONAL THOUGHT: Will I need local storage

Plan:
1. Input will be whatever I want it to be (and include the key)

2. Will include an `input` variable that has the accordion content

3. Components:
   1. Accordions
   2. AccordionBtn
   3. AccordionContent
*/
import {useState} from 'react';

const accordionInput = [
   {
      btn: 'Button 1',
      content: 'Content 1',
      id: 'accordion-1'
   },
   {
      btn: 'Button 2',
      content: 'Content 2',
      id: 'accordion-2'
   },
   {
      btn: 'Button 3',
      content: 'Content 3',
      id: 'accordion-3'
   }      
];

const hide = {
   display: 'none'
};

function Accordions() {
   const [accordionIds, setAccordionsIds] = useState([]);
   const accordionIdsHandler = e => {
      const currentId = e.currentTarget.id;
      setAccordionsIds(prevIds => {
         if(prevIds.includes(currentId)) {
            return prevIds.filter(id => id !== currentId);
         } else {
            return [...prevIds, currentId];
         }
      });
   };

   return (
      <div>
         {accordionInput.map(accordion => {
            const isOpen = accordionIds.includes(accordion.id);

            return (
               <div key={accordion.id}>
                  <AccordionBtn accordion={accordion} accordionIdsHandler={accordionIdsHandler} isOpen={isOpen} />
                  <AccordionContent accordion={accordion} isOpen={isOpen} />
               </div>
            );
      })}
      </div>
   );
}

function AccordionBtn({accordion, accordionIdsHandler, isOpen}) {
   return <button id={accordion.id} onClick={accordionIdsHandler} aria-expanded={isOpen ? 'true': 'false'}>{accordion.btn} {isOpen ? '-' : '+'}</button>;
}

function AccordionContent({accordion, isOpen}) {
   return (
      <div aria-labelledby={accordion.id} style={isOpen ? {} : hide}>
         {accordion.content}
      </div>
   );
}

export default Accordions;