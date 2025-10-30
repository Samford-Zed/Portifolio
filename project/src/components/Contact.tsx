import React, { useState } from "react";

import emailjs from "emailjs-com";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace these with your actual EmailJS service, template, and user IDs
    const serviceID = "service_dn84trz";
    const templateID = "template_toirgaf";
    const userID = "2D1rIDpgO5Ydb7y4i";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(() => {
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        alert("Failed to send message. Please try again later.");
        console.error("EmailJS error:", error);
      });
  };

  return (
    <section id='contact' className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold text-center text-gray-900 mb-16'>
            Get In <span className='text-yellow-600'>Touch</span>
          </h2>

          <div className='grid md:grid-cols-2 gap-12'>
            {/* Contact Information */}
            <div className='space-y-8'>
              <div>
                <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                  Let's Connect
                </h3>
                <p className='text-gray-600 mb-8'>
                  I'm always open to discussing new opportunities, interesting
                  projects, or just having a chat about web development. Feel
                  free to reach out!
                </p>
              </div>

              <div className='space-y-4'>
                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center'>
                    <Mail className='text-yellow-600' size={20} />
                  </div>
                  <div>
                    <p className='font-semibold text-gray-900'>Email</p>
                    <p className='text-gray-600'>samizenebe508@gmail.com</p>
                  </div>
                </div>

                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center'>
                    <MapPin className='text-yellow-600' size={20} />
                  </div>
                  <div>
                    <p className='font-semibold text-gray-900'>Location</p>
                    <p className='text-gray-600'>Adama, Ethiopia</p>
                  </div>
                </div>
              </div>

              <div className='space-y-4'>
                <h4 className='text-lg font-semibold text-gray-900'>
                  Follow Me
                </h4>
                <div className='flex gap-4'>
                  <a
                    href='https://github.com/Samford-Zed'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-yellow-600 hover:text-white transition-all duration-200'
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href='https://linkedin.com/in/samuelzenebe'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-yellow-600 hover:text-white transition-all duration-200'
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href='https://t.me/samplehu'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-yellow-600 hover:text-white transition-all duration-200'
                  >
                    <MessageCircle size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className='bg-gray-50 rounded-lg p-8'>
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                Send Message
              </h3>

              {isSubmitted && (
                <div className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6'>
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}

              {/*
                To enable email sending, set up an account at https://www.emailjs.com/
                - Create an email service and template
                - Replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, and YOUR_PUBLIC_KEY above
                - Install emailjs-com: npm install emailjs-com
              */}
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all duration-200'
                    placeholder='Your name'
                  />
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all duration-200'
                    placeholder='your.email@example.com'
                  />
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all duration-200'
                    placeholder='Your message...'
                  />
                </div>

                <button
                  type='submit'
                  className='w-full bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-all duration-200 flex items-center justify-center gap-2'
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
