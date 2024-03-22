import React, { useState } from "react";
import Style from "./Accordion.module.css";
import AccordionItem from "./components/AccordionItem";

function Accordion({ accordionData, accordionName }) {
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };
  return (
    <ul className={[Style.accordion, "w-100"].join(" ")}>
      {accordionData.map((item, index) => (
        <AccordionItem
          onToggle={() => handleToggle(index)}
          active={clicked === index}
          key={index}
          accordionItem={item}
          accordionName={accordionName}
        />
      ))}
    </ul>
  );
}

export default Accordion;
