"use client"
import Image from 'next/image';
import Plus from '../../public/assets/Plus.svg';
import * as Accordion from "@radix-ui/react-accordion"

const items = [
  {
    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illum. Molestiae,",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illum. Molestiae,",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illum. Molestiae,",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illum. Molestiae,",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illum. Molestiae,",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illum. Molestiae,",
  },
];

const Faq = () => {
  return (
    <div className="flex flex-col w-full py-[48px] lg:py-[60px] lg:flex-row lg:gap-x-6">
      <div className='w-1/3 lg:py-[32px] lg:pr-[56px]'>
        <h3 className="text-[#eb2891] font-medium text-[14px] lg:text-base">
          Frequently Asked Questions
        </h3>
        <h1 className="py-4 text-2xl font-medium text-[#172026] lg:text-[42px] leading-[58px]">
          Lets clarify some of your questions
        </h1>
        <p className="pb-[24px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
          illum. Molestiae,
        </p>
      </div>
      <div className='lg:w-2/3'>
        <Accordion.Root
          type="single"
          defaultValue="item-1"
          collapsible
          className="flex flex-col gap-y-4"
        >
          {items.map((items, index) => (
            <div key={index}>
              <Accordion.Item
                value={`item-${index + 1}`}
                className="bg-[#e3f1ff] p-[16px] rounded-[8px] "
              >
                <Accordion.Header>
                    <Accordion.Trigger className="flex w-full items-center justify-between">
                        <p className="text-left font-medium text-[#172026] lg:text-[18px]">{items.question}</p>
                        <span>
                            <Image src={Plus} alt='Plus' className='h-10 w-10 lg:w-6 lg:h-6' />
                        </span>
                    </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content>
                    <p className="pt-2 text-[#36485c]">{items.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            </div>
          ))}
        </Accordion.Root>
      </div>
    </div>
  );
};

export default Faq;
