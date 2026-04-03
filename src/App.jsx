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

const accordions = [
   {
      btn: 'MLB',
      content: 'Major League Baseball',
      id: 'accordion-mlb',
      startOpen: false
   },
   {
      btn: 'NBA',
      content: 'National Basketball Association',
      id: 'accordion-nba',
      startOpen: true
   },
   {
      btn: 'NLF',
      content: 'National Football League',
      id: 'accordion-nfl',
      startOpen: false
   }      
];

function App() {
   return <Accordions accordions={accordions} />;
};

function Accordions({accordions}) {
   const [accordionIds, setAccordionsIds] = useState(() => {
      let isOpenIds = [];
      accordions.map(accordion => {
         if(accordion.startOpen) {
            isOpenIds.push(accordion.id);
         }
      });
      return isOpenIds;
   });
   const handlerAccordionIds = accordionId => {
      setAccordionsIds(prevIds => {
         if(prevIds.includes(accordionId)) {
            return prevIds.filter(id => id !== accordionId);
         } else {
            return [...prevIds, accordionId];
         }
      });
   };

   return (
      <div>
         {accordions.map(accordion => {
            const isOpen = accordionIds.includes(accordion.id);

            return (
               <div key={accordion.id}>
                  <AccordionBtn accordion={accordion} handlerAccordionIds={() => handlerAccordionIds(accordion.id)} isOpen={isOpen} />
                  <AccordionContent accordion={accordion} isOpen={isOpen} />
               </div>
            );
      })}
      </div>
   );
}

function AccordionBtn({accordion, handlerAccordionIds, isOpen}) {
   return <button id={`${accordion.id}-btn`} onClick={handlerAccordionIds} aria-expanded={isOpen} aria-controls={`${accordion.id}-content`}>{accordion.btn} {isOpen ? '-' : '+'}</button>;
}

function AccordionContent({accordion, isOpen}) {
   if(!isOpen) return null;

   return (
      <div id={`${accordion.id}-content`} aria-labelledby={`${accordion.id}-btn`}>
         {accordion.content}
      </div>
   );
}

export default App;