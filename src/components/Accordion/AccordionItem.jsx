import { useAccordionContext } from "./Accordion";

export default function AccordionItem({ id, title, children, className }) {
    // getting the context from Accordion context set up in Accordion.jsx
    const { openItemId, toggleItem } = useAccordionContext();
    // getting boolean based on id and context
    const isOpen = openItemId === id

    return (
        <li className={className}>
            <h3 onClick={() => toggleItem(id)}>{title}</h3>
            <div className={isOpen ? 'accordion-item-content open' : 'accordion-item-content'}>{children}</div>
        </li>
    );
}