
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

export const AboutUs = () => {
  // Get current theme
  const { theme } = useSelector((state) => state.theme);

  return (
    <Container fluid className="p-3">
      <div className="text-white d-flex justify-content-center align-items-center my-5 flex-column gap-2 flex-wrap">
        <div className="my-5">
          <h1
            className={
              theme ? "text-center text-black" : "text-white text-center"
            }
          >
            About Us
          </h1>
        </div>
        <div className={theme ? "text-center text-black" : "text-center"}>
          <p>
            Welcome to <strong>ElectroHub</strong> – your one-stop destination for all things tech!
          </p>
          <p>
            At ElectroHub, we offer a wide range of premium products, including the latest mobiles, laptops, iPods, smartwatches, and a full range of accessories to enhance your digital lifestyle.
          </p>
          <p>
            Our mission is to provide authentic, high-quality technology that keeps you connected, productive, and entertained. Whether you’re a tech enthusiast, a professional, or someone looking for reliable gadgets, ElectroHub has something for everyone.
          </p>
          <p>
            We pride ourselves on exceptional customer service, competitive pricing, and a seamless shopping experience. Every product in our store is carefully selected to ensure quality and reliability.
          </p>
          <p>
            Join the ElectroHub community today and explore a world of innovative technology designed to simplify and enrich your life.
          </p>
          <p>
            Experience the difference with ElectroHub – where technology meets trust. <br /> 
            – The ElectroHub Team
          </p>
        </div>
      </div>
    </Container>
  );
};
















// import { Container } from "react-bootstrap";
// import { useSelector } from "react-redux";


// export const AboutUs = () => {
//   // Get current theme
//   const { theme } = useSelector((state) => state.theme);

//   return (
//     <Container fluid className="p-3">
//       <div className="text-white d-flex justify-content-center align-items-center my-5 flex-column gap-2 flex-wrap">
//         <div className="my-5">
//           <h1
//             className={
//               theme ? "text-center text-black" : "text-white text-center"
//             }
//           >
//             About Us
//           </h1>
//         </div>
//         <div className={theme ? "text-center text-black" : "text-center"}>
//           <p>
//             Welcome to <strong>ElectroHub</strong>
//           </p>
//           <p>your ultimate destination for the latest Apple products!</p>
//           <p>
//             We are passionate about offering the most innovative Apple
//             technology, from iPhones and MacBooks to the latest accessories.
//           </p>
//           <p>
//             At ElectroHub, we guarantee authenticity, exceptional customer service,
//             and a wide selection of high-quality products at competitive prices.
//           </p>
//           <p>
//             Our mission is to make premium Apple technology accessible to
//             everyone, enabling you to stay connected, productive, and creative.
//           </p>
//           <p>
//             Join the ElectroHub family today and experience the excellence of Apple
//             like never before.
//           </p>
//           <p>
//             Happy shopping! <br /> – The ElectroHub Team
//           </p>
//         </div>
//       </div>
//     </Container>
//   );
// };