'use client'
import { useState } from 'react';

export default function RegisterPGRoom() {
  const [formData, setFormData] = useState({
    ownerName: '',
    contactNumber: '',
    email: '',
    location: '',
    pgDescription: '',
    images: null,
    videos: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = new FormData();
  form.append('ownerName', formData.ownerName);
  form.append('contactNumber', formData.contactNumber);
  form.append('email', formData.email);
  form.append('location', formData.location);
  form.append('pgDescription', formData.pgDescription);

  if (formData.images) {
    Array.from(formData.images).forEach((file) => {
      form.append('images', file);
    });
  }

  if (formData.videos) {
    Array.from(formData.videos).forEach((file) => {
      form.append('videos', file);
    });
  }
    

    try {
      const response = await fetch('/api/registerpg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setResponseMessage(result.message ||'PG registered successfully!');
        setShowAlert(true); // Show alert
        setFormData({
          ownerName: '',
          contactNumber: '',
          email: '',
          location: '',
          pgDescription: '',
          images: null,
          videos: null,
        });
      } else {
        setResponseMessage(result.error || "Failed to register PG.");
        setShowAlert(true);
      }
    } catch (error) {
      setResponseMessage(error);
      setShowAlert(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
    
   
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 transition-colors duration-300">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          Register Your PG Room
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Fill out the form below to register your PG accommodation.
        </p>
      </div>
  
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-900 shadow-xl dark:shadow-md rounded-2xl p-6 sm:p-10 space-y-6 transition-colors duration-300"
      >
        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Owner's Name
            </label>
            <input
              type="text"
              id="ownerName"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-orange-500 focus:border-orange-500 px-4 py-2 outline-none"
            />
          </div>
          <div>
            <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Contact Number
            </label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-orange-500 focus:border-orange-500 px-4 py-2 outline-none"
            />
          </div>
        </div>
  
        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-orange-500 focus:border-orange-500 px-4 py-2 outline-none"
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-orange-500 focus:border-orange-500 px-4 py-2 outline-none"
            />
          </div>
        </div>
  
        {/* PG Description */}
        <div>
          <label htmlFor="pgDescription" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            About the PG
          </label>
          <textarea
            id="pgDescription"
            name="pgDescription"
            value={formData.pgDescription}
            onChange={handleInputChange}
            rows="5"
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-orange-500 focus:border-orange-500 px-4 py-2 outline-none resize-none"
          ></textarea>
        </div>
  
        {/* Image Upload */}
        <div>
          <label htmlFor="images" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Upload Images
          </label>
          <input
            type="file"
            id="images"
            name="images"
            accept="image/*"
            multiple
            onChange={handleInputChange}
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-orange-500 file:text-white hover:file:bg-orange-600 transition"
          />
        </div>
  
        {/* Video Upload */}
        <div>
          <label htmlFor="videos" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Upload Videos
          </label>
          <input
            type="file"
            id="videos"
            name="videos"
            accept="video/*"
            multiple
            onChange={handleInputChange}
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-orange-500 file:text-white hover:file:bg-orange-600 transition"
          />
        </div>
  
        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Registering...' : 'Register PG Room'}
          </button>
        </div>
  
        {/* Response Alert */}
        {showAlert && responseMessage && typeof responseMessage === 'string' && (
          <div
            className={`text-center font-medium transition-opacity duration-300 ${
              responseMessage.toLowerCase().includes("success")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {responseMessage}
          </div>
        )}
      </form>
    </div>
  </section>
  
  );
}
