import Heading from "../../../Components/Heading";
import image from "../../../assets/user-media/tiktok-2.png";
import image1 from "../../../assets/user-media/titkok-1.png";
import image3 from "../../../assets/user-media/tiktok-3.png";
import image4 from "../../../assets/user-media/tiktok-4.jpg";
import { Link } from "react-router-dom";

const MediaSection = () => {
  return (
    <section className="w-11/12 max-w-screen-xl mx-auto py-20">
      <div className="flex items-end justify-between mb-14">
        <div className="text-center md:text-left">
          <Heading>
            Find Loads of <span className="text-warning"> Free</span> Resources
          </Heading>
          <p className="text-muted">
            We put out hundreds of free resources regularly. At least getting
            started with English learning is what we want for you.
          </p>
        </div>
        {/* <ArrowNavigation className="hidden md:flex" /> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        <div>
          <img className="w-full rounded-lg" src={image1} alt="" />
          <Link
            to="https://www.tiktok.com/@edvive.com/video/7214061428506889473"
            target="blank"
          >
            <div className="border rounded-xl p-3 mt-3 hover:bg-warning  dropShadow">
              <p className="text-muted"></p>
              <h2 className="font-bold text-xl font-theme">
                Vocavive app - best solution for vocabulary 💙...
              </h2>
            </div>
            <div className="flex justify-center items-center">
              <button
                style={{
                  twBgOpacity: "1",
                  backgroundColor: "rgb(241 156 56 / var(--tw-bg-opacity))",
                }}
                className="btn mt-2 btn-primary btn-sm border-0 dropShadow"
              >
                Watch Now
              </button>
            </div>
          </Link>
        </div>
        <div>
          <img className="w-full rounded-lg" src={image} alt="" />
          <Link
            to="https://www.tiktok.com/@edvive.com/video/7209656729431231745"
            target="blank"
          >
            <div className="border rounded-xl p-3 mt-3 hover:bg-warning dropShadow">
              <p className="text-muted"></p>
              <h2 className="font-bold text-xl font-theme">
                Watch these 5 movies to improve English...
              </h2>
            </div>
            <div className="flex justify-center items-center">
              <button
                style={{
                  twBgOpacity: "1",
                  backgroundColor: "rgb(241 156 56 / var(--tw-bg-opacity))",
                }}
                className="btn mt-2 btn-primary btn-sm border-0 dropShadow"
              >
                Watch Now
              </button>
            </div>
          </Link>
        </div>
        <div>
          <img className="w-full rounded-lg" src={image3} alt="" />
          <Link
            to="https://www.tiktok.com/@edvive.com/video/7227924703334173954"
            target="blank"
          >
            <div className="border rounded-xl p-3 mt-3 hover:bg-warning dropShadow">
              <p className="text-muted"></p>
              <h2 className="font-bold text-xl font-theme">
                Ace your exam preparation with vocavive...
              </h2>
            </div>
            <div className="flex justify-center items-center">
              <button
                style={{
                  twBgOpacity: "1",
                  backgroundColor: "rgb(241 156 56 / var(--tw-bg-opacity))",
                }}
                className="btn mt-2 btn-primary btn-sm border-0 dropShadow"
              >
                Watch Now
              </button>
            </div>
          </Link>
        </div>
        <div>
          <img className="w-full  rounded-lg" src={image4} alt="" />
          <Link
            to="https://www.tiktok.com/@edvive.com/video/7215486381441764626"
            target="blank"
          >
            <div className="border rounded-xl p-3 mt-3 hover:bg-warning dropShadow">
              <p className="text-muted"></p>
              <h2 className="font-bold text-xl font-theme">
                With Readvive - say goodbye to academic struggles...
              </h2>
            </div>
            <div className="flex justify-center items-center">
              <button
                style={{
                  twBgOpacity: "1",
                  backgroundColor: "rgb(241 156 56 / var(--tw-bg-opacity))",
                }}
                className="btn capitalize mt-2 btn-primary btn-sm border-0 dropShadow"
              >
                Watch Now
              </button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
