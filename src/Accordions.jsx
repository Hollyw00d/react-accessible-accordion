import {useState} from 'react';
import AccordionBtn from './AccordionBtn';
import AccordionContent from './AccordionContent';

export function Accordions({accordions}) {
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