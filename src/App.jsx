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

const input = [
  {
    accordionBtn: 'Button 1',
    accordionContent: 'Content 1',
    accordionId: 'accordion-1'
  },
  {
    accordionBtn: 'Button 2',
    accordionContent: 'Content 2',
    accordionId: 'accordion-2'
  },
  {
    accordionBtn: 'Button 3',
    accordionContent: 'Content 3',
    accordionId: 'accordion-3'
  }    
];

const hide = {
  display: 'none'
};

const show = {
  display: 'block'
};

function Accordions() {
  const [openAccordionIds, setOpenAccordionIds] = useState([]);

  const openAccordionIdsHandler = (e) => {
    const currentId = e.currentTarget.id;
    setOpenAccordionIds(prevIds => {
      if(prevIds.includes(currentId)) {
        return prevIds.filter(id => id !== currentId);
      } else {
        return [...prevIds, currentId];
      }
    });
  };

  return (
    <div>
      {input.map(accordion => (
        <div key={accordion.accordionId}>          
          <AccordionBtn accordion={accordion} openAccordionIdsHandler={openAccordionIdsHandler} openAccordionIds={openAccordionIds} />
          <AccordionContent accordion={accordion} openAccordionIds={openAccordionIds} />
        </div>
      ))}
    </div>
  );
}

function AccordionBtn({accordion, openAccordionIdsHandler, openAccordionIds}) {
  return (
    <div>
      <button id={accordion.accordionId} aria-expanded={openAccordionIds.includes(accordion.accordionId) ? 'true' : 'false'} onClick={openAccordionIdsHandler}>{accordion.accordionBtn} {openAccordionIds.includes(accordion.accordionId) ? '-' : '+'}</button>
    </div>
  );
}

function AccordionContent({accordion, openAccordionIds}) {
  return (
    <div aria-labelledby={accordion.accordionId} style={openAccordionIds.includes(accordion.accordionId) ? show : hide}>
      {accordion.accordionContent}
    </div>
  ); 
}

export default Accordions;