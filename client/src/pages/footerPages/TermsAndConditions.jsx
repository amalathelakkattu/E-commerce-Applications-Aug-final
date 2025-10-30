
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

export const TermsAndConditions = () => {
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
            Terms and Conditions
          </h1>
        </div>
        <div className={theme ? "text-center text-black" : "text-center"}>
          <p>
            Welcome to <strong>ElectroHub</strong> – your trusted destination for 
            Mobiles, Laptops, iPods, Watches, and Accessories. By using our website 
            and services, you agree to the following Terms and Conditions. Please 
            read them carefully. <br /><br />

            <strong>1. Use of Services:</strong> You may use ElectroHub only for lawful 
            purposes and in accordance with these Terms. Creating an account may be 
            required to place orders. You agree to provide accurate and complete 
            information and to keep your account credentials secure. <br /><br />

            <strong>2. Pricing and Availability:</strong> Prices are subject to change 
            without notice. Product availability is updated regularly, but we cannot 
            guarantee stock for all items. <br /><br />

            <strong>3. Payments:</strong> Payment must be made in full at the time of 
            purchase using accepted payment methods, including credit/debit cards and 
            other online payment options. <br /><br />

            <strong>4. Shipping and Delivery:</strong> We offer multiple shipping options. 
            Delivery times vary based on location and shipping method. Shipping fees, 
            if applicable, will be displayed at checkout. <br /><br />

            <strong>5. Returns and Refunds:</strong> If you are not satisfied with a purchase, 
            please refer to our Return Policy. Certain conditions and timelines apply. <br /><br />

            <strong>6. Privacy and Data Protection:</strong> We respect your privacy and 
            handle your personal information responsibly. Please review our Privacy Policy 
            to understand how we collect, use, and protect your data. <br /><br />

            <strong>7. Limitation of Liability:</strong> ElectroHub is not liable for 
            indirect, incidental, or consequential damages arising from the use of our 
            services. Our liability is limited to the total amount paid for the purchased products. <br /><br />

            <strong>8. Changes to Terms:</strong> We may update these Terms and Conditions 
            periodically. Changes will be posted on this page with an updated revision date. 
            It is your responsibility to review them regularly. <br /><br />

            <strong>9. Governing Law:</strong> These Terms and Conditions are governed 
            by the laws applicable in the jurisdiction where ElectroHub operates. <br /><br />

            Thank you for choosing <strong>ElectroHub</strong>. If you have any questions, 
            please contact our customer support team at <a href="mailto:support@electrohub.com">support@electrohub.com</a>.
          </p>
        </div>
      </div>
    </Container>
  );
};


















// import { Container } from "react-bootstrap";
// import { useSelector } from "react-redux";

// export const TermsAndConditions = () => {
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
//             Terms and Conditions
//           </h1>
//         </div>
//         <div className={theme ? "text-center text-black" : "text-center"}>
//           <p>
//             Welcome to <strong>stOre</strong> – your trusted online destination
//             for the latest Apple products and accessories. By accessing and
//             using stOre, you agree to comply with and be bound by the following
//             terms and conditions. Please read them carefully. If you do not
//             agree to these terms, do not use our services. stOre provides an
//             online shopping experience for a wide range of Apple products. You
//             may only use our services for lawful purposes and in accordance with
//             these Terms and Conditions. To make a purchase, you may need to
//             create an account. You agree to provide accurate and complete
//             information when creating your account and to keep it updated. You
//             are responsible for safeguarding your account credentials. All
//             prices listed on our website are subject to change without notice.
//             We strive to provide accurate availability information, but product
//             availability may vary. Payment for orders must be made in full at
//             the time of purchase. We accept various payment methods, including
//             credit/debit cards and other online payment options. We offer
//             various shipping options. Delivery times may vary based on your
//             location and the shipping method chosen. Any applicable shipping
//             fees will be clearly displayed at checkout. If you are not satisfied
//             with your purchase, please refer to our Return Policy for
//             information on how to return products and request refunds. Certain
//             conditions apply. We respect your privacy and take reasonable
//             measures to protect your personal information. Please review our
//             Privacy Policy to understand how we collect, use, and safeguard your
//             data. stOre is not liable for any indirect, incidental, or
//             consequential damages arising from the use of our services. Our
//             liability is limited to the total amount paid for the products in
//             question. We may update these Terms and Conditions from time to
//             time. Any changes will be posted on this page with an updated
//             revision date. It is your responsibility to review this page
//             regularly to stay informed of any changes. These Terms and
//             Conditions shall be governed by and construed in accordance with the
//             laws of the jurisdiction in which stOre operates. Thank you for
//             shopping with us! If you have any questions, feel free to reach out
//             to our customer support team. – The stOre Team
//           </p>
//         </div>
//       </div>
//     </Container>
//   );
// };
