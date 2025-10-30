import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

export const CookiePolicy = () => {
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
            Cookie Policy
          </h1>
        </div>
        <div className={theme ? "text-center text-black" : "text-center"}>
          <p>
            Welcome to <strong>ElectroHub</strong>. This Cookie Policy explains how 
            we use cookies and similar technologies to enhance your experience 
            while browsing our website or shopping for Mobiles, Laptops, iPods, 
            Watches, and Accessories. By using our website, you agree to our use 
            of cookies as described below.
          </p>

          <p>
            <strong>1. What Are Cookies?</strong><br />
            Cookies are small text files stored on your device that help us 
            remember your preferences, improve website functionality, and provide 
            a personalized shopping experience.
          </p>

          <p>
            <strong>2. Types of Cookies We Use:</strong><br />
            - <strong>Essential Cookies:</strong> Required for the website to function properly, 
              including navigation and secure checkout.<br />
            - <strong>Performance Cookies:</strong> Collect anonymous information about 
              how visitors use our website, helping us improve performance and features.<br />
            - <strong>Functionality Cookies:</strong> Remember your preferences, such as 
              language or region, for a customized experience.<br />
            - <strong>Marketing & Targeting Cookies:</strong> Help deliver relevant 
              promotions, offers, and advertisements based on your interests.
          </p>

          <p>
            <strong>3. Managing Cookies:</strong><br />
            You can manage or block cookies through your browser settings. 
            Please note that disabling cookies may affect website functionality 
            and limit certain features, including shopping and account services.
          </p>

          <p>
            <strong>4. Third-Party Cookies:</strong><br />
            We may use trusted third-party services, such as analytics providers 
            and advertising partners, to help us understand website usage and 
            deliver relevant promotions.
          </p>

          <p>
            <strong>5. Consent:</strong><br />
            By continuing to use ElectroHub, you consent to our use of cookies 
            in accordance with this policy. If you prefer not to accept cookies, 
            you may adjust your browser settings or refrain from using our website.
          </p>

          <p>
            <strong>6. Updates to This Policy:</strong><br />
            We may update this Cookie Policy from time to time. Any changes 
            will be posted here, and we encourage you to review it periodically.
          </p>

          <p>
            <strong>7. Contact Us:</strong><br />
            For questions or concerns about our Cookie Policy or data practices, 
            please contact us at <a href="mailto:electro.95hub@gmail.com">electro.95hub@gmail.com</a>.
          </p>

          <p>
            Thank you for choosing <strong>ElectroHub</strong>. We hope you enjoy 
            a smooth and personalized shopping experience!
          </p>
        </div>
      </div>
    </Container>
  );
};


































// import { Container } from "react-bootstrap";
// import { useSelector } from "react-redux";

// export const CookiePolicy = () => {
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
//             Cookie Policy
//           </h1>
//         </div>
//         <div className={theme ? "text-center text-black" : "text-center"}>
//           <p>
//             Welcome to <strong>stOre</strong>. This Cookie Policy explains how
//             we use cookies and similar technologies to enhance your experience
//             when you visit our website or use our services. By using our
//             website, you agree to the use of cookies in accordance with this
//             policy. <br /> <br />
//             <strong>1. What Are Cookies?</strong> Cookies are small text files
//             that are stored on your device when you visit a website. They help
//             us remember your preferences, improve the website’s functionality,
//             and provide you with a personalized experience. <br /> <br />
//             <strong>2. Types of Cookies We Use:</strong> We use the following
//             types of cookies on our website: <br />-{" "}
//             <strong>Essential Cookies:</strong> These are necessary for the
//             operation of our website and allow you to navigate and use its
//             features. <br />- <strong>Performance Cookies:</strong> These
//             cookies collect information about how visitors use our website, such
//             as which pages are visited most often. They help us improve the
//             performance and functionality of our website. <br />-{" "}
//             <strong>Functionality Cookies:</strong> These cookies allow us to
//             remember your preferences, such as your language or region, and
//             provide enhanced, more personalized features. <br />-{" "}
//             <strong>Targeting Cookies:</strong> These cookies are used to
//             deliver targeted advertising based on your interests. They also help
//             limit the number of times you see an ad and measure the
//             effectiveness of advertising campaigns. <br /> <br />
//             <strong>3. Managing Cookies:</strong> You can control and manage
//             cookies through your browser settings. Most browsers allow you to
//             block or delete cookies. However, please note that blocking or
//             deleting cookies may impact your experience on our website and limit
//             some of the website's features. <br /> <br />
//             <strong>4. Third-Party Cookies:</strong> We may also use third-party
//             cookies provided by trusted partners, such as analytics services and
//             advertising networks. These cookies help us understand user behavior
//             and deliver targeted ads. <br /> <br />
//             <strong>5. Consent to Cookies:</strong> By continuing to use our
//             website, you consent to our use of cookies in accordance with this
//             Cookie Policy. If you do not accept the use of cookies, please
//             disable them through your browser settings or refrain from using our
//             website. <br /> <br />
//             <strong>6. Changes to This Policy:</strong> We may update this
//             Cookie Policy from time to time. Any changes will be posted on this
//             page, and the date of the most recent update will be indicated at
//             the top of the page. We encourage you to review this policy
//             periodically. <br /> <br />
//             <strong>7. Contact Us:</strong> If you have any questions or
//             concerns about this Cookie Policy or our use of cookies, please
//             contact us at support@store.com. <br /> <br />
//             Thank you for visiting stOre, and we hope you enjoy your shopping
//             experience with us! – The stOre Team
//           </p>
//         </div>
//       </div>
//     </Container>
//   );
// };
