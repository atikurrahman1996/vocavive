import Dolfi from "../../../assets/Dolfi.png";
import Book from "../../../assets/image 60.png";
import Avatar1 from "../../../assets/avatar/manAvatar2.avif";
import Avatar2 from "../../../assets/avatar/manAvatar3.avif";
import Avatar3 from "../../../assets/avatar/maleStu.jpg";
import Avatar4 from "../../../assets/avatar/femaleStudent.avif";
import Avatar5 from "../../../assets/avatar/manAvatara.avif";
// import Avatar6 from "../../../assets/avatar/Ellipse 14.png";
import pdf from "../../../assets/Vocab CheatSheet.pdf";
// import emailjs from '@emailjs/browser';
// import { useRef } from "react"
import { useState } from "react";
import Heading from "../../../Components/Heading";
// import Btn from "../Buttons/Btn"

const ResourceSection = () => {
  const [success, setSuccess] = useState(false);
  const [allowDownload, setAllowDownload] = useState(true);
  // const form = useRef();

  const sendEmail = (e) => {
    if (
      /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
        e.target.value
      )
    ) {
      setAllowDownload(false);
      console.log("allow");
    } else {
      setAllowDownload(true);
      console.log("notallowed");
    }

    return;
    // e.preventDefault();
    // setSuccess(false);

    // emailjs.sendForm('service_cd5ut2e', 'template_4ycc5qa', form.current, 'kkw98G7NNsCgiMD92')
    //     .then((result) => {
    //         console.log(result.text);
    //         setSuccess(true);
    //         e.target.reset();
    //     }, (error) => {
    //         console.log(error.text);
    //     });
  };

  return (
    <section className="grid grid-cols-none md:grid-cols-12 gap-6 w-11/12 max-w-screen-xl mx-auto py-28">
      <div className="col-span-1 md:col-span-4 lg:col-span-4 md:pr-6 text-center md:text-left">
        <Heading>
          Your Today’s <span className="text-warning">Free </span>
          Resources
        </Heading>
        <p className="mb-10 text-muted">
          Collect our free E-book and get started with English right away. No
          excuses.
        </p>
        <img className="mx-auto" src={Dolfi} alt="Dolfi" />
      </div>

      <div className="col-span-1 md:col-span-8  lg:col-span-8 grid grid-cols-none md:grid-cols-12 gap-6">
        <div className="col-span-12  md:col-span-5 flex flex-col justify-between bg-secondary rounded-lg p-5">
          <h3 className="text-xl font-bold font-theme">
            Already 1k+ People Collected Our Free Resources
          </h3>
          <div className="flex mt-8 md:mt-0 gap-3">
            <img
              className="-ml-2 w-12 h-12 rounded-full"
              src={Avatar2}
              alt=""
            />
            <img
              className="-ml-2 w-12 h-12 rounded-full"
              src={Avatar1}
              alt=""
            />
            <img
              className="-ml-2 w-12 h-12 rounded-full"
              src={Avatar3}
              alt=""
            />
            <img
              className="-ml-2 w-12 h-12 md:hidden lg:block  rounded-full"
              src={Avatar4}
              alt=""
            />
            <img
              className="-ml-2 w-12 h-12 md:hidden lg:block rounded-full"
              src={Avatar5}
              alt=""
            />
          </div>
        </div>

        <div className="col-span-12  md:col-span-7 cardBg flex flex-col rounded-lg p-6 text-white">
          <h3 className="text-xl font-bold font-theme">Today’s Learning</h3>
          <h4 className="text-lg mb-3 font-medium mt-8 md:mt-auto">
            When to Use <span className="text-warning">“Ought to” </span>{" "}
            instead of <span className="text-warning">“Must” </span>
          </h4>
          <p>
            {`When talking about one's responsibility/duties/ obligations! Say "Ought to" instead of saying "Must"`}
          </p>
        </div>

        <div className="col-span-12  bg-secondary rounded-lg p-5 md:flex">
          <div className="w-full md:w-3/5">
            <img className="m-auto" src={Book} alt="" />
          </div>
          <div className="w-full flex flex-col justify-evenly pr-3 text-center md:text-left">
            <div>
              <h3 className="text-3xl lg:text-3xl md:text-2xl font-bold mb-5 font-theme">
                Recharge Your Grammar <br />
                in 8 Hours
              </h3>
              <p className="text-muted">
                Get the free Tense coursebook. This will fix your broken
                grammar—making you prepared for your next advanced English
                lessons.
              </p>
            </div>
            <div className="mt-3">
              <label className="text-xs font-bold block mb-2" htmlFor="">
                Enter your email to get the download link
              </label>
              <div className="flex flex-col md:flex-row gap-2">
                <input
                  onKeyUp={sendEmail}
                  type="text"
                  name="email"
                  className="w-full p-3 bg-secondary border border-gray-400 rounded-lg"
                  placeholder="Email Address"
                  required
                />
                {allowDownload ? (
                  <a className="whitespace-nowrap cursor-not-allowed mx-auto bg-primary text-white w-fit py-4 px-8 font-bold rounded-lg dropShadow">
                    Free Download
                  </a>
                ) : (
                  <a
                    className="whitespace-nowrap mx-auto bg-primary text-white w-fit py-4 px-8 font-bold rounded-lg active:scale-90 duration-200 dropShadow"
                    href={pdf}
                    download
                  >
                    Free Download
                  </a>
                )}
              </div>
              {success && (
                <p className="text-xs block text-green-600 mt-4">
                  Download link has been sent! Please check.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceSection;
