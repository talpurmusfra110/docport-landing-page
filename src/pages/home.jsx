import React from 'react';

function Home() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Increase your productivity with docport
        </h1>
        
        {/* Decorative line */}
        <div className="w-48 h-1.5 bg-green-600 mx-auto mb-8 rounded-full" />

        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          docport brings all of your logistics processes into one place,<br /> 
          helps you keep an eye on everything at all times<br />
          and makes it easier to see the big picture
        </p>

        <div className="flex justify-center gap-6">
          <button className="bg-green-600 text-white px-8 py-4 rounded-lg
            text-lg font-semibold hover:bg-green-700 transition-all">
            Find out more
          </button>
          <button className="bg-transparent border-3 border-green-600 text-green-600
            px-8 py-4 rounded-lg text-lg font-medium hover:bg-green-50 transition-all">
            view more
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;