// import { Link } from "react-router-dom";
// import { UnHappy } from "../../components/shared/UnHappy";
// import { useSelector } from "react-redux";

// export const ErrorPage = () => {
//   // Get current theme
//   const { theme } = useSelector((state) => state.theme);

//   return (
//     <>
//       <Link className="text-decoration-none">
//         <UnHappy message={"This page is on vacation!"} theme={theme} />
//       </Link>
//     </>
//   );
// };


import { Link } from "react-router-dom";
import { UnHappy } from "../../components/shared/UnHappy";
import { useSelector } from "react-redux";

export const ErrorPage = () => {
  // Get current theme
  const { theme } = useSelector((state) => state.theme);

  return (
    <div className={`d-flex flex-column align-items-center justify-content-center vh-100 ${theme}`}>
      {/* UnHappy icon or illustration */}
      <UnHappy message={"Oops! Something went wrong."} theme={theme} />

      {/* Error title */}
      <h1 className="mt-3">This page is on vacation!</h1>

      {/* Error description */}
      <p className="text-center mt-2">
        We’re having trouble loading this page. It might be due to a temporary issue or a broken link.
      </p>

      {/* Actions */}
      <div className="mt-3">
        <Link to="/" className="btn btn-primary me-2">
          Go to Home
        </Link>
        <button onClick={() => window.location.reload()} className="btn btn-secondary">
          Refresh Page
        </button>
      </div>
    </div>
  );
};
