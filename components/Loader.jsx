// components/Loader.js
import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900 bg-opacity-70">
      <div className="w-12 h-12 border-4 border-orange-400 border-dashed rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
