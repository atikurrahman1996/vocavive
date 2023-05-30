import { Helmet } from "react-helmet";
import Navbar from "../../Components/Shared/Navbar";
import { useEffect } from "react";

const TermsOfService = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Terms of Services</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="bg-[#5BC5D3]">
        <Navbar />
      </div>
      <div className="px-4 mt-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div>
          <div className="text-center">
            <strong className="text-3xl font-bold">Terms Of Services</strong>
            <br></br>
            <hr className="mt-5" />
            <br></br>
          </div>
          Edvive is a digital edutech platform under which people can develop
          their English learning process more easily & efficiently. People
          around the globe can use our platform to learn English as they need.
          We have designed this platform using the most advanced scientific &
          proven method. It helps you to overcome the failings of traditional
          memorizing-based learning.
        </div>{" "}
        <br></br>
        <div>
          The following terms of use govern the use of our website, apps,
          affiliated products and services given by us or by our third-party
          organization. We are requesting you read the terms carefully and
          contact us if anything is required. By using our services, you are
          bound by these terms given by us.
        </div>
        <br></br>
        <div>
          Under these terms and policies, we give you restricted, individual,
          non-transferable permission to use our services and products. You can
          download content from our platform for your personal, non-commercial
          use. If you require anything other than this you have to take written
          authorization from Edvive.{" "}
        </div>
        <br></br>
        <div>
          Under these terms, you need to create an account and give the
          necessary information under which we will identify you as our
          customer. This information is required only for providing service from
          our end. We are suggesting you not share any of the information
          regarding your account with any other third party.{" "}
        </div>
        <br></br>
        <div>
          We do not provide ownership of any of the content or resource
          personnel of our platform. If you are a learner, we enable you to
          access the course materials and interact with the mentors and feedback
          on our services & products. You may also receive many free resources
          and access to many premium products if Edvive management offers them
          to you based on specific criteria.
        </div>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default TermsOfService;
