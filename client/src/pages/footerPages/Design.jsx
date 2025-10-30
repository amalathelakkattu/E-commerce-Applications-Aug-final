import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

export const Design = () => {
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
            Design at ElectroHub
          </h1>
        </div>
        <div className={theme ? "text-center text-black" : "text-center"}>
          <p>
            At <strong>ElectroHub</strong>, we believe that great design is key to 
            delivering an exceptional shopping experience. From our website to 
            product pages, we focus on creating visually appealing, intuitive, 
            and responsive designs that make exploring Mobiles, Laptops, iPods, 
            Watches, and Accessories a delight. <br /><br />
            
            <strong>Our Design Philosophy:</strong> <br />
            We prioritize minimalism, easy navigation, and high-quality visuals 
            that reflect the premium nature of our products. Our goal is a seamless 
            shopping journey where form meets function, making it easy for customers 
            to find and explore the technology they love. <br /><br />
            
            <strong>Design Process:</strong> <br />
            Our design process is collaborative, iterative, and user-centered. We 
            work closely with our development and marketing teams to ensure every 
            design element aligns with our brand and enhances the user experience. 
            Here’s how we approach design:
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li><strong>Research:</strong> Understand user needs, trends, and best practices.</li>
              <li><strong>Wireframing:</strong> Map out the structure of key pages.</li>
              <li><strong>Prototyping:</strong> Create interactive prototypes to visualize user flow.</li>
              <li><strong>UI Design:</strong> Craft high-fidelity designs with color, typography, and icons.</li>
              <li><strong>User Testing:</strong> Gather feedback and refine the experience.</li>
            </ul>
            
            <br />
            <strong>Design Assets:</strong> <br />
            Here are some visual assets used across our platform:
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li>
                <Button
                  variant="link"
                  href="/design-assets/electrohub-logo.svg"
                  target="_blank"
                >
                  ElectroHub Logo (SVG)
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  href="/design-assets/web-design.png"
                  target="_blank"
                >
                  ElectroHub Web Design (PNG)
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  href="/design-assets/product-mockup.jpg"
                  target="_blank"
                >
                  Product Mockup Image
                </Button>
              </li>
            </ul>

            <br />
            For questions or additional design resources, contact our design team at{" "}
            <a href="mailto:electro.95hub@gmail.com">electro.95hub@gmail.com</a>.
          </p>
        </div>
      </div>
    </Container>
  );
};














// import { Container, Row, Col, Button } from "react-bootstrap";
// import { useSelector } from "react-redux";

// export const Design = () => {
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
//             Design at stOre
//           </h1>
//         </div>
//         <div className={theme ? "text-center text-black" : "text-center"}>
//           <p>
//             At <strong>stOre</strong>, we believe that great design plays a
//             crucial role in delivering exceptional user experiences. From our
//             website to our product pages, we focus on creating visually
//             appealing, intuitive, and responsive designs to enhance every
//             interaction. <br />
//             <br />
//             <strong>Our Design Philosophy:</strong> <br />
//             Our design approach focuses on minimalism, ease of navigation, and
//             the use of high-quality visuals to highlight the premium nature of
//             Apple products. We aim to create a seamless shopping experience
//             where form and function come together to delight our users. <br />
//             <br />
//             <strong>Design Process:</strong> <br />
//             Our design process is collaborative, iterative, and user-centered.
//             We work closely with our development team to ensure that every
//             design element aligns with both our brand and our users' needs.
//             Here's a brief overview of our process:
//             <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
//               <li>
//                 <strong>Research:</strong> Understanding user needs, market
//                 trends, and design best practices.
//               </li>
//               <li>
//                 <strong>Wireframing:</strong> Creating low-fidelity wireframes
//                 to map out the structure of key pages.
//               </li>
//               <li>
//                 <strong>Prototyping:</strong> Developing interactive prototypes
//                 to visualize user flow and design interactions.
//               </li>
//               <li>
//                 <strong>UI Design:</strong> Crafting high-fidelity UI designs
//                 with color schemes, typography, and icons.
//               </li>
//               <li>
//                 <strong>User Testing:</strong> Gathering feedback from users to
//                 refine and improve the design.
//               </li>
//             </ul>
//             <br />
//             <strong>Design Assets:</strong> <br />
//             Below are a few visual design assets used throughout our platform,
//             available for download:
//             <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
//               <li>
//                 <Button
//                   variant="link"
//                   href="/design-assets/logo.svg"
//                   target="_blank"
//                 >
//                   stOre Logo (SVG)
//                 </Button>
//               </li>
//               <li>
//                 <Button
//                   variant="link"
//                   href="/design-assets/web-design.png"
//                   target="_blank"
//                 >
//                   stOre Web Design (PNG)
//                 </Button>
//               </li>
//               <li>
//                 <Button
//                   variant="link"
//                   href="/design-assets/iphone-mockup.jpg"
//                   target="_blank"
//                 >
//                   stOre iPhone Mockup Image
//                 </Button>
//               </li>
//             </ul>
//             <br />
//             If you have any questions or need further design resources, feel
//             free to contact our design team at{" "}
//             <a href="mailto:design@store.com">design@store.com</a>.
//           </p>
//         </div>
//       </div>
//     </Container>
//   );
// };
