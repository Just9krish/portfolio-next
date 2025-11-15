import Contact from '@/components/contact/contact';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Get in touch with Amit Vishwakarma. Let's discuss your next project or collaborate on innovative solutions.",
};
const ContactPage = () => {
  return (
    <section className="py-16 md:py-24 flex flex-col justify-center items-center">
      <Contact />
    </section>
  );
};

export default ContactPage;
