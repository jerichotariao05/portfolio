import React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Text,
  Section,
  Hr,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  senderName: string;
  senderEmail: string;
  subject: string;
  message: string;
};

export default function ContactFormEmail({
  senderName,
  senderEmail,
  subject,
  message,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from {senderName}</Preview>
      <Tailwind>
        <Body>
          <Container className="mx-auto max-w-[600px] rounded-lg border-2 border-blue-200 bg-blue-50 px-6 py-8 text-slate-900">
            <Heading className="mb-6 text-xl text-center">
              You've received a new message
            </Heading>

            <Section className="mb-4">
              <Text>
                <strong>Name:</strong> {senderName}
              </Text>
              <Text>
                <strong>Email:</strong> {senderEmail}
              </Text>
              <Text>
                <strong>Subject:</strong> {subject}
              </Text>
            </Section>

            <Section className="mb-6">
              <Text>
                <strong>Message:</strong>
              </Text>
              <Text className="whitespace-pre-line">{message}</Text>
            </Section>

            <Hr />
            <Text className="mt-6 text-sm text-center text-gray-500">
              This message was sent via your website contact form.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
