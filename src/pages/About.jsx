function About() {
  return (
    <section id="about" className="py-16 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            What is docport and how can we help?
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Docport hosts a variety of features that aim to make your life easier, streamline your logistics processes and provide a better overview of all of your logistics processes
          </p>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 space-y-10">
          <div className="flex items-start gap-6">
            <div className="text-3xl text-green-600 mt-1">📦</div>
            <div>
              <h2 className="text-2xl font-semibold mb-3">Collaboration</h2>
              <p className="text-gray-600">
                Plan, collaborate, and share your shipments with partners, carriers and everyone that’s involved
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="text-3xl text-green-600 mt-1">📊</div>
            <div>
              <h2 className="text-2xl font-semibold mb-3">Dashboard</h2>
              <p className="text-gray-600">
                docport dashboard brings all of your analytics to life by visualising your data for you
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="text-3xl text-green-600 mt-1">📱</div>
            <div>
              <h2 className="text-2xl font-semibold mb-3">Engagement</h2>
              <p className="text-gray-600">
                Quickly add partners, share journeys, access documents and more with the desktop program and mobile app
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;