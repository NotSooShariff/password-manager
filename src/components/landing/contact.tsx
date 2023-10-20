import React from 'react';

const ContactSection = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const name = (document.getElementById('full-name') as HTMLInputElement)?.value;
    const email = (document.getElementById('email') as HTMLInputElement)?.value;
    const subject = 'Query About Monolith Password Manager';
    const mailtoLink = `mailto:owais.ahmed.shariff@gmail.com?subject=${subject}&body=Name: ${name}%0D%0AEmail: ${email}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="text-gray-400 bg-gray-900 body-font pt-20">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Have a Question? Write to Us!
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whether you have questions, feedback, or need support, our team is just a click away. Feel free to reach out, and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
            <div className="relative sm:mb-0 flex-grow w-full">
              <label htmlFor="full-name" className="leading-7 text-sm text-gray-400">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative sm:mb-0 flex-grow w-full">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button type="submit" className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover-bg-blue-600 rounded text-lg">
              Send
            </button>
          </div>
        </form>
      </div>
      <br className="hidden lg:inline-block" />
      <br className="hidden lg:inline-block" />
      <br className="hidden lg:inline-block" />
      <br className="hidden lg:inline-block" />
      <br className="hidden lg:inline-block" />
    </section>
  );
};

export default ContactSection;
