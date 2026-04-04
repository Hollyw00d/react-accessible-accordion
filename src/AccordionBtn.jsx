export default function AccordionBtn({accordion, handlerAccordionIds, isOpen}) {
   return <button id={`${accordion.id}-btn`} onClick={handlerAccordionIds} aria-expanded={isOpen} aria-controls={`${accordion.id}-content`}>{accordion.btn} {isOpen ? '-' : '+'}</button>;
}