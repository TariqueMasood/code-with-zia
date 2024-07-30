"use client";
import React, { useState, useRef, useEffect } from "react";

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  onToggle,
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number | "auto">("auto");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div style={{ overflow: "hidden", transition: "all 0.3s ease" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          background: "#eee",
          borderBottom: "1px solid #ddd",
          cursor: "pointer",
        }}
        onClick={onToggle}
      >
        <span style={{ fontSize: "16px", fontWeight: "bold" }}>{title}</span>
        <span style={{ fontSize: "16px", fontWeight: "bold" }}>
          {isOpen ? "−" : "+"}
        </span>
      </div>
      <div
        ref={contentRef}
        style={{
          height: height === "auto" ? "auto" : `${height}px`,
          opacity: isOpen ? 1 : 0,
          overflow: "hidden",
          transition: "height 0.3s ease, opacity 0.3s ease",
          background: "#f9f9f9",
          // padding: "10px",
        }}
      >
        {content}
      </div>
    </div>
  );
};

interface AccordionProps {
  items: { title: string; content: React.ReactNode }[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
