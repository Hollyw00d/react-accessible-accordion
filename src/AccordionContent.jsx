export default function AccordionContent({accordion, isOpen}) {
   if(!isOpen) return null;

   return (
      <div id={`${accordion.id}-content`} aria-labelledby={`${accordion.id}-btn`}>
         {accordion.content}
      </div>
   );
}