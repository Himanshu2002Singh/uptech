// src/pages/ForgotPassword.tsx
import React from 'react';

const ForgotPassword: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Forgot Password</h2>
        <p className="text-gray-600 mb-6">
          If you forgot your password, please contact the administrator at{' '}
          <a
            href="mailto:support@trustingbrains.com"
            className="text-orange-600 underline hover:text-orange-800"
          >
            support@trustingbrains.com
          </a>
        </p>
        <a
          href="/"
          className="inline-block bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-2 rounded hover:from-red-700 hover:to-orange-700"
        >
          Go Back to Login
        </a>
      </div>
    </div>
  );
};

export default ForgotPassword;
