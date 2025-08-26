import { createContext, useContext, useState } from "react";
import AccordionItem from "./AccordionItem";
import AccordionTitle from "./AccordionTitle";
import AccordionContent from "./AccordionContent";
// creating the context item
const AccordionContext = createContext();

// custom hook to provide the context
export function useAccordionContext() {
    const ctx = useContext(AccordionContext)

    if (!ctx) {
        throw new Error('Accordion related components must be wrapped by <Accordion />')
    }

    return ctx;
}

export default function Accordion({ children, className }) {
    const [ openItemId, setOpenItemId ] = useState();
    
    function toggleItem(id){
        setOpenItemId(prevId => prevId === id ? null : id)
    }
    
    // setting the context value to be put as the value for the provider
    const contextValue = {
        openItemId,
        toggleItem
    }

    return (
        <AccordionContext.Provider value={contextValue}>
            <ul className={className}>
                {children}
            </ul>
        </AccordionContext.Provider>
    );
}

// stating that the Accordion below items are compounded with the Accordion
Accordion.Item = AccordionItem
Accordion.Title = AccordionTitle
Accordion.Content = AccordionContent