"use client"
import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; 


const FAQ = () => {
  const faqData = [
    {
      question: "Why should I buy online?",
      answer: "Online shopping offers a wide range of products from multiple brands, sizes, colors, and prices. You can compare prices across various websites, get free shipping, and benefit from cashback offers, saving both time and money."
    },
    {
      question: "Why should I subscribe to a deals website?",
      answer: "Deals websites track the best offers across multiple online shopping retailers, saving you the time and effort of searching through individual shopping websites to find the best available deals."
    },
    {
      question: "Why should I subscribe to the deals notification?",
      answer: "Deals notifications ensure you get notified as soon as we track a deal. Loot deals often don't last long and can be gone within minutes to an hour. Subscribing to notifications helps you avoid missing out on great deals."
    },
    {
      question: "What is the quickest way to get best deals notifications?",
      answer: "You can download our Android app to get the best deal notifications quickly. Our iOS app is coming soon."
    },
    {
      question: "Why should I follow Savehub over other deals' websites?",
      answer: "At Savehub, we focus on providing high-quality deals rather than a large quantity. We respect customer privacy, often provide freebies to our subscribers, and strive to deliver deals as quickly as possible since good deals don't last long."
    },
    {
      question: "When is the best time to shop online?",
      answer: "The best time to shop online is during sales and promotions. Online shopping websites provide the best offers and deals on products during these times. Generally, discounts are higher during festivals and special events."
    }
  ];

  return (
    <div className='text-white flex items-center justify-center pt-10 flex-col'>
      <div className='text-3xl underline mt-16 mb-10'>
        Frequently Asked Questions
      </div>
      <div className='w-full max-w-3xl'>
        {faqData.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}a-content`}
              id={`panel${index}a-header`}
            >
              <Typography>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FAQ;