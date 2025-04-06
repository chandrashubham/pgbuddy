'use client';

import { useState } from 'react';

const Page = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setResponseMessage('Message sent Successfully!');
    setShowAlert(true); // Show alert
        setFormData({ name: '', email: '', message: '' });
     
       
      } else {
        setResponseMessage(result.error || 'Failed to send message.');
      }
    } catch (error) {
      setResponseMessage('Error sending message.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setShowAlert(false);
      }, 1000);
    }
  };

  return (
<section className="relative w-full bg-gradient-to-br from-orange-50 to-white dark:from-gray-900 dark:to-gray-800 py-24">
  <div className="relative z-10 container mx-auto px-6 lg:px-12">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
      
      {/* 📸 Left Side Full Height Illustration */}
      <div className="hidden lg:flex w-full max-w-2xl h-full">
        <img
          src="https://img.freepik.com/free-vector/organic-flat-man-customer-support_23-2148893295.jpg?ga=GA1.1.1658570461.1743932466&semt=ais_hybrid&w=740"
          alt="Contact Illustration"
          className="object-contain h-full w-full opacity-60 rounded-lg"
        />
      </div>

      {/* ✉️ Contact Form */}
      <div className="w-full lg:w-1/2 bg-white dark:bg-gray-900 shadow-2xl rounded-3xl p-10">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-4">
          Let's Connect
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          We'd love to hear from you! Fill out the form and we'll be in touch.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full mt-1 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="flex-1">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full mt-1 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full mt-1 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {showAlert && (
            <div
              className={`text-center mt-4 font-semibold transition-opacity duration-300 ${
                responseMessage.toLowerCase().includes("success")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {responseMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  </div>
</section>




  
  
  
  );
};

export default Page;
