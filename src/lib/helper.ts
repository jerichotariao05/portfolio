import { isValidEmail, isValidLength, isNonEmpty } from "./validation";

export interface ContactFormData {
  senderName: string;
  senderEmail: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  senderName: string;
  senderEmail: string;
  subject: string;
  message: string;
}

export function validateContactForm(data: ContactFormData): {
  isValid: boolean;
  errors: ContactFormErrors;
} {
  const errors: ContactFormErrors = {
    senderName: "",
    senderEmail: "",
    subject: "",
    message: "",
  };

  let isValid = true;

  if (!isNonEmpty(data.senderName)) {
    errors.senderName = "Name is required.";
    isValid = false;
  } else if (!isValidLength(data.senderName, 50)) {
    errors.senderName = "Name exceeds 50 characters.";
    isValid = false;
  }

  if (!isNonEmpty(data.senderEmail)) {
    errors.senderEmail = "Email is required.";
    isValid = false;
  } else if (!isValidEmail(data.senderEmail)) {
    errors.senderEmail = "Please enter a valid email address.";
    isValid = false;
  } else if (!isValidLength(data.senderEmail, 50)) {
    errors.senderEmail = "Email exceeds 50 characters.";
    isValid = false;
  }

  if (!isNonEmpty(data.subject)) {
    errors.subject = "Subject is required.";
    isValid = false;
  } else if (!isValidLength(data.subject, 50)) {
    errors.subject = "Subject exceeds 50 characters.";
    isValid = false;
  }

  if (!isNonEmpty(data.message)) {
    errors.message = "Message is required.";
    isValid = false;
  } else if (!isValidLength(data.message, 5000)) {
    errors.message = "Message exceeds 5000 characters.";
    isValid = false;
  }

  return { isValid, errors };
}

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong. Please try again later.";
  }

  return message;
};
