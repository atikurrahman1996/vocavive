import { Helmet } from "react-helmet";
import Navbar from "../../Components/Shared/Navbar";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Privacy Policy </title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="bg-[#5BC5D3]">
        <Navbar />
      </div>
      <div className="px-4 mt-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div>
          <div>
            <div className="text-center">
              <strong className=" text-3xl font-bold">Privacy Policy</strong>
              <div>
                <hr className="mt-5" />
              </div>
            </div>
            <br></br>
            <br></br>
            Edvive is a technology enhanced language learning platform built for
            learning English in the most efficient way. We have built an optimum
            platform for the learners so that they can learn English in the most
            efficient way. Under this privacy policy, we will let you know about
            our data collection practices and describe your rights to access,
            correct or restrict the use of our personal data.<br></br>
            By subscribing and using the services of our platform, you agree to
            the terms of this privacy policy.{" "}
          </div>
          <br></br>
          <div>
            <strong>Personal Information </strong>
            <br></br>
            The personal identifiable information we collect from you is your
            name, email address, IP address, device identifier.<br></br>
            We may obtain your information through your social media and other
            online third-party accounts if those accounts are connected with
            Edvive account. If you login or Sign Up to Edvive account we may ask
            for permission to access certain information about the account.{" "}
            <br></br>
            Depending on the platform type and policy we may collect your name,
            profile picture, account number, email address, location, physical
            address, device IP number, gender, birthday and many more.<br></br>
            For any kind of payment or service purchase you have to pay through
            our payment gateway. The final amount of subtotal shown at the time
            of final payment is the total payment amount for you. You can use
            any kind of payment solution except cash to pay for our services or
            products. For the payment you have to input all the information
            required by the payment gateway or by the bank authorities.<br></br>
            We will also keep all the information related to course updates like
            posts, Q/A, comments, feedback and many more for upgrading our
            products and our services.{" "}
          </div>{" "}
          <br></br>
          <div>
            <strong>Data Collection & Cookies</strong>
            <br></br>
            <strong>Types of Data we collect</strong>
            <br></br>
            When you access the Services, we collect certain data by automated
            means, including:<br></br>
          </div>
          <br></br>- System Data<br></br>
          Technical information about your computer or device, such as IP
          address, device type, operating system type and version, unique device
          identifiers, browser, browser language, domain, and other systems
          data, and platform types.<br></br>- Usage Data<br></br>
          Statistical data about your interactions with the services, including
          courses accessed, time spent on pages or the service, pages visited,
          features used, your search queries, click data, date and time, and
          other data regarding your use of the Services.
          <br></br>- Geo location Data<br></br>
          Approximate geographic details, including information like country,
          city, and geographic coordinates, calculated against your IP address.
          <div>
            <strong>Cookies and Data Collection Tools</strong>
            <br></br>
            Edvive uses server log files and automated data collection tools
            like cookies, tags, scripts, customized links, device or browser
            fingerprints, and web beacons when you access and use the Services.
            These Data collection tools automatically track and collect certain
            System Data and Usage Data when you use our services & products. In
            some cases, we tie data gathered through those Data Collection Tools
            to other data that we collect as mentioned in this Privacy Policy.
            <br></br>
            We use cookies for analyzing your usage of the services, improving
            and personalizing the user experience, making it easier to login to
            the services, and recognizing you when you return. We use web
            beacons for things like identifying whether a page was visited,
            identifying whether an email was opened, and advertising more
            efficiently by excluding current users from certain promotional
            messages or identifying the source of a new mobile app download.
          </div>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
