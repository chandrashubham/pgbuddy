import React from 'react';

const About = () => {
  return (
    <main className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white px-4 sm:px-8 lg:px-16 py-20">
      {/* Hero Section */}
      <section className="text-center mb-24">
        <h1 className="text-5xl font-bold mb-4">Who We Are</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          Empowering students to find the perfect PG with comfort, convenience, and clarity.
        </p>
      </section>

      {/* Problem and Solution Section */}
      <section className="grid lg:grid-cols-2 gap-16 items-start mb-24">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-semibold mb-4">🚧 The Problem</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            Searching for PGs can be frustrating—students face outdated info, fake listings, and scattered sources. It's time-consuming and uncertain.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-semibold mb-4">💡 Our Solution</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            A unified, verified platform showcasing authentic PG listings with images, videos, and smart filters—making student accommodation easy, transparent, and fast.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="text-center mb-24">
        <h2 className="text-4xl font-semibold mb-4">🎯 Our Mission</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          We aim to bridge the gap between students and trustworthy PGs through modern technology and user-first design. Simplicity, accuracy, and accessibility are at our core.
        </p>
      </section>

      {/* Team Section */}
      <section>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-2">👥 Meet Our Team</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Designers, developers, and dreamers behind the scenes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            {
              name: "Shubham Chandra",
              role: "UI & Backend Developer",
              description: "Seamless UX builder & logic guru.",
              image: "https://img.freepik.com/premium-photo/3d-little-boy-character_606187-946.jpg?ga=GA1.1.1696835303.1732632830&semt=ais_hybrid&w=740",
            },
            {
              name: "Shivang Kashyap",
              role: "UI Designer",
              description: "Crafting clean and engaging interfaces.",
              image: "https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151033963.jpg?ga=GA1.1.1696835303.1732632830&semt=ais_hybrid&w=740",
            },
            {
              name: "Aastha Kashyap",
              role: "UI Designer",
              description: "User-centric and aesthetically focused.",
              image: "https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151033983.jpg?ga=GA1.1.1696835303.1732632830&semt=ais_hybrid&w=740",
            },
            {
              name: "Khushi",
              role: "UI Designer",
              description: "Making visuals human and vibrant.",
              image: "https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151033981.jpg?ga=GA1.1.1696835303.1732632830&semt=ais_hybrid&w=740",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 text-center"
            >
            <div className="relative w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-4">
  <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-orange-400 shadow-md">
    <img
      src={member.image}
      alt={member.name}
      className="w-full h-full object-contain"
    />
  </div>
</div>
              <h3 className="text-2xl font-semibold mb-1">{member.name}</h3>
              <p className="text-orange-500 text-sm mb-2">{member.role}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {member.description}
              </p>
              <div className="flex justify-center gap-4">
                <a href="https://facebook.com" target="_blank" className="text-blue-600 hover:text-blue-800">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com" target="_blank" className="text-pink-500 hover:text-pink-700">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
