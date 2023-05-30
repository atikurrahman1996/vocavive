import { Link } from "react-router-dom";
import Btn from "../../../Components/Buttons/Btn";

const EnrollCTABar = () => {
  return (
    <section className="sticky top-0 enrollCTAbg text-white p-3 pb-4 z-50">
      <div className="w-11/12 mx-auto flex items-center">
        <h1 className="text-lg font-bold font-theme hidden lg:block">
          Become The Vocabulary Master | Be The <br /> Vocabulary Guru
        </h1>
        <h3 className="lg:ml-auto mr-10 text-xl font-extrabold font-theme">
          $6.00
        </h3>
        <Link
          to="https://play.google.com/store/apps/details?id=com.edvive.vocavive"
          target="blank"
        >
          <Btn variant="warning" className="ml-auto lg:m-0">
            Enroll Now
          </Btn>
        </Link>
      </div>
    </section>
  );
};

export default EnrollCTABar;
