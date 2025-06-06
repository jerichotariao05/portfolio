"use server";
import { Resend } from "resend";
import { getErrorMessage } from "@/lib/helper";
import ContactFormEmail from "@/email/ContactFormEmail";
import React from "react";
import { isValidEmail, isValidLength, isNonEmpty } from "@/lib/validation";

export const sendEmail = async (formData: FormData) => {
  const senderName = (formData.get("senderName") as string | null) ?? "";
  const senderEmail = (formData.get("senderEmail") as string | null) ?? "";
  const subject = (formData.get("subject") as string | null) ?? "";
  const message = (formData.get("message") as string | null) ?? "";

  const resend = new Resend(process.env.RESEND_API_KEY);

  if (!isNonEmpty(senderName) || !isValidLength(senderName, 50)) {
    return { error: "Name must not be empty and be less than 50 characters." };
  }

  if (
    !isNonEmpty(senderEmail) ||
    !isValidLength(senderEmail, 50) ||
    !isValidEmail(senderEmail)
  ) {
    return { error: "Email must be valid and be less than 50 characters." };
  }

  if (!isNonEmpty(subject) || !isValidLength(subject, 50)) {
    return {
      error: "Subject must not be empty and be less than 50 characters.",
    };
  }

  if (!isNonEmpty(message) || !isValidLength(message, 5000)) {
    return {
      error: "Message must not be empty and be less than 5000 characters.",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "jerichotariao15@gmail.com",
      subject: "Message from website contact form",
      replyTo: senderEmail,
      react: React.createElement(ContactFormEmail, {
        senderName: senderName,
        senderEmail: senderEmail,
        subject: subject,
        message: message,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
