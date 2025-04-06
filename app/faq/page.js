"use client";
import React from "react";

const faqs = [
  {
    question: "How do I book a PG through PGBuddy?",
    answer:
      "Simply browse the available PGs, click on 'Book Now', and follow the instructions. You need to be logged in to proceed with a booking.",
  },
  {
    question: "Is it free to use PGBuddy?",
    answer:
      "Yes! Browsing and exploring PG listings is completely free. You only pay the rent to the PG owner if you decide to book.",
  },
  {
    question: "Can I contact the PG owner before booking?",
    answer:
      "Absolutely. Each PG listing includes owner contact details so you can ask questions before making a decision.",
  },
  {
    question: "How can I list my PG on PGBuddy?",
    answer:
      "If you're a PG owner, just sign up and use the 'List your PG' feature from your dashboard to submit your PG details.",
  },
  {
    question: "Is there a verification process for PGs?",
    answer:
      "Yes. We verify basic details before allowing listings to go live, ensuring a safer experience for users.",
  },
];

const FAQPage = () => {
  return (
    <section className="min-h-screen px-4 py-16 bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-orange-500">Frequently Asked Questions</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-12">
          Here are some of the most common questions about using PGBuddy.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm p-5">
            <details className="group cursor-pointer">
              <summary className="flex justify-between items-center font-medium text-lg text-gray-800 dark:text-white">
                <span>{faq.question}</span>
                <svg
                  className="w-5 h-5 text-orange-500 transition-transform duration-300 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{faq.answer}</p>
            </details>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQPage;
