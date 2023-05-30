// import Btn from "../../../Components/Buttons/Btn";
import Edvive_Mascot_V4 from "../../assets/Edvive_Mascot_V4.png";

const CampaignSection = () => {
  return (
    <section className="ctaBg bg-primary rounded-3xl w-11/12 md:w-9/12 max-w-screen-lg mx-auto p-10 md:p-16 flex flex-col md:flex-row text-center md:text-left gap-14 md:gap-8 lg:gap-14 relative -bottom-24 dropShadow">
      <img src={Edvive_Mascot_V4} alt="" className=" md:w-[50%] w-full" />
      <div className="flex flex-col md:py-5 md:pr-5 md:mt-14">
        <h1 className="text-white text-3xl md:text-2xl lg:text-4xl font-bold mb-4 font-theme">
          Secure Your Position <br className="md:hidden lg:inline-block" /> with
          English Skill
        </h1>
        <p className="text-white mb-auto">
          We help you improve everything you need to—become an expert in
          English.
        </p>
        {/* <Btn variant="warning" className="mt-6 mx-auto md:ml-0">Enroll Now</Btn> */}
      </div>
    </section>
  );
};

export default CampaignSection;
