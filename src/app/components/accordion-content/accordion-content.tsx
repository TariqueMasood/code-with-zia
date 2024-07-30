import type { NextPage } from "next";
import Accordion from "../accordion/accordion";
import styles from "./accordion-content.module.css";

const AccordionContent: NextPage = () => {
  const accordionItems = [
    {
      title: "How should I prepare for this masterclass?",
      content: (
        <p>
          You just need a stable internet connection, a pen, a paper and curious
          mind to imbibe-impliment-improve your skill set and mindset.
        </p>
      ),
    },
    {
      title: "Is this master class intractive or only one-sided?",
      content: (
        <p>
          This online masterclass is highly intractive! You will not only enjoy
          live video and audio but also intract with the trainer in 5 different
          ways: 1. Whenever you have a doubt click on the &lsquo;raise
          hand&lsquo; icon so that the trainer addresses your doubt. 2. You can
          write comments which are visible to other participants. 3. You can
          also write comments privately to the trainer. 4. You can participate
          in poll and also enjoy access to poll report instantly. 5. If you wish
          to speak during the training , you can ask your trainer to un-mute you
          (Preferred during LIVE FAQ session).
        </p>
      ),
    },
    {
      title: "What if I am not able to attend the live masterclass?",
      content: (
        <p>
          You may write to us at edu@techtip24.com, to get a replay of the
          training.
        </p>
      ),
    },
    {
      title: " Who will conduct the masterclass?",
      content: (
        <p>
          This live masterclass will be conducted by Ms. Aditi Gupta. Know more
          about the trainer from &lsquo;Know Your Trainer&lsquo; section.
        </p>
      ),
    },
    {
      title: "How will I join the online masterclass?",
      content: (
        <p>
          Post-booking you will receive a confirmation email within 1 Hour.
          Please check your junk/spam/promotions. The Zoom link would be shared
          1 hour before the Masterclass via e-mail and the exclusive WhatsApp
          group.
        </p>
      ),
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <h1 className={styles.title}>
          Frequently Asked <span>Questions</span>
        </h1>
        <h3 className={styles.subTitle}>
          I’ve tried my best to answer all frequently asked questions. For
          further queries, please WhatsApp me on +91 1234567890 . My amazing
          support team will reply within 8 working hours.
        </h3>
        <div className={styles.accordion}>
          <Accordion items={accordionItems} />
        </div>
      </div>
    </div>
  );
};

export default AccordionContent;
