import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Vocavive from "../Pages/Vocavive/Vocavive";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "../Pages/TermsOfService/TermsOfService";
import Refund from "../Pages/Refund/Refund";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Vocavive />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms-of-service",
        element: <TermsOfService />,
      },
      {
        path: "/refund",
        element: <Refund />,
      },
    ],
  },
]);
