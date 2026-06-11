"use client";

import { ContactMessageSection } from "../../app/constants";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { motion } from "framer-motion";
import { getAnimation } from "@/utils/Animation";

function ContactPageMessageSection() {
  return (
    <div className="mx-auto h-screen w-4/5 overflow-hidden">
      <motion.h1
        {...getAnimation("top")}
        className="mb-5 text-center text-4xl font-bold italic text-stone-600"
      >
        {ContactMessageSection.title}
      </motion.h1>

      <div className="flex items-start justify-center gap-2">
        {/* Left Section */}
        <motion.div
          {...getAnimation("left", { delay: 0.2 })}
          className="w-1/2 space-y-3"
        >
          <h1 className="text-5xl font-bold">
            {ContactMessageSection.subtitle}
          </h1>
          <p className="cursor-text hover:text-orange-600">
            {ContactMessageSection.description}
          </p>

          {/* Social Section */}
          <div className="flex items-start justify-between">
            {/* Socials */}
            <motion.div
              {...getAnimation("left", { delay: 0.4 })}
              className="w-1/2 space-y-3"
            >
              <h1 className="text-2xl font-bold">Social Network</h1>
              <div className="flex items-center justify-start gap-2">
                <FaFacebook
                  className="cursor-pointer hover:text-blue-600"
                  size={20}
                />
                <FaLinkedin
                  className="cursor-pointer hover:text-blue-600"
                  size={20}
                />
                <FaXTwitter
                  className="cursor-pointer hover:text-blue-600"
                  size={20}
                />
                <SiInstagram
                  className="cursor-pointer hover:text-blue-600"
                  size={20}
                />
              </div>
            </motion.div>

            {/* Hotline */}
            <motion.div
              {...getAnimation("right", { delay: 0.6 })}
              className="w-1/2 space-y-3"
            >
              <h1 className="text-2xl font-bold">Hot-Line</h1>
              <p className="cursor-pointer hover:text-blue-600">
                +880 1512345678
              </p>
              <p className="cursor-pointer hover:text-blue-600">
                +880 1612345678
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.div
          {...getAnimation("right", { delay: 0.8 })}
          className="w-1/2 space-y-5 rounded-xl border border-white p-5"
        >
          <input
            type="text"
            className="w-full border-b-2 bg-transparent text-2xl outline-none"
            placeholder="Name"
          />
          <input
            type="email"
            className="w-full border-b-2 bg-transparent text-2xl outline-none"
            placeholder="Email"
          />
          <textarea
            name="message"
            id="message"
            rows="4"
            placeholder="Message"
            className="w-full border-b-2 bg-black text-2xl text-white outline-none"
            maxLength={70}
          />
          <button
            type="submit"
            className="w-full rounded-xl border bg-transparent px-6 py-3 font-bold uppercase hover:bg-white hover:text-black"
          >
            Submit
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactPageMessageSection;
