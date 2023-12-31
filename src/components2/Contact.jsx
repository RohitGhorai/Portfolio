import { useState, useEffect, useRef } from "react";
import { styles } from "../style";
import Button from "./Button";
import emailjs from "@emailjs/browser";

const style = {
  label:
    "peer-focus:bg-[#04172D] peer-focus:px-1 pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-[#b0b6c6] motion-reduce:transition-none dark:peer-focus:text-red-600",
  input:
    "peer block min-h-[auto] w-full rounded-[5px] border-white border-opacity-50 border focus:border-red-600 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0",
};

const Contact = () => {
  const [scroll, setScroll] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    window.addEventListener("scroll", () =>
      setScroll(window.scrollY > window.innerHeight * 3 + 300)
    );
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ghnyueb",
        "template_n3tcew7",
        form.current,
        "XtFCtUgBM-b-z4xU9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("You have successfully send the email.");
    setData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center w-full h-screen overflow-hidden"
    >
      <div className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] flex flex-col justify-center sm:pb-0 pb-[30px] sm:items-start items-center overflow-hidden">
        <div className="flex flex-col sm:p-4 p-3">
          <h2
            className={`font-poppins font-semibold sm:text-[30px] md:text-[40px] text-[24px] sm:leading-[60px] leading-[50px] text-white opacity-80 ${
              scroll ? "fade-in-from-TopToBottom" : "hidden"
            }`}
          >
            Contact
          </h2>
          <div
            className={`border-[#962929] sm:border-b-[5px] border-b-[3px] rounded-2xl ${
              scroll ? "fade-in-from-BottomToTop" : "hidden"
            }`}
          />
        </div>
        <p
          className={`flex items-center sm:justify-start justify-center ${
            styles.paragraph
          } w-full text-dimWhite sm:px-5 px-3 sm:pb-5 pb-2 ${
            scroll ? "fade-in-from-TopToBottom" : "hidden"
          }`}
        >
          // Submit the form below or shoot me an email -
          mail2rohitghorai@gmail.com
        </p>
      </div>
      <div className="flex flex-col w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] py-2 sm:p-4 p-3 overflow-hidden">
        <form ref={form} onSubmit={sendEmail}>
          <div
            className={`relative mb-4 z-[2] ${
              scroll ? "fade-in-from-left-to-right" : "hidden"
            }`}
            data-te-input-wrapper-init
          >
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              className={`${style.input}`}
              onChange={(event) => handleChange(event, "name")}
              value={data.name}
            />
            <label
              className={`${style.label} ${
                data.name.length > 0 &&
                "-translate-y-[1.15rem] scale-[0.8] bg-[#04172D] rounded-[5px] px-1 dark:text-white"
              }`}
            >
              Name
            </label>
          </div>
          <div
            className={`relative mb-4 z-[1] ${
              scroll ? "fade-in-from-right-to-left" : "hidden"
            }`}
            data-te-input-wrapper-init
          >
            <input
              type="text"
              name="user_email"
              placeholder="E-mail Id"
              className={`${style.input}`}
              onChange={(event) => handleChange(event, "email")}
              value={data.email}
            />
            <label
              className={`${style.label} ${
                data.email.length > 0 &&
                "-translate-y-[1.15rem] scale-[0.8] bg-[#04172D] rounded-[5px] px-1 dark:text-white"
              }`}
            >
              E-mail Id
            </label>
          </div>
          <div
            className={`relative mb-4 z-[0] ${
              scroll ? "fade-in-from-left-to-right" : "hidden"
            }`}
            data-te-input-wrapper-init
          >
            <textarea
              type="text"
              name="message"
              rows={3}
              placeholder="Message"
              className={`${style.input}`}
              onChange={(event) => handleChange(event, "message")}
              value={data.message}
            />
            <label
              className={`${style.label} ${
                data.message.length > 0
                  ? "-translate-y-[1.15rem] scale-[0.8] bg-[#04172D] px-1 dark:text-white"
                  : ""
              }`}
            >
              Message
            </label>
          </div>
          <div
            className={`w-full flex justify-center ${
              scroll ? "fade-in-from-BottomToTop" : "hidden"
            }`}
          >
            <Button
              type="submit"
              value="Let's Collaborate"
              styles="mt-[10px] md:mt-[20px] text-[10px]  xs:text-[14px]"
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
