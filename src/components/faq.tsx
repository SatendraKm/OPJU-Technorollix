import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "What is Technorollix, and how can I participate?",
    answer:
      "Technorollix is an annual tech and cultural fest. You can register online via our website to participate in events.",
  },
  {
    question:
      "How can companies or brands collaborate as sponsors, and what benefits do they get?",
    answer:
      "College students with a valid email can register. External students need to pay for entry.",
  },
  {
    question:
      "What events and competitions are available, and how do I register?",
    answer:
      "Visit the website, sign in with your college email, and select your events.",
  },
  {
    question:
      "Where can I find event schedules, updates, and whom should I contact for queries?",
    answer: "Yes! Winners receive certificates and cash prizes.",
  },
  {
    question:
      "Are there any facilities for outstation participants, such as accommodation and food?",
    answer: "Yes, you can register for multiple events based on availability.",
  },
  {
    question: "Can I attend the fest without participating in any events?",
    answer:
      "Check the website for the latest updates on registration deadlines.",
  },
];

const FAQAccordion = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-7xl mx-auto">
      {faqData.map((faq, index) => (
        <Accordion key={index} type="single" collapsible>
          <AccordionItem value={`item-${index}`}>
            <div className="">
              <AccordionTrigger className="flex p-3 items-center justify-between text-[#ABA9B3] text-lg font-medium w-full md:w-[566px] h-[122px] bg-gradient-to-b from-[#4f0000] rounded-2xl shadow-[0px_11px_12.5px_0px_rgba(7,10,23,0.25)] group-data-[state=open]:bg-slate-500">
                <span>{faq.question}</span>
                <span className="transition-transform duration-300">
                  <Plus className="w-5 h-5 group-data-[state=open]:hidden" />
                  <Minus className="w-5 h-5 hidden group-data-[state=open]:block" />
                </span>
              </AccordionTrigger>
              <AccordionContent className="p-3 w-full text-white text-lg font-normal font-['DM Sans'] leading-[30px] bg-gradient-to-t from-[#4f0000]">
                {faq.answer}
              </AccordionContent>
            </div>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

export default FAQAccordion;