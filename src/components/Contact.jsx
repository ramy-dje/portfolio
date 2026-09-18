import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { theBlack } from '../utils/colors';
import MagneticButton from './MagneticButton';
import Magnetic from '../utils/Magnetic';
import emailjs from '@emailjs/browser';

function Contact() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [emailSentCorrectly, setEmailSentCorrectly] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const updatedErrors = validate({ ...formData, [name]: value });
      setErrors(updatedErrors);
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    const updatedErrors = validate(formData);
    setErrors(updatedErrors);
  };

  const validate = (data) => {
    const newErrors = {};
    if (!data.user_name.trim()) newErrors.user_name = t('contact.errors.nameRequired');
    if (!data.user_email.trim()) {
      newErrors.user_email = t('contact.errors.emailRequired');
    } else if (!/^\S+@\S+\.\S+$/.test(data.user_email)) {
      newErrors.user_email = t('contact.errors.invalidEmail');
    }
    if (!data.message.trim()) newErrors.message = t('contact.errors.messageRequired');
    return newErrors;
  };

  const sendEmail = () => {
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setTouched({
        user_name: true,
        user_email: true,
        message: true,
      });
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
      .then(() => {
        setEmailSentCorrectly(true);
        setFormData({
          user_name: '',
          user_email: '',
          message: '',
        });
        setErrors({});
        setTouched({});
      })
      .catch((err) => {
        console.error('Failed to send email. Error:', err);
      })
      .finally(() => setIsSending(false));
  };

  return (
    <section id="contact" className="text-black md:py-16 py-10 md:px-32 px-4">
      {/* Header (matches other sections) */}
      <div className="mb-16">
        {/* Top meta row */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-[13px] sm:text-sm font-medium uppercase tracking-tight text-black">
            <span>{t('contact.meta')}</span>
            <span>{t('contact.metaNumber')}</span>
          </div>
          <div className="mt-2 h-px w-full bg-black"></div>
        </div>

        {/* Header layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[80px] leading-[0.9] uppercase font-semibold tracking-tight text-black">
              {t('contact.title')}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="sm:text-lg text-black/60 max-w-3xl">
              {t('contact.description')}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-start gap-16">
        {/* Form Section */}
        <div className="md:w-7/12 w-full space-y-0">
          {/* Name */}
          <div className="border-t border-b border-black/10 py-8 px-0 relative">
            <div className="absolute start-0 top-8 text-black/40 text-sm font-mono">
              01
            </div>
            <div className="ms-12">
              <label className="block text-xl md:text-2xl font-medium tracking-tight mb-4">
                {t('contact.form.nameQuestion')}
              </label>
              <input
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={t('contact.form.namePlaceholder')}
                className="w-full bg-transparent text-black/70 placeholder:text-black/40 text-lg outline-none"
              />
              {touched.user_name && errors.user_name && (
                <p className="text-red-400 text-sm mt-2">{errors.user_name}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="border-b border-black/10 py-8 px-0 relative">
            <div className="absolute start-0 top-8 text-black/40 text-sm font-mono">
              02
            </div>
            <div className="ms-12">
              <label className="block text-xl md:text-2xl font-medium tracking-tight mb-4">
                {t('contact.form.emailQuestion')}
              </label>
              <input
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={t('contact.form.emailPlaceholder')}
                className="w-full bg-transparent text-black/70 placeholder:text-black/40 text-lg outline-none"
              />
              {touched.user_email && errors.user_email && (
                <p className="text-red-400 text-sm mt-2">{errors.user_email}</p>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="border-b border-black/10 py-8 px-0 relative">
            <div className="absolute start-0 top-8 text-black/40 text-sm font-mono">
              03
            </div>
            <div className="ms-12">
              <label className="block text-xl md:text-2xl font-medium tracking-tight mb-4">
                {t('contact.form.messageQuestion')}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={t('contact.form.messagePlaceholder')}
                className="w-full h-32 bg-transparent text-black/70 placeholder:text-black/40 text-lg outline-none resize-none"
              />
              {touched.message && errors.message && (
                <p className="text-red-400 text-sm mt-2">{errors.message}</p>
              )}
            </div>
          </div>

          {/* Send Button */}
          <div className="relative h-28 mt-16">
            <div className="absolute inset-x-0 top-1/2 h-px bg-black/10" />
            <div className="absolute top-1/2 end-0 transform -translate-y-1/2">
              <MagneticButton
                title={t('contact.form.send')}
                isSMall={isMobile}
                onClick={sendEmail}
                loading={isSending}
                success={emailSentCorrectly}
                disabled={isSending || emailSentCorrectly}
              />
            </div>
            {emailSentCorrectly && (
              <p className="text-black/50 text-base absolute end-50 top-28 transform -translate-y-1/2">
                {t('contact.form.thankYou')}
              </p>
            )}
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
            <h3 className="text-black/40 text-sm uppercase tracking-tight font-medium mb-2">
              {t('contact.contactDetails')}
            </h3>
            <p className="text-base font-sans" dir="ltr">+213 0782100526</p>
            <p className="text-base font-sans" dir="ltr">ramyromirso@gmail.com</p>
          </div>
          <div>
            <h3 className="text-black/40 text-sm uppercase tracking-tight font-medium mb-2">
              {t('contact.socials')}
            </h3>
            <div className="space-y-2">
              <Magnetic modify={0.05}>
                <a
                  href="https://www.linkedin.com/in/rami-djebeli"
                  target="_blank"
                  className="text-base block hover:text-[#0A66C2] transition"
                >
                  LinkedIn
                </a>
              </Magnetic>
              <Magnetic modify={0.05}>
                <a
                  href="https://github.com/ramy-dje"
                  target="_blank"
                  className="text-base block hover:text-black/50 transition"
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

