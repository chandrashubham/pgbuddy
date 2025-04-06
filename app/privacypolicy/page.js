"use client";
import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <section className="min-h-screen px-4 py-16 bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 text-orange-500">
          Privacy Policy
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.
        </p>

        <div className="space-y-8 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              1. Information We Collect
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We collect personal details such as your name, email address, phone number, and location when you register or list a PG. We may also gather usage data for improving our platform.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We use your information to provide and improve our services, personalize user experience, and communicate important updates. Your data is never sold to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              3. Data Protection
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              4. Cookies
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We use cookies to enhance your browsing experience and analyze site traffic. You can control cookie preferences in your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              5. Third-Party Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We may use third-party services like Google Maps or payment gateways. These services have their own privacy policies which we recommend reviewing.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              6. Updates to This Policy
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We may update this policy from time to time. Any changes will be posted on this page with a revised effective date.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              7. Contact Us
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              If you have any questions about this Privacy Policy, feel free to contact us at <a className="text-orange-500 underline" href="mailto:schand9983@gmail.com">support@pgbuddy.com</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
