import React, { useState } from "react";
import { theBlack } from "../utils/colors";
import MagneticButton from "./MagneticButton";
import Magnetic from "../utils/Magnetic";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [emailSentCorrectly, setEmailSentCorrectly] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // live validate while typing if already touched
    if (touched[name]) {
      const updatedErrors = validate({ ...formData, [name]: value });
      setErrors(updatedErrors);
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });

    const updatedErrors = validate(formData);
    setErrors(updatedErrors);
  };

  const validate = (data) => {
    const newErrors = {};
    if (!data.name.trim()) newErrors.name = "Name is required";
    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!data.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const sendEmail = () => {
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setTouched({ user_name: true, user_email: true, message: true });
      return;
    }
    setIsSending(true);
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (response) => {
          setEmailSentCorrectly(true);
          setFormData({ user_name: "", user_email: "", message: "" });
          setErrors({});
          setTouched({});
        },
        (err) => {
          console.error("Failed to send email. Error:", err);
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };


  return (
    <section id="contact" className="text-black md:py-16 py-10 md:px-32 px-4">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 max-w-2xl leading-snug">
        Let’s start working on a project together
      </h2>

      <div className="flex flex-col md:flex-row md:items-start gap-16">
        <div className="md:w-7/12 w-full space-y-0">
          {/* Name */}
          <div className="border-t border-b border-gray-600 py-8 px-0 relative">
            <div className="absolute left-0 top-8 text-gray-500 text-sm font-mono">
              01
            </div>
            <div className="ml-12">
              <label className="block text-2xl mb-4 ">
                What's your name?
              </label>
              <input
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="John Doe *"
                className="w-full bg-transparent text-gray-400 placeholder:text-gray-500 text-xl outline-none "
              />
              {touched.name && errors.name && (
                <p className="text-red-400 text-sm mt-2">{errors.name}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="border-b border-gray-600 py-8 px-0 relative">
            <div className="absolute left-0 top-8 text-gray-500 text-sm font-mono">
              02
            </div>
            <div className="ml-12">
              <label className="block text-2xl mb-4 ">
                What's your email?
              </label>
              <input
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="john@doe.com *"
                className="w-full bg-transparent text-gray-400 placeholder:text-gray-500 text-xl outline-none "
              />
              {touched.email && errors.email && (
                <p className="text-red-400 text-sm mt-2">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="border-b border-gray-600 py-8 px-0 relative">
            <div className="absolute left-0 top-8 text-gray-500 text-sm font-mono">
              03
            </div>
            <div className="ml-12">
              <label className="block text-2xl mb-4 ">
                What's your message?
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Tell me how can i help you *"
                className="w-full h-32 bg-transparent text-gray-400 placeholder:text-gray-500 text-xl outline-none resize-none "
              />
              {touched.message && errors.message && (
                <p className="text-red-400 text-sm mt-2">{errors.message}</p>
              )}
            </div>
          </div>

          {/* Send Button */}
          <div className="relative h-28 mt-16">
            <div className="absolute inset-x-0 top-1/2 h-px bg-gray-600"></div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
              <MagneticButton
                title="Send"
                isSMall={window.innerWidth < 768}
                onClick={sendEmail}
                loading={isSending}
                success={emailSentCorrectly}
                disabled={isSending || emailSentCorrectly}
              />
              {emailSentCorrectly && (
                <p className="text-gray-400 text-lg mt-2">Thank you!</p>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="md:w-4/12 w-full">
          <img
            src="ramy2.png"
            alt="Rami Djebeli"
            className="w-[130px] h-[130px] rounded-full mb-8"
          />

          <div className="mb-10">
            <h3 className="text-gray-400 text-xl mb-1">Contact</h3>
            <p className="text-lg">+213 0782100526</p>
            <p className="text-lg">ramyromirso@gmail.com</p>
          </div>

          <div>
            <h3 className="text-gray-400 text-xl mb-2">Socials</h3>
            <div className="space-y-2">
              <Magnetic modify={0.05}>
                <a
                  href="https://www.linkedin.com/in/rami-djebeli"
                  target="_blank"
                  className="text-lg block hover:text-[#0A66C2] transition"
                >
                  LinkedIn
                </a>
              </Magnetic>
              <Magnetic modify={0.05}>
                <a
                  href="https://github.com/ramy-dje"
                  target="_blank"
                  className="text-lg block hover:text-gray-400 transition"
                >
                  GitHub
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
