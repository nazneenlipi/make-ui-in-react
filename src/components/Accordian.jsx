// FixedAccordion.jsx
import React, { useState, createContext, useContext } from 'react';
import { ChevronDown } from 'lucide-react';

// Context
const AccordionContext = createContext();
const useAccordionContext = () => useContext(AccordionContext);

// Accordion Component
const Accordion = ({ children, type = 'single', collapsible = false }) => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (itemId) => {
    if (type === 'single') {
      if (collapsible && openItems.includes(itemId)) {
        setOpenItems([]);
      } else {
        setOpenItems([itemId]);
      }
    } else {
      if (openItems.includes(itemId)) {
        setOpenItems(openItems.filter((item) => item !== itemId));
      } else {
        setOpenItems([...openItems, itemId]);
      }
    }
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className="space-y-2">{children}</div>
    </AccordionContext.Provider>
  );
};

// Accordion Item
const AccordionItem = ({ value, children }) => {
  const { openItems, toggleItem } = useAccordionContext();
  const isOpen = openItems.includes(value);

  return (
    <div className="border rounded-md shadow-sm">
      <AccordionTrigger value={value} isOpen={isOpen} toggleItem={toggleItem}>
        {children[0]}
      </AccordionTrigger>
      {isOpen && <AccordionContent>{children[1]}</AccordionContent>}
    </div>
  );
};

// Accordion Trigger
const AccordionTrigger = ({ value, isOpen, toggleItem, children }) => {
  return (
    <button
      className="flex items-center justify-between w-full py-3 px-4 font-semibold text-left rounded-t-md focus:outline-none"
      onClick={() => toggleItem(value)}
    >
      <span>{children}</span>
      <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
    </button>
  );
};

// Accordion Content
const AccordionContent = ({ children }) => {
  return <div className="py-3 px-4 text-gray-700">{children}</div>;
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
