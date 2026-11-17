function Contact() {
  return (
    <section className="min-h-screen bg-white py-16 px-6 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Side - Header Text */}
        <div className="flex flex-col justify-center space-y-4 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-900">Get in touch</h1>
          <p className="text-md text-gray-800">
          if you have any questions that you'd like to ask us, 
          feel free to get in touch or book a consultation
          </p>
        </div>

        {/* Right Side - Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              placeholder="Type your message here"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition"
          >
            Submit
          </button>
          
        </form>
          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-12">
          ©2024 docport all rights reserved
        </p>
      </div>
    </section>
  );
}

export default Contact;
