import { Helmet } from "react-helmet";
import Navbar from "../../Components/Shared/Navbar";
import { useEffect } from "react";

const Refund = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Refund -Policy </title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="bg-[#5BC5D3]">
        <Navbar />
      </div>
      <div className="px-4 mt-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div>
          <div className="text-center">
            <strong className="text-3xl font-bold"> Refund Policy</strong>
            <br></br>
            <hr className="mt-5" />
            <br></br>
          </div>
          We are really thankful to you for trusting us with English learning.
          We are trying our best to ensure that our users have a rewarding
          experience while they discover, assess and purchase our courses. We
          also tried our best to ensure the best experience for your learning.
          When you buy any services or product from Edvive, you agree to our
          privacy policy, terms of use and refund policy. Our refund policy is
          as below:
        </div>
        <br></br>
        <div>
          <strong>When and how we issue refunds:</strong>
          <br></br>
          Upon determining that a cancellation or refund is due to you under
          these Terms, we will issue the refund or cancellation within 14 days.
          <br></br>
          If you are entitled to a refund, we will refund you on the credit card
          or debit card or the payment method you have used to pay for the
          Product/Services.
        </div>{" "}
        <br></br>
        <div>
          <strong>Cancellation & Refunds</strong>
          <br></br>
          If you are not satisfied with our product or services, you must raise
          your refund request within 24 hours from the purchase time. In that
          case we will give you the money back opportunities. For refunding the
          procedure we have to depend on the payment gateway terms and policies.
        </div>
        <br></br>
        <div>
          <strong>How to request a refund?</strong>
          <br></br>
          To request for a refund or cancellation, contact us at info@edvive
          with your email address and order number
        </div>
        <br></br>
      </div>
    </div>
  );
};

export default Refund;
