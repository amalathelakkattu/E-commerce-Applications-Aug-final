import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

export const Jobs = () => {
  // Get current theme
  const { theme } = useSelector((state) => state.theme);

  return (
    <Container fluid className="p-5">
      <div className="text-white d-flex justify-content-center align-items-center my-5 flex-column gap-2 flex-wrap">
        <div className="my-5">
          <h1
            className={
              theme ? "text-center text-black" : "text-white text-center"
            }
          >
            Careers at ElectroHub
          </h1>
        </div>
        <div className={theme ? "text-center text-black" : "text-center"}>
          <p>
            Join our team at <strong>ElectroHub</strong> – a dynamic, fast-growing 
            tech store specializing in Mobiles, Laptops, iPods, Watches, and Accessories. 
            We are always looking for talented, passionate individuals who want to 
            make a real impact and help us deliver an exceptional shopping experience. 
            If you are eager to grow your career in a technology-driven environment, 
            ElectroHub is the place for you! <br /><br />
            
            <strong>Current Job Openings:</strong> <br /><br />
            
            <strong>1. Software Developer</strong> <br />
            As a Software Developer, you will work with our tech team to build and 
            maintain the ElectroHub web platform, ensuring smooth user experiences 
            and implementing new features. <br />
            <strong>Responsibilities:</strong>
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li>Develop and maintain web applications using React and Node.js</li>
              <li>Collaborate with cross-functional teams to deliver new features</li>
              <li>Optimize performance and ensure platform security</li>
              <li>Write clean, maintainable, and scalable code</li>
            </ul>
            <strong>Requirements:</strong>
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li>Experience with React, Node.js, and web development</li>
              <li>Strong understanding of APIs and databases</li>
              <li>Excellent problem-solving and communication skills</li>
            </ul>
            <br />
            
            <strong>2. Customer Support Representative</strong> <br />
            As a Customer Support Representative, you will be the first point of 
            contact for our customers. You will assist with inquiries, resolve 
            issues, and ensure customer satisfaction. <br />
            <strong>Responsibilities:</strong>
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li>Provide excellent customer service through multiple channels</li>
              <li>Resolve product-related inquiries and technical issues</li>
              <li>Assist customers with order tracking and returns</li>
              <li>Maintain accurate customer records and update account details</li>
            </ul>
            <strong>Requirements:</strong>
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li>Excellent communication and interpersonal skills</li>
              <li>Experience in customer service is a plus</li>
              <li>Ability to work in a fast-paced retail environment</li>
            </ul>
            <br />
            
            <strong>How to Apply:</strong> <br />
            Interested in joining ElectroHub? Please send your resume and cover letter 
            to <a href="mailto:electro.95hub@gmail.com">electro.95hub@gmail.com</a>. 
            We look forward to reviewing your application and welcoming you to our team! <br /><br />
            
            Thank you for considering a career with <strong>ElectroHub</strong>. 
            We can’t wait to see how your skills and passion will contribute to our success!
          </p>
        </div>
      </div>
    </Container>
  );
};











































// import { Container } from "react-bootstrap";
// import { useSelector } from "react-redux";

// export const Jobs = () => {
//   // Get current theme
//   const { theme } = useSelector((state) => state.theme);

//   return (
//     <Container fluid className="p-5">
//       <div className="text-white d-flex justify-content-center align-items-center my-5 flex-column gap-2 flex-wrap">
//         <div className="my-5">
//           <h1
//             className={
//               theme ? "text-center text-black" : "text-white text-center"
//             }
//           >
//             Careers at stOre
//           </h1>
//         </div>
//         <div className={theme ? "text-center text-black" : "text-center"}>
//           <p>
//             Join our team at <strong>stOre</strong> – an exciting, fast-paced
//             company bringing the latest Apple products to customers worldwide.
//             We are always looking for talented, passionate individuals to help
//             us grow and continue delivering an exceptional shopping experience.
//             If you're looking for a place where your skills and ideas will make
//             a real impact, stOre is the right place for you! <br /> <br />
//             <strong>Current Job Openings:</strong> <br /> <br />
//             <strong>1. Software Developer</strong> <br />
//             As a Software Developer, you will work with our development team to
//             build and maintain the stOre web platform, ensuring seamless user
//             experiences and implementing new features. <br />
//             <strong>Responsibilities:</strong>
//             <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
//               <li>
//                 Develop and maintain web applications using React and Node.js
//               </li>
//               <li>
//                 Collaborate with cross-functional teams to deliver new features
//               </li>
//               <li>Optimize performance and ensure security</li>
//               <li>Write clean, maintainable code</li>
//             </ul>
//             <strong>Requirements:</strong>
//             <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
//               <li>Experience with React, Node.js, and web development</li>
//               <li>Strong understanding of APIs and databases</li>
//               <li>Excellent problem-solving and communication skills</li>
//             </ul>
//             <br />
//             <strong>2. Customer Support Representative</strong> <br />
//             As a Customer Support Representative, you will be the first point of
//             contact for our customers. You will assist with inquiries, resolve
//             issues, and ensure customer satisfaction. <br />
//             <strong>Responsibilities:</strong>
//             <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
//               <li>
//                 Provide excellent customer service through various channels
//               </li>
//               <li>Resolve product-related inquiries and technical issues</li>
//               <li>Assist customers with order tracking and returns</li>
//               <li>Maintain customer records and update account details</li>
//             </ul>
//             <strong>Requirements:</strong>
//             <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
//               <li>Excellent communication and interpersonal skills</li>
//               <li>Experience in customer service is a plus</li>
//               <li>Ability to work in a fast-paced environment</li>
//             </ul>
//             <br />
//             <strong>How to Apply:</strong> <br />
//             If you are interested in applying for any of the positions listed
//             above, please send your resume and cover letter to{" "}
//             <a href="mailto:careers@store.com">careers@store.com</a>. We look
//             forward to hearing from you! <br /> <br />
//             Thank you for considering a career with stOre. We can't wait to see
//             how you can contribute to our team's success!
//           </p>
//         </div>
//       </div>
//     </Container>
//   );
// };
