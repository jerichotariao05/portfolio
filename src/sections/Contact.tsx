"use client";

import { sendEmail } from "@/actions/sendEmails";
import SubmitBtn from "@/components/SubmitBtn";
import toast from "react-hot-toast";
import {
  ContactFormData,
  ContactFormErrors,
  validateContactForm,
} from "@/lib/helper";
import { useState } from "react";
import { useSectionInView } from "@/lib/custom_hook";

const ContactSection = () => {
  const { ref } = useSectionInView("Contact", 0.65);

  const [formData, setFormData] = useState<
    ContactFormData & { honeybot: string }
  >({
    senderName: "",
    senderEmail: "",
    subject: "",
    message: "",
    honeybot: "",
  });
  const [pending, setPending] = useState(false);

  const [errors, setErrors] = useState<ContactFormErrors>({
    senderName: "",
    senderEmail: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.honeybot !== "") return;

    setPending(true);

    const { isValid, errors: validationErrors } = validateContactForm(formData);
    setErrors(validationErrors);

    if (!isValid) {
      setPending(false);
      return;
    }

    const form = new FormData();
    form.append("senderName", formData.senderName);
    form.append("senderEmail", formData.senderEmail);
    form.append("subject", formData.subject);
    form.append("message", formData.message);

    try {
      const { data, error } = await sendEmail(form);
      if (error) {
        toast.error(error);
      } else {
        toast.success("Email sent successfully! Thank you for reaching out.");
        setFormData({
          senderName: "",
          senderEmail: "",
          subject: "",
          message: "",
          honeybot: "",
        });
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again later.");
    }
    setPending(false);
  };

  return (
    <section
      className="py-16 pt-12 lg:py-24 lg:pt-32 sm:scroll-mt-2 lg:-scroll-mt-16"
      id="contact"
      ref={ref}
    >
      <div className="container">
        <div className="bg-gradient-to-br from-sky-100 via-blue-200 to-blue-300 rounded-3xl shadow-md py-8 px-10 relative z-0">
          <div
            className="absolute inset-0 -z-10 opacity-5 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><filter id='noiseFilter'><feTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch' /></filter>
        <rect width='100%' height='100%' filter='url(#noiseFilter)' /></svg>")`,
            }}
          ></div>
          <h3 className="font-serif text-2xl text-center">Contact Me</h3>
          <h5 className="font-sans text-md text-center">
            Boot up a conversation by reaching out below.
          </h5>
          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-4 font-serif"
          >
            <input
              type="text"
              name="honeybot"
              value={formData.honeybot}
              onChange={(e) =>
                setFormData({ ...formData, honeybot: e.target.value })
              }
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <input
              className="custom-input"
              name="senderName"
              type="text"
              placeholder="Your name*"
              value={formData.senderName}
              onChange={(e) =>
                setFormData({ ...formData, senderName: e.target.value })
              }
            />
            {errors.senderName && (
              <p className="text-red-500 text-sm mt-1 text-left">
                {errors.senderName}
              </p>
            )}

            <input
              className="custom-input"
              name="senderEmail"
              type="text"
              placeholder="Your email*"
              value={formData.senderEmail}
              onChange={(e) =>
                setFormData({ ...formData, senderEmail: e.target.value })
              }
            />
            {errors.senderEmail && (
              <p className="text-red-500 text-sm mt-1 text-left">
                {errors.senderEmail}
              </p>
            )}
            <input
              className="custom-input"
              name="subject"
              type="text"
              placeholder="Subject*"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1 text-left">
                {errors.subject}
              </p>
            )}

            <textarea
              className="h-52 border-2 border-gray-50 focus:outline-none focus:border-sky-300 rounded-lg p-4 shadow-sm"
              name="message"
              placeholder="Your message*"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1 text-left">
                {errors.message}
              </p>
            )}
            <SubmitBtn pending={pending} />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
