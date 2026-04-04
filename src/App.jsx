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
import accordions from './api/accordions';
import { Accordions } from './Accordions';

export default function App() {
   return <Accordions accordions={accordions} />;
}