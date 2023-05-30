import Dolphi from "../../../assets/Edvive_Mascot_V3.png";
import star from "../../../assets/icon/Star.svg";
import Arrow from "../../../assets/Arrow_09.png";
import Btn from "../../../Components/Buttons/Btn";
import Heading from "../../../Components/Heading";
import video from "../../../assets/video/vocavive.mp4";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
const WhyUs = () => {
  const whyus = [
    "Learn 900 high-frequency English vocabulary",
    "Develop knowledge of new words",
    "Learn the word definition, synonyms-antonyms & usages of word",
    "Improve your English writeup more professional",
    "Getting better expressing & communication skills",
    "You can track your progress report in the dashboard",
  ];

  return (
    <div className="relative bg-[#FEFAF5]">
      <div className="w-11/12 gap-20 xl:gap-20 lg:gap-4 max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center py-14 md:py-32 relative ">
        <div className="max-w-xl ">
          <ReactPlayer
            url={video}
            playing={false}
            controls
            playIcon={true}
            width="90%"
            height="100%"
            id="video-r-e"
          />
        </div>
        <div>
          <div className="text-center md:text-left">
            <Heading>
              Why would you choose <br />
              <span className="text-warning"> Vocavive?</span>
            </Heading>
          </div>
          <ul className="space-y-2 mb-8">
            {whyus?.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <img src={star} alt="" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
          <div className="text-center md:text-left">
            <Link
              to="https://play.google.com/store/apps/details?id=com.edvive.vocavive"
              target="blank"
            >
              {" "}
              <Btn>Enroll Now</Btn>
            </Link>
          </div>
        </div>
        <img
          className="hidden lg:block w-36 absolute -top-1 right-16"
          src={Arrow}
          alt=""
        />
      </div>
      <img
        className="w-20 xl:w-40 xl:right-1 2xl:w-64 lg:w-32 md:w-40 md:bottom-[75px] lg:bottom-0  absolute bottom-0 right-0  lg:block lg:right-8"
        src={Dolphi}
        alt=""
      />
    </div>
  );
};

export default WhyUs;
