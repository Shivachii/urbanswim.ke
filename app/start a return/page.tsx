import React from 'react';

const StartReturn = () => {
  return (
    <main className="w-full pt-5 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Start a Return</h1>
        <p className="mb-4 text-center">
          We understand that sometimes things don&apos;t work out. If you need to start a return, we&apos;re here to help. You can reach us through one of the following methods:
        </p>

        <div className="flex flex-col items-center">
          <div className="mb-6">
            <h2 className="text-xl font-semibold">Call Us</h2>
            <p className="text-gray-600">Phone: +254-XXX-XXXXXX</p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold">Email Us</h2>
            <a href="mailto:support@urbaneswimke.com" className="text-blue-600 underline">support@urbaneswimke.com</a>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold">Find Us on Instagram</h2>
            <a href="https://www.instagram.com/urbaneswimke" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">@urbaneswimke</a>
          </div>
        </div>

        <p className="text-center mt-8">
          Our team will guide you through the return process and ensure that everything is taken care of as quickly as possible.
        </p>
      </div>
    </main>
  );
};

export default StartReturn;
