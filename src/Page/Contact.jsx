

import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
    return (
        <div>
               <div className="bg-[#0a0f1e] text-white py-16 px-6 md:px-16">
      <h2 className="text-4xl font-bold text-center">Contact Me</h2>
      <p className="text-center text-gray-400 mt-2">Get in touch</p>

      <div className="flex flex-col md:flex-row justify-between items-center mt-10">
        {/* Contact Info */}
        <div className="w-full md:w-1/2 space-y-6">
          <h3 className="text-2xl font-semibold">Contact Information</h3>
          <p className="flex items-center gap-3 text-gray-400">
            <FaPhoneAlt className="text-blue-400" /> +880 1641310378 (WhatsApp available)
          </p>
          <p className="flex items-center gap-3 text-gray-400">
            <FaEnvelope className="text-blue-400" /> nazmulhasanabir2024.com
          </p>
          <p className="flex items-center gap-3 text-gray-400">
            <FaMapMarkerAlt className="text-blue-400" /> Chittagong, Bangladesh.
          </p>

          <h3 className="text-2xl font-semibold mt-4">Let's connect</h3>
          <div className="flex gap-4 text-2xl">
           <a  target="_blank" href="https://www.linkedin.com/in/nazmul-hasan-abir/" >
             <FaLinkedin className="cursor-pointer hover:text-blue-400"></FaLinkedin>
           </a>
           <a target="_blank" href="https://github.com/nazmulhasanabir">
            <FaGithub className="cursor-pointer hover:text-gray-400" />
           </a>
           <a target="_blank" href="https://www.facebook.com/NazmulHasanAbir72">
            <FaFacebook className="cursor-pointer hover:text-blue-500" />
            </a>
           <a target="_blank" href="https://x.com/HasanAbir2024">
            <FaXTwitter className="cursor-pointer hover:text-gray-300" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2 bg-[#10172a] p-8 rounded-lg border border-blue-500 mt-8 md:mt-0">
          <form>
            <label className="block text-gray-300">Name</label>
            <input type="text" placeholder="Your Name" className="w-full bg-transparent border border-blue-400 p-3 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />

            <label className="block mt-4 text-gray-300">Email</label>
            <input type="email" placeholder="Your Email" className="w-full bg-transparent border border-blue-400 p-3 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />

            <label className="block mt-4 text-gray-300">Message</label>
            <textarea placeholder="Your message here" className="w-full bg-transparent border border-blue-400 p-3 mt-1 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>

            <button className="w-full bg-blue-500 text-white py-3 mt-6 rounded-md hover:bg-blue-600 transition">Submit</button>
          </form>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Contact;