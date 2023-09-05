import { useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import { BiLoaderAlt } from "react-icons/bi";
import "react-toastify/dist/ReactToastify.min.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  return (
    <section id="Contact" className="w-full section_color px-16 py-16">
      <h1 className="text-3xl font-bold text-center mb-16">Contact Me</h1>
      <div className="flex gap-12">
        <div className="flex-1">
          <Image
            className="hidden lg:flex h-full object-cover"
            src="/contact.png"
            width={1000}
            height={1000}
            unoptimized={true}
            quality={300}
            alt="contact"
          />
        </div>
        <div className="flex-1 flex flex-col gap-7">
          <h1 className="text-xl font-bold">Get in touch</h1>
          <p>
            My inbox is always open. Whether you have a question or just want to
            say hello, I will try my best to get back to you!
          </p>
          <form onSubmit="" className="flex flex-col gap-6">
            <input
              onChange={""}
              required
              value={""}
              name="name"
              type="text"
              placeholder="Full Name"
              className="outline-none section_color rounded-lg py-3 px-4"
            />
            <input
              onChange={""}
              required
              value={""}
              name="email"
              type="email"
              placeholder="Email"
              className="outline-none section_color rounded-lg py-3 px-4"
            />
            <textarea
              onChange={""}
              required
              value={""}
              name="message"
              rows={4}
              placeholder="Message"
              className="outline-none resize-none section_color rounded-lg py-3 px-4"
            />
            <button
              disabled={loading}
              className="btn primary_bg w-fit disabled:cursor-not-allowed">
              {loading ? (
                <span className="flex items-center gap-2">
                  Say Hello <BiLoaderAlt className="animate-spin" />
                </span>
              ) : (
                "Say Hello 👋"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
