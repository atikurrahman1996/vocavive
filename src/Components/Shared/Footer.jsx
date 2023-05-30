import phone from "../../assets/icon/phone.png";
import email from "../../assets/icon/email.png";
// import location from "../../assets/icon/location.png";
import payments from "../../assets/Footer-Logo.png";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { RiYoutubeFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import CampaignSection from "../CampaignSection/CampaignSection";
const Footer = () => {
  return (
    <>
      <CampaignSection />
      <footer className="bg-slate-900 text-gray-300">
        <div className="w-11/12 mx-auto">
          <div className="md:grid grid-cols-12 gap-10 pb-10 pt-40 space-y-5">
            <div className="col-span-5">
              <h1 className="text-3xl font-extrabold text-white mb-2">
                edvive
              </h1>
              <p className="max-w-lg">
                Edvive is a language learning platform, specializing in English
                learning. We help you improve everything you need—to become an
                expert in English.
              </p>
              <ul className="flex gap-2 mt-5 items-center">
                <Link
                  to="https://www.facebook.com/edviveofficial?mibextid=ZbWKwL"
                  target="blank"
                >
                  <BsFacebook className="text-2xl text-white hover:text-warning" />
                </Link>
                <Link
                  to="https://www.youtube.com/@EdviveOfficial"
                  target="blank"
                >
                  <RiYoutubeFill className="text-3xl text-white hover:text-warning" />
                </Link>
                <Link
                  to="https://www.linkedin.com/company/edvive/"
                  target="blank"
                >
                  <BsLinkedin className="text-2xl text-white hover:text-warning" />
                </Link>
                <Link
                  to="https://www.instagram.com/edvive_official/?igshid=NTc4MTIwNjQ2YQ%3D%3D"
                  target="blank"
                >
                  <BsInstagram className="text-2xl text-white hover:text-warning" />
                </Link>
                <Link to="https://www.tiktok.com/@edvive.com" target="blank">
                  <FaTiktok className="text-2xl text-white hover:text-warning" />
                </Link>
              </ul>
            </div>
            <div className="flex col-span-4">
              <ul className="flex-1 space-y-2.5">
                <li>
                  <Link to="#" className="text-white font-medium">
                    Product
                  </Link>
                </li>
                <li>
                  <Link to="/vocavive" className="hover:text-warning">
                    Vocavive
                  </Link>
                </li>
                <li>
                  <Link to="/readvive" className="hover:text-warning">
                    Readvive
                  </Link>
                </li>
              </ul>
              <ul className="flex-1 space-y-2.5">
                <li>
                  <Link className="text-white font-medium">Quick Links</Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="hover:text-warning">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="hover:text-warning">
                    Terms of Services
                  </Link>
                </li>
                <li>
                  <Link to="/refund" className="hover:text-warning">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-3 space-y-2.5">
              <p className="text-white font-medium">Contact Us</p>
              <div className="flex items-start gap-2">
                <img className="mt-1" src={phone} alt="" />
                09611-656133
              </div>
              <div className="flex items-start gap-2">
                <img className="mt-1" src={email} alt="" />
                support@edvive.com
              </div>
              {/* <div className="flex items-start gap-2">
                <img className="mt-1" src={location} alt="" />
                Innovation Design and Entrepreneurship Academy (iDEA), E-14/X,
                ICT Tower (14th Floor), Agargaon, Dhaka - 1207, Bangladesh.
              </div> */}
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2 justify-between pt-6 pb-6 md:pb-4 border-t border-gray-700">
            <p className="text-sm">Copyright © 2023 by Edvive</p>
            <img className="w-full md:w-[40%] my-auto" src={payments} alt="" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
