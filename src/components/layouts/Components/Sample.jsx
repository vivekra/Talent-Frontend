// import React from "react";
// import {
//   Accordion,
//   AccordionHeader,
//   AccordionBody,
// } from "@material-tailwind/react";
 
// function Icon({ id, open }) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth={2}
//       stroke="currentColor"
//       className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
//     </svg>
//   );
// }
 

 
// export function ComplexNavbar() {
//  // profile menu component

//  const [open, setOpen] = React.useState(0);
 
//   const handleOpen = (value) => setOpen(open === value ? 0 : value);
 

//   const QustionAns = [
//     {
//       qustion:'Is 15 days risk-free trial period completely free?',
//       answer:' Yes, it\'s completely free. We allow this free time period to evaluate the code quality, communication, on-time delivery, Agile software development  process, and more of the hired trial resource. If you get satisfactory work, you can continue with the engagement; if the output  isn\'t desired, we will assign one more resource whose skills match your requirement. If nothing of this either works, then you may right away cancel the engagement.'
//     },
//     {
//       qustion:'What are the different engagement models you have? ',
//       answer:''
//     },
//     {
//       qustion:'',
//       answer:''
//     },
//     {
//       qustion:'',
//       answer:''
//     },
//     {
//       qustion:'',
//       answer:''
//     },
//     {
//       qustion:'',
//       answer:''
//     },
//     {
//       qustion:'',
//       answer:''
//     },
//     {
//       qustion:'',
//       answer:''
//     },
//     {
//       qustion:'',
//       answer:''
//     },
//     {
//       qustion:'',
//       answer:''
//     },
//     {
//       qustion:'',
//       answer:''
//     },
//     {
//       qustion:'',
//       answer:''
//     },
//   ]

 
//   return (

//     <>
//     <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
//       <AccordionHeader onClick={() => handleOpen(1)}>Is 15 days risk-free trial period completely free?</AccordionHeader>
//       <AccordionBody>
//       Yes, it's completely free. We allow this free time period to evaluate
// the code quality, communication, on-time delivery, Agile software development
// process, and more of the hired trial resource.
// If you get satisfactory work, you can continue with the engagement; if the output
// isn't desired, we will assign one more resource whose skills match your requirement.
// If nothing of this either works, then you may right away cancel the engagement.
//       </AccordionBody>
//     </Accordion>
//     <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
//       <AccordionHeader onClick={() => handleOpen(2)}>
//         How to use Material Tailwind?
//       </AccordionHeader>
//       <AccordionBody>
//         We&apos;re not always in the position that we want to be at. We&apos;re constantly
//         growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
//         ourselves and actualize our dreams.
//       </AccordionBody>
//     </Accordion>
//     <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
//       <AccordionHeader onClick={() => handleOpen(3)}>
//         What can I do with Material Tailwind?
//       </AccordionHeader>
//       <AccordionBody>
//         We&apos;re not always in the position that we want to be at. We&apos;re constantly
//         growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
//         ourselves and actualize our dreams.
//       </AccordionBody>
//     </Accordion>
//   </>
//   );
// }

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
 
export function ComplexNavbar() {
  return (
    <Card className="mt-6 w-96 pt-5">
      <CardBody>
      <div className="position-relative">
<img alt="one" src="images/01.png" className="position-absolute start-0 translate-middle resons-box" data-pagespeed-url-hash="954211764" onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
</div>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography>
          Because it&apos;s about motivating the doers. Because I&apos;m here to
          follow my dreams and inspire others.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0" style={{backgroundColor:"#EEA323"}}>
        <a href="#" className="inline-block">
          <Button size="sm" variant="text" className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}