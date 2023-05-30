import Heading from "../../../Components/Heading";
import Image1 from "../../../assets/featured/financial.png";
import Image2 from "../../../assets/featured/dailystar.png";
import Image3 from "../../../assets/featured/Frame 54 (2).png";
import Image4 from "../../../assets/featured/funtureStartup.jpeg";
import Image5 from "../../../assets/featured/Dt-news.png";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <section className="bg-secondary py-28">
      <div className="w-11/12 max-w-screen-xl mx-auto">
        <div className="text-center">
          <Heading>
            Featured In <span className="text-warning">News</span>
          </Heading>

          <p className="text-muted mb-14">
            Various daily newspapers and media channels have been keen to know
            our stories. Check them out.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-16">
          <Link
            to="https://thefinancialexpress.com.bd/education/from-blah-to-brilliant"
            target="blank"
          >
            <div className="card newsCard hover:bg-primary hover:text-white card-compact w-full md:w-80 h-80 bg-base-100 shadow-xl">
              <figure>
                <img src={Image1} className="w-full" />
              </figure>
              <div className="card-body">
                <p className="mt-5">4th Mar 2023</p>
                <h2 className="font-bold text-xl font-theme">
                  From 'blah' to brilliant: Boosting vocabulary for success
                </h2>
              </div>
            </div>
          </Link>
          <Link
            to="https://www.thedailystar.net/tech-startup/news/dhaka-based-startup-edvive-raises-usd-50k-pre-seed-round-3057046"
            target="blank"
          >
            <div className="card newsCard hover:bg-primary hover:text-white card-compact w-full md:w-80 h-80 bg-base-100 shadow-xl">
              <figure>
                <img src={Image2} className="w-full" />
              </figure>
              <div className="card-body">
                <p className="mt-5">4th Mar 2023</p>
                <h2 className="font-bold text-xl font-theme">
                  Language-learning startup Edvive raises $50k in funding
                </h2>
              </div>
            </div>
          </Link>
          <Link
            to="https://futurestartup.com/2022/06/27/edvive-raises-50000-in-pre-seed-investment/"
            target="blank"
          >
            <div className="card newsCard hover:bg-primary hover:text-white card-compact w-full md:w-80 h-80 bg-base-100 shadow-xl">
              <figure>
                <img src={Image4} className="w-full" />
              </figure>
              <div className="card-body">
                <p className="mt-5">4th Mar 2023</p>
                <h2 className="font-bold text-xl font-theme">
                  Edvive secures $50k funding to build English-learning apps
                </h2>
              </div>
            </div>
          </Link>
          <Link
            to="https://www.dhakatribune.com/business/2022/06/28/edvive-receives-50000-as-pre-seed-investment"
            target="blank"
          >
            <div className="card newsCard hover:bg-primary hover:text-white card-compact w-full md:w-80 h-80 bg-base-100 shadow-xl">
              <figure>
                <img src={Image5} className="w-full" />
              </figure>
              <div className="card-body">
                <p className="mt-5">4th Mar 2023</p>
                <h2 className="font-bold text-xl font-theme">
                  Edvive raises funding to make English practicing accessible...
                </h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Featured;
