
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

export const PrivacyPolicy = () => {
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
            Privacy Policy
          </h1>
        </div>
        <div className={theme ? "text-center text-black" : "text-center"}>
          <p>
            Welcome to <strong>ElectroHub</strong>. We value your privacy and are committed 
            to protecting your personal information. This Privacy Policy explains how 
            we collect, use, and safeguard your data when you use our website or services. 
            By using our platform, you agree to the practices described below. <br /><br />

            <strong>1. Information Collection:</strong> We collect personal information 
            you provide, such as your name, email address, shipping details, and payment 
            information when you create an account or make a purchase. We also collect 
            data automatically, including IP addresses, browser type, and browsing behavior. <br /><br />

            <strong>2. Use of Information:</strong> Your information helps us process orders, 
            provide customer support, improve our services, and send promotional offers 
            if you opt-in. We may also use it for security purposes and to comply with legal requirements. <br /><br />

            <strong>3. Information Sharing:</strong> We do not sell or trade your personal data. 
            We may share information with trusted partners such as payment processors, 
            shipping companies, or analytics providers, solely to fulfill your orders and 
            improve services. These partners are required to protect your data. <br /><br />

            <strong>4. Data Security:</strong> We implement industry-standard security measures 
            including encryption and secure servers to protect your information. While we 
            strive to ensure data safety, no method of transmission over the internet is 
            completely secure. <br /><br />

            <strong>5. Your Rights:</strong> You have the right to access, update, or delete 
            your personal information at any time. You may also opt-out of marketing 
            communications by following the instructions in our emails. <br /><br />

            <strong>6. Cookies:</strong> Our website uses cookies to enhance your browsing 
            experience. Cookies help us remember your preferences, analyze site traffic, 
            and improve functionality. You can manage cookie settings through your browser. <br /><br />

            <strong>7. Changes to This Policy:</strong> We may update this Privacy Policy 
            periodically. All changes will be posted here, with the most recent update 
            indicated at the top. Please review it regularly. <br /><br />

            <strong>8. Contact Us:</strong> For questions or concerns about this Privacy Policy 
            or our data practices, reach out to us at <a href="mailto:support@electrohub.com">support@electrohub.com</a>. <br /><br />

            Thank you for trusting <strong>ElectroHub</strong>. We are committed to ensuring 
            your privacy and providing a secure, enjoyable shopping experience across 
            Mobiles, Laptops, iPods, Watches, and Accessories.
          </p>
        </div>
      </div>
    </Container>
  );
};


























// import { Container } from "react-bootstrap";
// import { useSelector } from "react-redux";

// export const PrivacyPolicy = () => {
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
//             Privacy Policy
//           </h1>
//         </div>
//         <div className={theme ? "text-center text-black" : "text-center"}>
//           <p>
//             Welcome to <strong>stOre</strong>. We value your privacy and are
//             committed to protecting your personal information. This Privacy
//             Policy outlines how we collect, use, and safeguard your data when
//             you use our services. By using our website and services, you agree
//             to the collection and use of information in accordance with this
//             policy. <br /> <br /> <strong>1. Information Collection:</strong> We
//             collect personal information that you provide to us, such as your
//             name, email address, shipping address, and payment details when you
//             create an account or make a purchase. We also collect information
//             automatically when you visit our website, such as your IP address,
//             browser type, and browsing behavior. <br /> <br />{" "}
//             <strong>2. Use of Information:</strong> We use your personal
//             information to process orders, provide customer support, improve our
//             services, and send promotional offers if you have opted in. We may
//             also use your information for security purposes and to comply with
//             legal requirements. <br /> <br />{" "}
//             <strong>3. Information Sharing:</strong> We do not sell, rent, or
//             trade your personal information to third parties. However, we may
//             share your data with trusted service providers, such as payment
//             processors and shipping companies, to fulfill your orders. These
//             third parties are obligated to protect your data and use it only for
//             the purposes for which it was shared. <br /> <br />{" "}
//             <strong>4. Data Security:</strong> We take reasonable measures to
//             protect your personal information from unauthorized access,
//             alteration, disclosure, or destruction. We use encryption technology
//             and secure servers to safeguard your data. However, no method of
//             data transmission over the internet is 100% secure, and we cannot
//             guarantee absolute security. <br /> <br />
//             <strong>5. Your Rights:</strong> You have the right to access,
//             update, or delete your personal information at any time. You can
//             also withdraw your consent for marketing communications by following
//             the instructions in the emails we send you. <br /> <br />{" "}
//             <strong>6. Cookies:</strong>
//             Our website uses cookies to enhance your browsing experience.
//             Cookies are small files stored on your device that help us remember
//             your preferences and improve site functionality. You can manage your
//             cookie settings through your browser settings. <br /> <br />
//             <strong>7. Changes to This Policy:</strong> We may update this
//             Privacy Policy from time to time. Any changes will be posted on this
//             page, and the date of the most recent update will be indicated at
//             the top of the page. We encourage you to review this policy
//             periodically. <br /> <br />
//             <strong>8. Contact Us:</strong> If you have any questions or
//             concerns about this Privacy Policy or our data practices, please
//             contact us at support@store.com. <br /> <br /> Thank you for
//             trusting stOre with your personal information. We are committed to
//             ensuring your privacy and security while providing you with the best
//             possible shopping experience. – The stOre Team
//           </p>
//         </div>
//       </div>
//     </Container>
//   );
// };
