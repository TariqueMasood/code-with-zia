import type { NextPage } from "next";
import Accordion from "../accordion/accordion";
import styles from "./accordion-content.module.css";

const AccordionContent: NextPage = () => {
  const accordionItems = [
    {
      title: "How can I get ready for this masterclass?",
      content: (
        <p>
          &quot;All you need is a reliable internet connection, a notebook, a
          pen, and a curious mind to absorb, apply, and enhance both your skills
          and mindset.&quot;
        </p>
      ),
    },
    {
      title: "Will this masterclass be interactive or lecture-style?",
      content: (
        <p>
          This masterclass is designed to be highly interactive. Participants
          will engage with real-world exercises, ask questions, and collaborate
          on projects throughout the session, ensuring a hands-on learning
          experience instead of just a one-way lecture.
        </p>
      ),
    },
    {
      title: "What happens if I can’t attend the live masterclass?",
      content: (
        <p>
          If you&#39;re unable to attend the live session, feel free to reach
          out to us at zitechs@gmail.com to request a replay of the training
        </p>
      ),
    },
    {
      title: "Who will be leading the masterclass?",
      content: (
        <p>
          The live masterclass will be led by Mr. Tariq.A. To learn more about
          his background and expertise, please visit the &apos;Know Your
          Trainer&apos; section.
        </p>
      ),
    },
    {
      title: "How do I join the online masterclass?",
      content: (
        <p>
          After booking, you will receive a confirmation email within an hour.
          Please make sure to check your junk, spam, or promotions folder. The
          Zoom link will be sent to you one hour before the masterclass via
          email and in our exclusive WhatsApp group
        </p>
      ),
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className="container" style={{ borderRadius: "6px" }}>
        <h1 className={styles.title}>
          Frequently Asked <span>Questions</span>
        </h1>
        <h3 className={styles.subTitle}>
          I&apos;ve done my best to address all common questions. For any
          additional inquiries, feel free to WhatsApp me at +91 7338051388. My
          dedicated support team will get back to you within 8 working hours.
        </h3>
        <div className={styles.accordion}>
          <Accordion items={accordionItems} />
        </div>
      </div>
    </div>
  );
};

export default AccordionContent;
