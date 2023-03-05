import React, { useState } from "react";
import { FaPhoneAlt, FaMap, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const sendMessage = (e: any) => {
    e.preventDefault();
    if (username === "") {
      setErrorMsg("Name field can't be empty");
    } else if (email === "") {
      setErrorMsg("Email is required");
    } else if (message === "") {
      setErrorMsg("Message is required");
    } else {
      setSuccessMsg(
        `Hello ${username}, Thank you for message. I'll answer you :)`
      );
    }
  };

  return (
    <section
      id="contact"
      className="w-full h-[800px] bg-cover-image bg-no-repeat bg-cover bg-fixed text-white px-4 relative"
    >
      <div className="w-full h-full bg-black bg-opacity-80 py-20">
        <div className="max-w-6xl h-full mx-auto flex flex-col gap-6 md:gap-12">
          <h1 className="text-3xl font-thin tracking-widest uppercase text-center">
            Contact me
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center gap-3">
              <FaMap className="text-4xl text-yellow-500" />
              <p className="text-sm tracking-wide">Azerbaijan,Baku</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <FaEnvelope className="text-4xl text-yellow-500" />
              <p className="text-sm tracking-wide">test@gmail.com</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <FaPhoneAlt className="text-4xl text-yellow-500" />
              <p className="text-sm tracking-wide">077-324-16-69</p>
            </div>
          </div>
          {successMsg ? (
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, type: "easyIn" }}
              className="max-w-[600px] h-full flex justify-center items-center mx-auto font-semibold px-4"
            >
              {successMsg}
            </motion.p>
          ) : (
            <form className="w-full flex flex-col items-center gap-4 md:gap-10">
              <div className="w-full flex flex-col md:flex-row gap-4 items-center md:gap-10 px-4 lg:px-0">
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Add your name"
                  className="w-full md:w-1/2 py-2 px-4 text-base text-black placeholder:text-gray-600 font-bold placeholder:font-normal outline-none border-transparent border-2 focus-within:border-yellow-500 duration-200"
                  type="text"
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Add your email"
                  className="w-full md:w-1/2 py-2 px-4 text-base text-black placeholder:text-gray-600 font-bold placeholder:font-normal outline-none border-transparent border-2 focus-within:border-yellow-500 duration-200"
                  type="email"
                />
              </div>
              <div className="w-full h-full px-4 lg:px-0 flex flex-col items-center gap-6">
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message"
                  className="w-full text-base h-36 p-4 text-black placeholder:text-gray-600 font-bold placeholder:font-normal outline-none border-transparent border-2 focus-within:border-yellow-500 duration-200 resize-none"
                ></textarea>
                {errorMsg && (
                  <p className="w-full text-center text-base tracking-wider bg-red-500">
                    {errorMsg}
                  </p>
                )}
                <button
                  onClick={sendMessage}
                  className="w-44 h-12 bg-yellow-500 text-base font-bold tracking-wide border-2 border-transparent hover:bg-black hover:border-yellow-500 duration-200"
                >
                  Send Now
                </button>
              </div>
            </form>
          )}
          <div>
            <div className="text-lg font-thin flex flex-col lg:flex-row justify-between items-center px-8">
              <p>Made by Lutfiyar</p>
              <p>2023 neoN All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
