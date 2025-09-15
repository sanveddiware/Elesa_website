import React from "react";
import { Mail, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 text-white"> 
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left side: info */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-gray-300 mb-8">
            Have questions, ideas, or just want to connect? We’d love to hear from you.
          </p>

          <div className="space-y-4">
            <p className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-blue-400" />
              walchand.elesa@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-blue-400" />
              Sangli, Maharashtra, India
            </p>
          </div>

          {/* Social icons */}
          <div className="flex gap-6 mt-8">
            <a href="https://www.instagram.com/elesa_wce/" className="hover:text-pink-400"><Instagram size={28} /></a>
            <a href="https://www.linkedin.com/company/elesa-wce/" className="hover:text-blue-400"><Linkedin size={28} /></a>
            <a href="https://www.facebook.com/wcesELESA?mibextid=ZbWKwL" className="hover:text-blue-400"><Facebook size={28} /></a>
          </div>
        </div>

        {/* Right side: form with transparent gradient */}
        <div className="bg-gradient-to-br from-blue-900/70 via-black/50 to-blue-700/70 backdrop-blur-xl p-8 rounded-2xl shadow-lg border border-white/20">
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block mb-2 text-sm font-medium">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                required
                className="w-full p-4 rounded-lg bg-black/40 border border-gray-600 text-white focus:outline-none focus:border-red-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full p-4 rounded-lg bg-black/40 border border-gray-600 text-white focus:outline-none focus:border-red-400"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-sm font-medium">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                rows="4"
                placeholder="Type your message here..."
                required
                className="w-full p-4 rounded-lg bg-black/40 border border-gray-600 text-white focus:outline-none focus:border-red-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 via-teal-500 to-green-500
 text-white font-bold hover:scale-105 transition-transform duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
