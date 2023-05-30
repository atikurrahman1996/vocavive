import Heading from "../../../Components/Heading";
// import avatar from "../../../assets/avatar/Ellipse 10.png";
// import video from "../../../assets/Testimonial-Video.png";
import { AiFillStar } from "react-icons/ai";
// import ArrowNavigation from "../../../Components/Buttons/ArrowNavigation";
import maleAvatar from "../../../assets/avatar/maleStu.jpg";
import femaleAvatar from "../../../assets/avatar/femaleStudent.avif";
import maleAvatar2 from "../../../assets/avatar/manAvatara.avif";
const Testimonial = () => {
  return (
    <section className="bg-[#FEFAF5] py-16 md:py-28">
      <div className="w-11/12 max-w-screen-xl mx-auto">
        <div className="text-center">
          <Heading>
            What Our <span className="text-warning">Users Say </span>
            <br />
            About Us
          </Heading>
        </div>
        {/* <div>
          <img className="md:w-5/6 mx-auto mt-8" src={video} alt="" />
        </div> */}

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
          <div className="bg-white p-5 rounded-xl border">
            <div className="flex text-yellow-500 mt-3">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p className="mt-5">
              “ A very Important mobile application for those who are preparing
              for an Admission exam or want to improve their vocabulary. It used
              space repetition technique very effectively. I recommend to check
              it out.”
            </p>
            <div className="flex items-center gap-2 mt-4">
              <img src={maleAvatar} alt="" className="h-12 w-12 rounded-full" />
              <div>
                <h3 className="font-bold font-theme">Nasif Fuad</h3>
                <small>University Admission Student</small>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl border">
            <div className="flex text-yellow-500 mt-3">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p className="mt-5">
              “It's really a great platform. I used to dread learning
              vocabulary. But now for this app, I'm feeling confidence. The
              pronunciation with the words made learning easier a lot!”
            </p>
            <div className="flex items-center gap-2 mt-4">
              <img
                src={femaleAvatar}
                alt=""
                className="h-12 w-12 rounded-full"
              />
              <div>
                <h3 className="font-bold font-theme">Rukaiya Sharmin</h3>
                <small>HSC-Student </small>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl border">
            <div className="flex text-yellow-500 mt-3">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p className="mt-5">
              “This app is so helpful in terms of learning vocabulary. This app
              is optimized, well-decorated, and has a user-friendly UI; I didn't
              face any bugs or glitches. And the way they chose to teach
              vocabulary, I have to appreciate it.”
            </p>
            <div className="flex items-center gap-2 mt-4">
              <img
                src={maleAvatar2}
                alt=""
                className="h-12 w-12 rounded-full"
              />
              <div>
                <h3 className="font-bold font-theme">Nazmul</h3>
                <small>IELTS candidate</small>
              </div>
            </div>
          </div>
        </div>

        {/* <ArrowNavigation className="mt-8 justify-center" /> */}
      </div>
    </section>
  );
};

export default Testimonial;
