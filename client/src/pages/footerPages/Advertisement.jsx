import { Container, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

export const Advertisement = () => {
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
            Advertise with ElectroHub
          </h1>
        </div>
        <div className={theme ? "text-center text-black" : "text-center"}>
          <p>
            Looking to reach a tech-savvy, gadget-loving audience? Advertise with{" "}
            <strong>ElectroHub</strong>! We offer a range of advertising opportunities 
            to help brands like yours connect with customers who love the latest Mobiles, 
            Laptops, iPods, Watches, and Accessories.
          </p>
          <p>
            <strong>Our Advertising Options:</strong>
          </p>
          <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            <li>
              <strong>Display Ads:</strong> Promote your brand through banners on our homepage, 
              product pages, and category sections.
            </li>
            <li>
              <strong>Featured Products:</strong> Get your products highlighted on top of search 
              results and category pages.
            </li>
            <li>
              <strong>Affiliate Partnerships:</strong> Collaborate with us to promote your products 
              and earn commissions through our affiliate program.
            </li>
            <li>
              <strong>Social Media Promotions:</strong> Partner with ElectroHub for sponsored posts, 
              stories, and influencer campaigns across Instagram, Facebook, and X (Twitter).
            </li>
          </ul>
          <p>
            <strong>Current Campaign Highlights:</strong>
          </p>
          <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            <li>
              <Button
                variant="link"
                href="/advertisement/iphone-campaign"
                target="_blank"
              >
                iPhone 15 Launch Promotions
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                href="/advertisement/macbook-deals"
                target="_blank"
              >
                MacBook & Laptop Exclusive Deals
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                href="/advertisement/accessory-bundle"
                target="_blank"
              >
                Tech Accessory Bundles – Save Big
              </Button>
            </li>
          </ul>
          <p>
            <strong>Advertising Resources:</strong>
          </p>
          <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            <li>
              <Button
                variant="link"
                href="/ads/banner-pack.jpg"
                target="_blank"
              >
                Banner Pack (300x250, 728x90)
              </Button>
            </li>
            <li>
              <Button variant="link" href="/ads/video-ad.mp4" target="_blank">
                Product Video Ads
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                href="/ads/social-media-kit.zip"
                target="_blank"
              >
                Social Media Kit (Images & Captions)
              </Button>
            </li>
          </ul>
          <p>
            Ready to partner with us? Contact our advertising team at{" "}
            <a href="mailto:electro.95hub@gmail.com">electro.95hub@gmail.com</a> for details, 
            rates, and customized campaigns.
          </p>
        </div>
      </div>
    </Container>
  );
};



































// import { Container, Button } from "react-bootstrap";
// import { useSelector } from "react-redux";

// export const Advertisement = () => {
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
//             Advertise with stOre
//           </h1>
//         </div>
//         <div className={theme ? "text-center text-black" : "text-center"}>
//           <p>
//             Looking to reach a premium audience? Advertise with{" "}
//             <strong>stOre</strong>! We offer a variety of advertising options
//             designed to help brands like yours connect with the Apple-loving,
//             tech-savvy audience we serve. Whether you’re looking for targeted
//             online campaigns, product placements, or partnerships, we have the
//             right solutions for you. <br /> <br />
//             <strong>Our Advertising Options:</strong> <br />
//             We offer several advertising opportunities that cater to different
//             business needs. Here are the key options available:
//             <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
//               <li>
//                 <strong>Display Ads:</strong> Showcase your brand with banner
//                 ads on our homepage, category pages, and product pages.
//               </li>
//               <li>
//                 <strong>Sponsored Product Listings:</strong> Get your products
//                 featured at the top of our search results or on related product
//                 pages.
//               </li>
//               <li>
//                 <strong>Affiliate Marketing:</strong> Join our affiliate program
//                 and earn commission by promoting our products through your own
//                 channels.
//               </li>
//               <li>
//                 <strong>Social Media Campaigns:</strong> Partner with us for
//                 sponsored posts, stories, and influencer collaborations across
//                 platforms like Instagram, Facebook, and Twitter.
//               </li>
//             </ul>
//             <br />
//             <strong>Current Advertising Campaigns:</strong> <br />
//             We are currently running several advertisement campaigns to increase
//             visibility and boost sales. Here are a few of the active campaigns:
//             <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
//               <li>
//                 <Button
//                   variant="link"
//                   href="/advertisement/iphone-campaign"
//                   target="_blank"
//                 >
//                   stOre iPhone 15 Promotional Offer
//                 </Button>
//               </li>
//               <li>
//                 <Button
//                   variant="link"
//                   href="/advertisement/macbook-deals"
//                   target="_blank"
//                 >
//                   MacBook Pro - Limited Time Discounts
//                 </Button>
//               </li>
//               <li>
//                 <Button
//                   variant="link"
//                   href="/advertisement/accessory-bundle"
//                   target="_blank"
//                 >
//                   Accessory Bundle – Buy More, Save More
//                 </Button>
//               </li>
//             </ul>
//             <br />
//             <strong>Advertisement Resources:</strong> <br />
//             If you're interested in advertising with us, check out our
//             resources:
//             <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
//               <li>
//                 <Button
//                   variant="link"
//                   href="/ads/banner-pack.jpg"
//                   target="_blank"
//                 >
//                   Ad Banner Pack (300x250, 728x90)
//                 </Button>
//               </li>
//               <li>
//                 <Button variant="link" href="/ads/video-ad.mp4" target="_blank">
//                   stOre iPhone 15 Promotional Video
//                 </Button>
//               </li>
//               <li>
//                 <Button
//                   variant="link"
//                   href="/ads/social-media-kit.zip"
//                   target="_blank"
//                 >
//                   Social Media Kit (Images & Captions)
//                 </Button>
//               </li>
//             </ul>
//             <br />
//             Interested in partnering with us? Get in touch with our advertising
//             team at <a href="mailto:ads@store.com">ads@store.com</a> for more
//             information and rates.
//           </p>
//         </div>
//       </div>
//     </Container>
//   );
// };
