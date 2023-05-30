import vocavive from "../../../assets/vocaviveapp.png";
import v from "../../../assets/v.svg";
import Btn from "../../../Components/Buttons/Btn";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="md:h-[680px]">
      <div className="w-11/12 max-w-screen-xl mx-auto flex flex-col md:flex-row gap-10 md:gap-0 items-center py-10">
        <div className="md:flex-1 order-last md:order-first text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <img className="w-10" src={v} alt="" />
            <h1 className="text-4xl font-bold font-theme">Vocavive</h1>
          </div>
          <h3 className="font-bold text-xl font-theme mt-3 mb-2">
            Become a Vocabulary Guru, ace your exam preparation
          </h3>
          <p>
            Struggling with Vocabulary is common for all students. Vocavive App
            is the BEST guided Vocabulary preparation app for exams like IELTS,
            SAT, GRE, GMAT, University Admission etc. Get access to everyday
            lessons, word libraries and 150+ practice exams.
          </p>
          <h2 className="my-5 font-bold font-theme text-2xl text-primary">
            $6.00
          </h2>
          <Link
            to="https://play.google.com/store/apps/details?id=com.edvive.vocavive"
            target="__blank"
          >
            <Btn>Download Vocavive</Btn>
          </Link>
          <p className="mt-8 bg-[#C8EBF1] p-5 rounded-xl border text-sm md:text-base">
            Acquire higher marks in competitive exams Like SAT, GRE, GMAT,
            IELTS,TOFEL, foreign tours, University Admission Exam, Government &
            Corporate Exams!
          </p>
        </div>
        <div className="md:flex-1">
          <img className="ml-auto" src={vocavive} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
